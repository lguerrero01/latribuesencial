import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { DiseasesComponent } from './components/diseases/diseases.component';
import { KitsComponent } from './components/kits/kits.component';



@NgModule({
  declarations: [
    LayoutComponent,
    DiseasesComponent,
    KitsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    KitsComponent,
    DiseasesComponent
  ]
})
export class SharedModule { }
