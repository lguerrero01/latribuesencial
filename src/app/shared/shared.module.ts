import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// ======================================
//				Components
// ======================================
import { LayoutComponent } from "./components/layout/layout.component";
import { DiseasesComponent } from "./components/diseases/diseases.component";
import { KitsComponent } from "./components/kits/kits.component";
import { LastPageComponent } from "./components/last-page/last-page.component";

@NgModule({
  declarations: [
    LayoutComponent,
    DiseasesComponent,
    KitsComponent,
    LastPageComponent,
  ],
  imports: [CommonModule],
  exports: [KitsComponent, DiseasesComponent, LayoutComponent],
})
export class SharedModule {}
