import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FormsDataService } from "@shared/services/forms-data.service";
import { GetKitsService } from "@shared/services/get-kits.service";

@Component({
  selector: "app-adviser",
  templateUrl: "./adviser.component.html",
  styleUrls: ["./adviser.component.scss"],
})
export class AdviserComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  public step: number = 1;
  public valid!: boolean;
  status: boolean = false;
  public adviserForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: FormsDataService,
    private getKits: GetKitsService
  ) {}

  // ======================================
  //				Reactive Forms
  // ======================================
  public personalInfo: FormGroup = this.fb.group({});
  public nuevaPropiedad: boolean = false;
  ngOnInit(): void {
    this.adviserForm = this.fb.group({
      form1Adviser: this.fb.group({
        ocupation: ["", [Validators.required]],
        maritalStatus: ["", [Validators.required]],
        children: ["", [Validators.required]],
      }),
      checkArray: this.fb.array([], [Validators.required]),
      form2Adviser: this.fb.group({
        bePart: ["", [Validators.required]],
        desc: ["", [Validators.required]],
      }),
      form3Adviser: this.fb.group({
        card: ["", [Validators.required]],
        workingStatus: ["", [Validators.required]],
        help: ["", [Validators.required]],
      }),
    });
  }

  // ======================================
  //				Next Step
  // ======================================
  public next() {
    if (this.step == 2) {
      this.getKits.getKitsByDiseases(this.adviserForm.value.checkArray);
    }
    if (this.step == 5) {
      this.formService.sendFormAdviser(this.adviserForm.value);
      this.router.navigate(["/despedida"]);
      return;
    }
    this.status = true;
    this.step++;
  }

  // ======================================
  //				Previous Step
  // ======================================
  public previous() {
    this.status = false;
    this.step--;
  }
  
  // ======================================
  //				Validation
  // ======================================
  public disabled(field: string) {
    return this.adviserForm.controls[field].valid;
  }
}
