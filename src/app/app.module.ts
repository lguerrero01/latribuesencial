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





@NgModule({
  declarations: [
    AppComponent,
    AdviserComponent,
    ClientComponent,
  ],
  imports: [
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
