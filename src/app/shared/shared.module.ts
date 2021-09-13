// ======================================
//				Modules 
// ======================================
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// ======================================
//				Components
// ======================================
import { DiseasesComponent } from "./components/diseases/diseases.component";
import { KitsComponent } from "./components/kits/kits.component";
import { LastPageComponent } from "./components/last-page/last-page.component";
// ======================================
//				Services
// ======================================


@NgModule({
  declarations: [DiseasesComponent, KitsComponent, LastPageComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [KitsComponent, DiseasesComponent],
  providers: []
})
export class SharedModule {}
