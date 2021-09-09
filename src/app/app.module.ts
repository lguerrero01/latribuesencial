import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { SharedModule } from './shared/shared.module';
import { AdviserComponent } from './components/adviser/adviser.component';
import { ClientComponent } from './components/client/client.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { Form1AdviserComponent } from './components/adviser/form1-adviser/form1-adviser.component';
import { Form2AdviserComponent } from './components/adviser/form2-adviser/form2-adviser.component';
import { AdviserModule } from './components/adviser/adviser.module';





@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    AdviserModule,
    HomeModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    Ng2TelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
