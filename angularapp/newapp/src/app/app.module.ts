import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityCreateComponent } from './activity-create/activity-create.component';
import { routingcomponenets } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { 
  MatToolbarModule, 
  MatButtonModule,
   MatSidenavModule,
   MatIconModule,MatFormFieldModule,MatRippleModule,
   MatListModule ,
   MatStepperModule,
   MatInputModule
  } from '@angular/material';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    routingcomponenets,
    AccountCreateComponent,
    ContactCreateComponent,
    ContactListComponent,
    ActivityListComponent,
    ActivityCreateComponent,
  
  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
