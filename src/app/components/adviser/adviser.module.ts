// ======================================
//				Modules
// ======================================
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// ======================================
//				Routing
// ======================================
import { AdviserRoutingModule } from "./adviser-routing.module";

// ======================================
//				Components
// ======================================
import { Form1AdviserComponent } from "./form1-adviser/form1-adviser.component";
import { Form2AdviserComponent } from "./form2-adviser/form2-adviser.component";
import { KitsComponent } from "src/app/shared/components/kits/kits.component";
import { DiseasesComponent } from "src/app/shared/components/diseases/diseases.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [Form1AdviserComponent, Form2AdviserComponent],
  imports: [
    SharedModule,
    CommonModule,
    AdviserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdviserModule {}
