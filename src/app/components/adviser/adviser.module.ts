// ======================================
//				Modules
// ======================================
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// ======================================
//				Routing
// ======================================
import { AdviserRoutingModule } from "./adviser-routing.module";

// ======================================
//				Components
// ======================================
import { Form1AdviserComponent } from "./form1-adviser/form1-adviser.component";
import { Form2AdviserComponent } from "./form2-adviser/form2-adviser.component";
import { TestComponent } from "./test/test.component";

@NgModule({
  declarations: [Form2AdviserComponent, Form1AdviserComponent, TestComponent],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    AdviserRoutingModule,
  ],
})
export class AdviserModule {}
