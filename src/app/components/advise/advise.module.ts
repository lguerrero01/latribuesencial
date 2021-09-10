import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviseRoutingModule } from './advise-routing.module';
import { AdviseComponent } from './advise.component';
import { Form1AdviseComponent } from './form1-advise/form1-advise.component';
import { Form2AdviseComponent } from './form2-advise/form2-advise.component';


@NgModule({
  declarations: [
    AdviseComponent,
    Form1AdviseComponent,
    Form2AdviseComponent
  ],
  imports: [
    CommonModule,
    AdviseRoutingModule
  ]
})
export class AdviseModule { }
