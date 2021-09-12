import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// ======================================
//				Components
// ======================================
import { HomeComponent } from "./components/home/home.component";
import { StepperComponent } from "./components/home/stepper/stepper.component";
import { AdviserComponent } from "./components/adviser/adviser.component";
import { ClientComponent } from "./components/client/client.component";
import { LastPageComponent } from "./shared/components/last-page/last-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "steps",
    component: StepperComponent,
  },
  {
    path: "adviser",
    component: AdviserComponent,
  },
  {
    path: "client",
    component: ClientComponent,
  },
  {
    path: "last",
    component: LastPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: "enabled",
      onSameUrlNavigation: "reload",
      scrollPositionRestoration: "enabled",
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
