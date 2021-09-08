import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  next(){

    switch (this.step ) {
      case 1:
        this.step1 = true;
        break;
      case 2:
        this.step2 = true;
        break;
      case 3:
        this.step3 = true;
        break;
      case 4:
        this.step4 = true;
        break;
      default:
        break;
    }
    
  this.step++;
}

  previous(){
    switch (this.step ) {
      case 1:
        this.step1 = false;
        break;
      case 2:
        this.step2 = false;
        break;
      case 3:
        this.step3 = false;
        break;
      case 4:
        this.step4 = false;
        break;
      default:
        break;
    }
    this.step--
  }

  submit(){

    // if(this.step==4){
    //   this.education_step = true;
    //   if (this.educationalDetails.invalid) { return }
    // }
  }
  
}
