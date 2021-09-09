// ======================================
//				Modules
// ======================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ======================================
//				Routing
// ======================================
import { AdviserRoutingModule } from './adviser-routing.module';

// ======================================
//				Components
// ======================================
import { Form1AdviserComponent } from './form1-adviser/form1-adviser.component';
import { Form2AdviserComponent } from './form2-adviser/form2-adviser.component';
import { KitsComponent } from 'src/app/shared/components/kits/kits.component';
import { DiseasesComponent } from 'src/app/shared/components/diseases/diseases.component';


@NgModule({
  declarations: [
  ],
  imports: [
    AdviserModule,
    CommonModule,
    AdviserRoutingModule

  ],
  exports: [
  ]
})
export class AdviserModule { }
