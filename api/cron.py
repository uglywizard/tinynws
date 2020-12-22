from django.core.management import call_command


def cron_retrievedata_job():
    call_command("retrivedata")