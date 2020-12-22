from django.urls import path

from . import views

urlpatterns = [
    path("feed/", views.ListNearEarthObjects.as_view(), name="feed-endpoint"),
    path(
        r"detail/<int:pk>",
        views.DetailNearEarthObject.as_view(),
        name="detail-endpoint",
    ),
]
