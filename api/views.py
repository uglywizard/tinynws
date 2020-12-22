import logging
import os
from django.http import HttpResponse
from django.views import View
from django.conf import settings
from .models import NearEarthObject
from .paginations import CustomPagination
from .serializers import DetailNearEarthObjectSerializer, ListNearEarthObjectSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView


class DetailNearEarthObject(RetrieveAPIView):
    queryset = NearEarthObject.objects.all()
    serializer_class = DetailNearEarthObjectSerializer
    pagination_class = CustomPagination


class ListNearEarthObjects(ListAPIView):
    queryset = NearEarthObject.objects.all()
    serializer_class = ListNearEarthObjectSerializer
    pagination_class = CustomPagination


class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    build`).
    """

    index_file_path = os.path.join(settings.REACT_APP_DIR, "build", "index.html")

    def get(self, request):
        try:
            with open(self.index_file_path) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception("Production build of app not found")
            return HttpResponse(
                "<h1>Ops</h1>",
                status=501,
            )

    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    build`).

    index_file_path = os.path.join(settings.ROOT_DIR, "frontend", "build", "index.html")

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), "staticfiles", filename)

        if os.path.isfile(path):
            with open(path, "rb") as file:
                return HttpResponse(file.read(), content_type="application/javascript")
        else:
            return HttpResponseNotFound()
    """