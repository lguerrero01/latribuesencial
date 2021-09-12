import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// ======================================
//				Components
// ======================================
import { DiseasesComponent } from "./components/diseases/diseases.component";
import { KitsComponent } from "./components/kits/kits.component";
import { LastPageComponent } from "./components/last-page/last-page.component";

@NgModule({
  declarations: [
    DiseasesComponent,
    KitsComponent,
    LastPageComponent,
  ],
  imports: [CommonModule],
  exports: [KitsComponent, DiseasesComponent],
})
export class SharedModule {}
