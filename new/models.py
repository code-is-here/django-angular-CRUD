from django.db import models
from django.contrib.auth.models import User

INDCHOICES = (
    ('FINANCE', 'FINANCE'),
    ('HEALTHCARE', 'HEALTHCARE'),
    ('INSURANCE', 'INSURANCE'),
    
)

class Account(models.Model):
    name = models.CharField(max_length=64)
    email = models.EmailField(blank = True, null = True)
    phone = models.CharField(max_length=20, blank = True, null = True)
    industry = models.CharField(max_length=255, choices=INDCHOICES, blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    createdBy = models.ForeignKey(User, related_name='account_created_by', on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)
    isActive = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class ContactSource(models.Model):
    status = models.CharField(max_length=20)

    def __str__(self):
        return self.status

class ContactStatus(models.Model):
    status = models.CharField( max_length=20)

    def __str__(self):
        return self.status

class Contact(models.Model):
    first_name = models.CharField(max_length=255, blank = True, null = True)
    last_name = models.CharField( max_length=255, blank = True, null = True)
    account = models.ForeignKey(Account, related_name='lead_account_contacts', on_delete=models.CASCADE, blank=True, null=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank = True, null = True)
    createdBy = models.ForeignKey(User, related_name='contact_created_by', on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)
    isActive = models.BooleanField(default=False)

    def __str__(self):
        return self.first_name

class ActivityStatus(models.Model):
    status = models.CharField(max_length=20)

    def __str__(self):
        return self.status

class Activity(models.Model):
    description = models.TextField(blank=True, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.description
