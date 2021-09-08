import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DecorationComponent } from './components/home/decoration/decoration.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AdviserComponent } from './components/adviser/adviser.component';

const routes: Routes = [
  {
    path:'',
    component : LayoutComponent,
    pathMatch : 'full'
  },
  {
		path: 'home',
		component: HomeComponent,
		pathMatch: 'full',
	},
  {
		path: 'asesor',
		component: AdviserComponent,
		pathMatch: 'full',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
