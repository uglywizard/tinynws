# README

This simple app is composed by two 'pieces' (here in the same place in one straordinary and unique solution, but it's possible to deploy two different apps configurating the right urls in settings, envs and /api/views).

Backend:

- (/api/) fetch data from NeoWS NASA and save it to a DB (dev: sqlite3, prod: postgresql) then serve this data trough a REST API. In this particular module lives the custom command (Api/management/commands/retrievedata.py) that retrieve the data from the NeoWS API and the specification for the execution of the cron job (api/cron.py)
- (/neod_backend_api/): main django module (config and services).

Frontend:

- (/client/) react app builded with create-react-app. Used in dev with webpack useful utils and in prod, in this specific case, the frontend build is served by django.

## Configuration (with Poetry, an awesome dependency manager for Python)

For a matter of time I'll write down only the setup with poetry,
but a 'requirements.txt' is available in the root folder for every other depedency and environment manager to use.

### Django

Follows a basic list of commands to run the project in a local
env scenario. For deploy in production use _.prod_ as argument of the DJANGO_MODULE_KEY in .env file.

```bash
git clone https://github.com/uglywizard/QuakeData.git
cd cd QuakeData
poetry shell
poetry install
# (at this point update the .env file with the desired env choice at the DJANGO_MODULE_SETTINGS key and fill the other with all the necessary data, like SECRET_KEY)
source .env (a)
python manage.py migrate
python manage.py runserver
```

### React

```bash
git clone https://github.com/uglywizard/QuakeData.git
cd cd QuakeData
poetry shell
poetry install
# (at this point update the .env file with the desired env choice at the DJANGO_MODULE_SETTINGS key and fill the other with all the necessary data, like SECRET_KEY)
source .env (a)
python manage.py migrate
python manage.py runserver
```

## Commands

- To generate a new secret key: python manage.py shell -c 'from django.core.management import utils; print(utils.get_random_secret_key())'
- The custom command is callable as 'python manage.py retrievedata'