// ======================================
//				Modules
// ======================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from 'src/app/forms/forms.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Ng2TelInputModule } from 'ng2-tel-input';


// ======================================
//				Routing
// ======================================


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
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    Ng2TelInputModule
  ]
})
export class HomeModule { }
