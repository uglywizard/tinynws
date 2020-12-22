# README

This simple app is composed by two 'pieces' (here in the same place, but is possible to deploy two different apps configurating the right urls in settings and envs).

Backend:

- (/api/) fetch data from NeoWS NASA and save it to a DB (dev: sqlite3, prod: postgresql) then serve this data trough a REST API. In this particular module lives the custom command (Api/management/commands/retrievedata.py) that retrieve the data from the NeoWS API and the specification for the execution of the cron job (api/cron.py)
- (/neod_backend_api/): main django module (config and services).

Frontend:

- (/client/) react app builded with create-react-app. Used in dev with webpack useful utils and in prod, in this specific case, the frontend build is served by django.

## Configuration

TODO

### Commands


- To generate a new secret key: python manage.py shell -c 'from django.core.management import utils; print(utils.get_random_secret_key())'
- The custom command is callable as 'python manage.py retrievedata'