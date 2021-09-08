import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    // HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    // HomeComponent
  ]
})
export class SharedModule { }
