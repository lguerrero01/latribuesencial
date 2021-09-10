// ======================================
//				Module
// ======================================
import { NgModule } from "@angular/core";
// ======================================
//				Router
// ======================================
import { RouterModule, Routes } from "@angular/router";
// ======================================
//				Components
// ======================================
import { AdviserComponent } from "./adviser.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: AdviserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviserRoutingModule {}
