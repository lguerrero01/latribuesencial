// ======================================
//				Module 
// ======================================

import { NgModule } from '@angular/core';

// ======================================
//				Router
// ======================================

import { RouterModule, Routes } from '@angular/router';

// ======================================
//				Components 
// ======================================
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
      path: '',
      children: [
        { 
          path: '', component: ClientComponent
         }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
