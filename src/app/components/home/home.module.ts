// ======================================
//				Modules
// ======================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


// ======================================
//				Routing
// ======================================
import { HomeRoutingModule } from './home-routing.module';

// ======================================
//				Components
// ======================================
import { HomeComponent } from './home.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { DecorationComponent } from './decoration/decoration.component';


@NgModule({
  declarations: [
    HomeComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    DecorationComponent
  ],
  imports: [
    // SharedModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
