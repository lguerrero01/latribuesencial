// ======================================
//				Modules 
// ======================================
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import { SharedModule } from './shared/shared.module';
import { AdviserModule } from './components/adviser/adviser.module';

// ======================================
//				Components 
// ======================================
import { AppComponent } from './app.component';



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
    CommonModule  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
