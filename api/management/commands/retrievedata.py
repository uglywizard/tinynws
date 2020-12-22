from api.models import NearEarthObject
from api.utils import QueryField
from django.core.management.base import BaseCommand
import os
import requests


class Command(BaseCommand):
    help = "Fetch data from NASA NeoWS API and save response to DB."
    # url in env!
    url = "https://api.nasa.gov/neo/rest/v1/feed?api_key=" + os.environ["NASA_API_KEY"]
    req = {}

    def handle(self, *args, **kwargs):
        self.fetchData()
        self.prepareAndSaveData()
        return print("[COMPLETED]")

    """
    Make the GET request to NeoWS API
    """

    def fetchData(self):
        try:
            self.response = requests.get(self.url).json()
        except Exception:  # sorry, no time for proper exception handling :(
            return print("[ERROR! CAN'T FETCH FROM THE API]")

    """
    Parse fetched data (json->dict) and write the rows on the db.
    More info about QueryField class in /api/utils.py
    """

    def prepareAndSaveData(self):
        neo_collection = self.response["near_earth_objects"]
        for key in neo_collection:
            for item in neo_collection[key]:
                temp_id = QueryField(item).getKey("id")

                try:
                    if NearEarthObject.objects.get(id=temp_id):
                        print(
                            "There is a double. Skipping save of {}.".format(
                                NearEarthObject.objects.get(id=temp_id).id
                            )
                        )
                except Exception:  # sorry :(
                    neo = NearEarthObject(
                        id=temp_id,
                        name=QueryField(item).getKey("name"),
                        nasa_jpl_url=QueryField(item).getKey("nasa_jpl_url"),
                        close_approach_date=QueryField.normalizeDateKey(
                            QueryField(item).getKey(
                                "close_approach_data->close_approach_date_full"
                            )[0]
                        ),
                        relative_velocity=QueryField(item).getKey(
                            "close_approach_data->relative_velocity->kilometers_per_hour"
                        )[0],
                        estimated_diameter_min=QueryField(item).getKey(
                            "estimated_diameter->kilometers->estimated_diameter_min"
                        ),
                        estimated_diameter_max=QueryField(item).getKey(
                            "estimated_diameter->kilometers->estimated_diameter_max"
                        ),
                        is_potentially_hazardous=QueryField(item).getKey(
                            "is_potentially_hazardous_asteroid"
                        ),
                    )

                    print("{} [SAVED]".format(neo))
                    neo.save()
