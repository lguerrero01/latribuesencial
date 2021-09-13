import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {
  // ======================================
	//				Attributes
	// ======================================
  public step = 1;
  status: boolean = true;
  public valid: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public getValue($event: boolean) {
    this.valid = $event;
    console.log("linea22",this.valid)
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
