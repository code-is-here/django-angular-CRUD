from django.contrib import admin
from .models import Account, Activity, Contact, ContactSource, ContactStatus, ActivityStatus
# Register your models here.
admin.site.register(Activity)
admin.site.register(Account)
admin.site.register(ActivityStatus)
admin.site.register(ContactSource)
admin.site.register(ContactStatus)
admin.site.register(Contact)
