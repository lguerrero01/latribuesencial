import { Component, OnInit, ViewChild } from '@angular/core';
import { Step1Component } from './step1/step1.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  public step1 = false;
  public step2 = false;
  public step3 = false;
  public step4 = false;
  public step = 1;

  public valid: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
 
  public getValue ( $event:boolean ) {
    this.valid = $event;
  }
 public next(){
  

  this.step++;
  }

  public previous(){

    this.step--
  }

  public submit(){

    // if(this.step==4){
    //   this.education_step = true;
    //   if (this.educationalDetails.invalid) { return }
    // }
  }
  
}
