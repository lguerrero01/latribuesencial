import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StepperComponent } from "./stepper.component";

const routes: Routes = [
  {
    path: "",
    component: StepperComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  exports: [RouterModule],
})
export class StepperRoutingModule {}
