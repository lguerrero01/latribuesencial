import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsDataService } from "@shared/services/forms-data.service";
import { GetDiseasesService } from "@shared/services/get-diseases.service";

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
  public status: boolean = true;
  public valid: boolean = false;
  public stepForm!: FormGroup;
  constructor(private fb: FormBuilder, private formService: FormsDataService) {}

  ngOnInit(): void {
    this.stepForm = this.fb.group({
      infoStepForm: this.fb.group({
        email: ["", [Validators.required]],
        name: ["", [Validators.required]],
        country: ["", [Validators.required]],
        countryRes: ["", [Validators.required]],
        phone: ["", [Validators.required]],
      }),
    });
    console.log(this.stepForm);
  }
  
  public next() {
    console.log("formulario actualizado", this.stepForm.value);
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
