import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public step1= false;
  public step2 = false;
  public step3 = false;
  public step4 = false;
  public step = 1;
  constructor() { }

  ngOnInit(): void {
  }

  next(){

  if(this.step==1){
    this.step1 = true;
    this.step++
  }

  if(this.step==2){
    this.step2 = true;
    this.step++;
  }

  if(this.step==3){
    this.step3 = true;
    this.step++;
  }

  if(this.step==4){
    this.step4 = true;
    this.step++;
  }

}

  previous(){

    this.step--
    if(this.step==1){
      this.step1 = false;
    }
    if(this.step==2){
      this.step2 = false;
    }
    if(this.step==3){
      this.step3 = false;
    }
    if(this.step==4){
      this.step4 = false;
    }
  }

  submit(){

    // if(this.step==4){
    //   this.education_step = true;
    //   if (this.educationalDetails.invalid) { return }
    // }
  }
  
}
