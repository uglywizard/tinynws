from datetime import datetime
import pytz


class QueryField(dict):
    def getKey(self, path, default=None):
        item = None
        keys = path.split("->")

        for key in keys:
            if item:
                if isinstance(item, list):
                    item = [i.get(key, default) if i else None for i in item]
                else:
                    item = item.get(key, default)
            else:
                item = dict.get(self, key, default)
            if not item:
                break
        return item

    def normalizeDateKey(key):
        dateTimeObject = datetime.strptime(key, "%Y-%b-%d %H:%M")
        dateTimeObject = datetime(
            dateTimeObject.year,
            dateTimeObject.month,
            dateTimeObject.day,
            dateTimeObject.hour,
            dateTimeObject.minute,
            tzinfo=pytz.UTC,
        )
        return dateTimeObject
