from django.db import models


class NearEarthObject(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    nasa_jpl_url = models.URLField(max_length=200, default="NO URL")
    close_approach_date = models.DateTimeField(blank=True)
    relative_velocity = models.FloatField(default=0)
    estimated_diameter_min = models.FloatField(default=0)
    estimated_diameter_max = models.FloatField(default=0)
    is_potentially_hazardous = models.BooleanField(default=False)

    class Meta:
        ordering = ["close_approach_date"]

    def __str__(self):
        return "NearEarthObject: {} {} {}".format(
            self.id,
            self.name,
            self.nasa_jpl_url,
        )
