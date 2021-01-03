# Tiny NeoWS

'Know urgent facts about things that happen not so far (but so so so far) from all of us!'

This simple app is composed by two 'pieces' (here in the same place in one straordinary and unique solution, but it's possible to deploy two different apps configuring the right urls in settings, envs and /api/views).

## Backend

- (/api/) fetch data from NeoWS NASA API and save it to a DB (dev: sqlite3, prod: postgresql) then serves this data trough two REST API endpoints. In this particular module lives the custom command (api/management/commands/retrievedata.py) that make the request to NeoWS API (parse and save to DB) and the specification for the execution of the cron job (api/cron.py)
- (/neod_backend_api/): main django module (config and services).
- The backend API is reachable by two read-only endpoints:
  - /api/feed/: return a list of NearEarthObject from the DB.
  - /api/detail/[id]: return a single NearEarthObject.

## Frontend

- (/client/) react app builded with create-react-app. Used in dev with webpack useful utils and in prod, in this specific case, the frontend build is served by django.

## Live demo

TinyNWS on Heroku: <https://tinynws.herokuapp.com/>

## Configuration

### React

In this scenario there is nothing much to do with the frontend, it just works served by a view in django.

```bash
cd /client
yarn && yarn build # to refresh the dependecies and build
cd ..
```

However, in case of need, a live version of the app instead of the static builded
and boring version (so much prod) is runnable by exec ```yarn start``` in client root.

### Django

Follow a basic list of commands to run the project in a local env scenario.
For deploy to production make sure to set __neod_backend_api.settings.prod__ as argument of the DJANGO_MODULE_SETTINGS in .env file.
In .env there is also a NASA_API_KEY configured with the DEMO_KEY supplied by NASA API.
The key simply works, but for a low number of requests.

__Poetry__

```bash
git clone https://github.com/uglywizard/tinynws.git
cd tinynws
poetry shell
poetry install
# (at this point update the .env file with the desired env choice at the DJANGO_MODULE_SETTINGS
# key and fill the other with all the necessary data, like SECRET_KEY)
source .env
python manage.py migrate
python manage.py retrievedata
python manage.py runserver
```

__Pip and virtualenv__

```bash
virtualenv -p python venv
source venv/bin/activate
git clone https://github.com/uglywizard/tinynws.git
cd tinynws
pip install -r requirements.txt
source .env
python manage.py migrate
python manage.py retrievedata
python manage.py runserver
```

### Missing parts

Here and there is possible to find snippets of code not so clean and not so well handled in case of errors, but everything works so far (in a very singular way in some parts) and there are few test to run to check that the important things work.

## Commands

- To generate a new secret key in fancy cmd style: ```python manage.py shell -c 'from django.core.management import utils; print(utils.get_random_secret_key())'```
- The custom command is callable as: ```'python manage.py retrievedata'```
- To activate the cron job on the custom command: ```python manage.py crontab add```
- To create a fresh build of the react app: ```cd ./client && yarn && yarn build```

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

- Cypress test:

```bash
cd ./client
yarn start
yarn run cypress open ui-sample-testing
```
