import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

import { AdviserRoutingModule } from "./adviser-routing.module";
import { Form1AdviserComponent } from "./form1-adviser/form1-adviser.component";
import { Form2AdviserComponent } from "./form2-adviser/form2-adviser.component";
import { AdviserComponent } from "./adviser.component";
import { Form3AdviserComponent } from './form3-adviser/form3-adviser.component';

@NgModule({
  declarations: [
    Form1AdviserComponent,
    Form2AdviserComponent,
    AdviserComponent,
    Form3AdviserComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdviserRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AdviserModule {}
