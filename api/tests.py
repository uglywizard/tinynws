import json
from django.urls import include, path, reverse
from unittest import mock
from django.test import TestCase
from django.core.management import call_command
from rest_framework import status
from rest_framework.test import (
    APITestCase,
    URLPatternsTestCase,
)
from .models import NearEarthObject


class NearEarthObjectModelTestCase(TestCase):
    def test_str_should_not_fail_with_empty_neo(self):
        print("Test that should not fail with empty NearEarthObject object.")
        neo = NearEarthObject()
        self.assertEqual(str(neo), "NearEarthObject: None  NO URL")
        print("OK")


class RetrieveDataCommandTestCase(TestCase):
    def mocked_neows_api_response(*args, **kwargs):
        class MockResponse:
            def __init__(self):
                with open("mockData.json") as mockResponseData:
                    self.json_data = json.load(mockResponseData)
                self.status_code = 200

            def json(self):
                return self.json_data

        return MockResponse()

    @mock.patch("requests.get", side_effect=mocked_neows_api_response)
    def test_should_save_response_all_items_to_db(self, mock_get):
        print(
            "Test for 'retrievedata' command \
            (Fetch from \"mockData.json\" in root folder)"
        )
        call_command("retrievedata")
        self.assertEqual(NearEarthObject.objects.count(), 96)
        print("OK")

    @mock.patch("requests.get", side_effect=mocked_neows_api_response)
    def test_should_skip_duplicates(self, mock_get):
        print(
            "Test for 'retrievedata' command  with duplicates handling \
            (Fetch from \"mockData.json\" in root folder)"
        )
        call_command("retrievedata")
        call_command("retrievedata")
        self.assertEqual(NearEarthObject.objects.count(), 96)
        print("OK")


class TestAPIEndpoint(APITestCase, URLPatternsTestCase):
    """
    rest_framework should work well by itself,
    but here we have a test for the feed api endpoint.
    Only on GET, because the views are read-only.
    """

    urlpatterns = [
        path("api/", include("api.urls")),
    ]

    def test_feed_api_endpoint_get_should_succeed(self):
        print("Should GET 200 HTTP Response if exist Feed endpoint.")
        url = reverse("feed-endpoint")
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print("Response STATUS_CODE = {}".format(response.status_code))
        print("OK")
