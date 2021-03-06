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
import { DecorationComponent } from "./components/decoration/decoration.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "app/app-routing.module";
// ======================================
//				Services
// ======================================

@NgModule({
  declarations: [
    DiseasesComponent,
    KitsComponent,
    LastPageComponent,
    DecorationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [
    KitsComponent,
    DiseasesComponent,
    LastPageComponent,
    DecorationComponent,
  ],
  providers: [],
})
export class SharedModule {}
