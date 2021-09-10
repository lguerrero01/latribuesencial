import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// ======================================
//				Components
// ======================================
import { LayoutComponent } from "./shared/components/layout/layout.component";


const routes: Routes = [
  {
    path: "home",
    component: LayoutComponent,
    children: [
      {
        path: "steps",
        loadChildren: () =>
          import("./components/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "adviser",
        loadChildren: () =>
          import("./components/adviser/adviser.module").then(
            (m) => m.AdviserModule
          ),
      },
      {
        path: "client",
        loadChildren: () =>
          import("./components/client/client.module").then(
            (m) => m.ClientModule
          ),
      },
    ],
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
