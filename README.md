# Tiny NeoWS

'Know urgent facts about things that happen not so far (but in reality so so so far) from the earth!'

This simple app is composed by two 'pieces' (here in the same place in one straordinary and unique solution, but it's possible to deploy two different apps configurating the right urls in settings, envs and /api/views).

## Backend

- (/api/) fetch data from NeoWS NASA and save it to a DB (dev: sqlite3, prod: postgresql) then serve this data trough a REST API. In this particular module lives the custom command (Api/management/commands/retrievedata.py) that retrieve the data from the NeoWS API and the specification for the execution of the cron job (api/cron.py)
- (/neod_backend_api/): main django module (config and services).
- The backend API is reachable by two read-only endpoints:
  - /api/feed/: return a list of NearEarthObject from the DB.
  - /api/detail/[id]: return a single NearEarthObject.

## Frontend

- (/client/) react app builded with create-react-app. Used in dev with webpack useful utils and in prod, in this specific case, the frontend build is served by django.

## Live copy

TinyNWS on Heroku: <https://tinynws.herokuapp.com/>

## Configuration

### React

In this scenario there is nothing to do with the frontend, it just works served by a view in django.

```bash
cd /client
yarn install && yarn build # to refresh the dependecies and build
cd ..
```

### Django

Follow a basic list of commands to run the project in a local
env scenario. For deploy in production use __.prod__ as argument of the DJANGO_MODULE_KEY in .env file.
In .env there is also a NASA_API_KEY configured with the DEMO_KEY supplied by NASA API. The key simply works,
but for a low number of requests.

__Poetry__

```bash
git clone {placeholder}
cd tinynws-django-react
poetry shell
poetry install
# (at this point update the .env file with the desired env choice at the DJANGO_MODULE_SETTINGS key and fill the other with all the necessary data, like SECRET_KEY)
source .env
python manage.py migrate
python manage.py retrievedata
python manage.py runserver
```

__Pip and virtualenv__

```bash
virtualenv -p python venv
source venv/bin/activate
git clone {placeholder}
cd tinynws-django-react
pip install -r requirements.txt
source .env
python manage.py migrate
python manage.py retrievedata
python manage.py runserver
```

### Missing parts

Here and there is possible to find snippet of code not so well handled in case of errors, but everything works so far (in it's singular way in some parts) and there are few test to run to check that the important things work.

## Commands

- To generate a new secret key in fancy cmd style: ```python manage.py shell -c 'from django.core.management import utils; print(utils.get_random_secret_key())'```
- The custom command is callable as: ```'python manage.py retrievedata'```
- To activate the cron job on the custom command: ```python manage.py crontab add```
- To create a fresh build of the react app: ```cd ./client && yarn build```

## Testing

I've learned a tough lesson about tests: it's so awesome all the prior work necessary to write down code and efficient tests, but it's also known that doing interesting things makes time pass so much fast. :°(

- Django test:

```bash
# w\out coverage
python manage.py test
# with coverage
coverage run --source='.' manage.py test
```

- React test:

```bash
cd ./client
yarn run test
```
