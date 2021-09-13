// ======================================
//				Modules 
// ======================================
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// ======================================
//				Components
// ======================================
import { HomeComponent } from "./components/home/home.component";
import { LastPageComponent } from "./shared/components/last-page/last-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "steps",
    loadChildren: () => import('./components/stepper/stepper.module').then(m => m.StepperModule)
  },
  {
    path: "adviser",
    loadChildren: () => import('./components/adviser/adviser.module').then(m => m.AdviserModule)
  },
  {
    path: "client",
    loadChildren: () => import('./components/client/client.module').then( m => m.ClientModule )
  },
  {
    path: "last",
    component: LastPageComponent,
  },
  {
    path: '**',
    redirectTo: "/"
  }
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
