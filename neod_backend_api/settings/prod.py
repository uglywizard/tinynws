from .base import *
import django_heroku
import dj_database_url

ALLOWED_HOSTS = ["tinynws.herokuapp.com"]
CORS_ALLOWED_ORIGINS = ["*.herokuapp.com"]

DEBUG = False

db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES["default"].update(db_from_env)

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

SECURE_HSTS_PRELOAD = True
SECURE_HSTS_SECONDS = 0
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CORS_ORIGIN_ALLOW_ALL = False

django_heroku.settings(locals(), logging=False)