import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
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
  public ruta: string = null;
  public step = 1;
  public status: boolean = true;
  public valid: boolean = false;
  public stepForm!: FormGroup;
  public PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

  // ======================================
  //				Constructor
  // ======================================
  constructor(
    private fb: FormBuilder,
    private formService: FormsDataService,
    private router: Router
  ) {}
  // ======================================
  //				Reactive Forms
  // ======================================
  ngOnInit(): void {
    this.stepForm = this.fb.group({
      infoStepForm: this.fb.group({
        email: ["", [Validators.required]],
        name: ["", [Validators.required]],
        country: ["", [Validators.required]],
        resCountry: ["", [Validators.required]],
        phone: ["", [Validators.required]],
      }),
    });
  }

  public getRoute(route) {
    this.ruta = route;
    console.log(this.ruta);
  }
  public next() {
    this.status = true;

    this.step++;
    if (this.step == 5) {
      console.log("enviando form de pasos", this.stepForm.value);
      this.formService.sendForm(this.stepForm.value);
      this.router.navigate([`/${this.ruta}`]);
      return;
    }
  }

  public previous() {
    this.status = false;
    this.step--;
  }
}
