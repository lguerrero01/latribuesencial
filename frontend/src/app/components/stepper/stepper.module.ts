import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
// ======================================
//				modules
// ======================================
import { StepperRoutingModule } from "./stepper-routing.module";
import { SharedModule } from "@shared/shared.module";
// ======================================
//				Components
// ======================================
import { Step2Component } from "./step2/step2.component";
import { Step3Component } from "./step3/step3.component";
import { Step4Component } from "./step4/step4.component";
import { Step1Component } from "./step1/step1.component";
import { StepperComponent } from "./stepper.component";
import { Ng2TelInputModule } from "ng2-tel-input";
import { TextMaskModule } from "angular2-text-mask";
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";
@NgModule({
  declarations: [
    StepperComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    StepperRoutingModule,
    SharedModule,
    FormsModule,
    TextMaskModule,
    NgxIntlTelInputModule
  ],
})
export class StepperModule {}
