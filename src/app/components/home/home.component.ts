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
  
  this.valid = false;
    // switch (this.step + 1) {
    //   case  1:
    //     this.step1 = true;
    //     break;
    //   case 2:  
    //     this.step2 = true;

    //     break;
    //   case 3:
    //     this.step3 = true;
    //     break;
    //   case 4:
    //     this.step4 = true;
    //     break;
    //   default:
    //     break;
    // }
    this.valid = true;

  this.step++;
}

  public previous(){
    // switch (this.step ) {
    //   case 1:
    //     this.step1 = false;
    //     break;
    //   case 2:
    //     this.step2 = false;
    //     break;
    //   case 3:
    //     this.step3 = false;
    //     break;
    //   case 4:
    //     this.step4 = false;
    //     break;
    //   default:
    //     break;
    // }
    this.step--
  }

  public submit(){

    // if(this.step==4){
    //   this.education_step = true;
    //   if (this.educationalDetails.invalid) { return }
    // }
  }
  
}
