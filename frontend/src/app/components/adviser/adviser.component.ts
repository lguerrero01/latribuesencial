import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FormsDataService } from "@shared/services/forms-data.service";
import { GetKitsService } from "@shared/services/get-kits.service";

@Component({
  selector: "app-adviser",
  templateUrl: "./adviser.component.html",
  styleUrls: ["./adviser.component.scss"],
})
export class AdviserComponent implements OnInit,  AfterViewChecked {
  // ======================================
  //				Atributes
  // ======================================
  public step: number = 5;
  public valid!: boolean;
  public status: boolean = false;
  public adviserForm!: FormGroup;
  public disabledAdviser: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: FormsDataService,
    private getKits: GetKitsService,
    private change: ChangeDetectorRef
  ) {}

  ngAfterViewChecked(): void {
    this.disabledAdviser = this.formService.disabledNextAdviser$.getValue();
    this.change.detectChanges();
  }

  // ======================================
  //				Reactive Forms
  // ======================================
  public personalInfo: FormGroup = this.fb.group({});
  public nuevaPropiedad: boolean = false;

  ngOnInit(): void {


    this.adviserForm = this.fb.group({
      form1Adviser: this.fb.group({
        ocupation: ["", [Validators.required ,Validators.pattern(/^[a-zA-Z\s]*$/)]],
        maritalStatus: ["", [Validators.required]],
        childrenAdviser: ["", [Validators.required]],
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
    
    this.formService.disabledNextAdviser$.subscribe((resp) => {      
      this.disabledAdviser = resp;
      this.change.detectChanges();
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


}
