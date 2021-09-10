import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// ======================================
//				Components
// ======================================
import { LayoutComponent } from "./components/layout/layout.component";
import { DiseasesComponent } from "./components/diseases/diseases.component";
import { KitsComponent } from "./components/kits/kits.component";
import { LastPageComponent } from "./components/last-page/last-page.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LayoutComponent,
    DiseasesComponent,
    KitsComponent,
    LastPageComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    KitsComponent,
    DiseasesComponent,
    LayoutComponent
  ],
})
export class SharedModule {}
