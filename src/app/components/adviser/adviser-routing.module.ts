import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1AdviserComponent } from './form1-adviser/form1-adviser.component';
import { Form2AdviserComponent } from './form2-adviser/form2-adviser.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     { 
  //       path: 'form1Adviser', component: Form1AdviserComponent
  //      },
  //     { 
  //       path: 'form2Adviser', component: Form2AdviserComponent 
  //     },
  //     {
  //       path: '**', redirectTo: 'form1Adviser'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdviserRoutingModule { }
