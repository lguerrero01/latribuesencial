import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {
  public step1 = false;
  public step2 = false;
  public step3 = false;
  public step4 = false;
  public step = 1;
  status: boolean = false;


  public valid: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  clickEvent() {}

  public getValue($event: boolean) {
    this.valid = $event;
  }
  public next() {
    this.status = true;

    this.step++;
  }

  public previous() {
    this.status = false;

    this.step--;
  }

  public submit() {
    // if(this.step==4){
    //   this.education_step = true;
    //   if (this.educationalDetails.invalid) { return }
    // }
  }
}
