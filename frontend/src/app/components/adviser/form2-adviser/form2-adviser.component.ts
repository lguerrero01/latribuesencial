import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { FormsDataService } from "@shared/services/forms-data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-form2-adviser",
  templateUrl: "./form2-adviser.component.html",
  styleUrls: ["./form2-adviser.component.scss"],
})
export class Form2AdviserComponent implements OnInit, OnDestroy {
  // ======================================
  //				Inputs
  // ======================================
  @Input() formGroupName: string;

  // ======================================
  //				Atributes
  // ======================================
  form2Adviser: FormGroup;
  public closeSubs: Subscription;
  // ======================================
  //				Contructor
  // ======================================
  constructor(
    private rootFormGroup: FormGroupDirective,
    private formService: FormsDataService
  ) {}

  // ======================================
  //				Oninit
  // ======================================
  ngOnInit(): void {
    this.form2Adviser = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;

    this.formService.disabledNextAdviser$.next(this.form2Adviser.invalid);

     this.closeSubs = this.form2Adviser.valueChanges.subscribe((resp) => {
      this.formService.disabledNextAdviser$.next(this.form2Adviser.invalid);
    });
  }
  // ======================================
  //				Validations
  // ======================================
  public fieldValid(field: string) {
    return (
      this.form2Adviser.controls[field].errors &&
      this.form2Adviser.controls[field].touched
    );
  }

  ngOnDestroy() {
    this.closeSubs.unsubscribe();
  }
}
