import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Step1Component } from './components/home/step1/step1.component';
import { Step2Component } from './components/home/step2/step2.component';
import { Step3Component } from './components/home/step3/step3.component';
import { Step4Component } from './components/home/step4/step4.component';
import { DecorationComponent } from './components/home/decoration/decoration.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    DecorationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
