import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { StepperRoutingModule } from "./stepper-routing.module";
import { Step2Component } from "./step2/step2.component";
import { Step3Component } from "./step3/step3.component";
import { Step4Component } from "./step4/step4.component";
import { Step1Component } from "./step1/step1.component";
import { StepperComponent } from "./stepper.component";

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
  ],
})
export class StepperModule {}
