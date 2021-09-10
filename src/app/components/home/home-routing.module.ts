// ======================================
//				Modules
// ======================================
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { HomeComponent } from './home.component';

// ======================================
//				Components
// ======================================

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: HomeComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
