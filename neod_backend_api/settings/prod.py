from .base import *
import django_heroku
import dj_database_url

ALLOWED_HOSTS.append(".herokuapp.com")
DEBUG = False

db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES["default"].update(db_from_env)

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

SECURE_HSTS_PRELOAD = False
SECURE_HSTS_SECONDS = 0
SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False
SECURE_HSTS_INCLUDE_SUBDOMAINS = False

django_heroku.settings(locals(), logging=False)