import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-form2-adviser",
  templateUrl: "./form2-adviser.component.html",
  styleUrls: ["./form2-adviser.component.scss"],
})
export class Form2AdviserComponent implements OnInit {
  // ======================================
  //				Inputs
  // ======================================
  @Input() formGroupName: string;

  // ======================================
  //				Atributes
  // ======================================
  form2Adviser: FormGroup;
  // ======================================
  //				Contructor
  // ======================================
  constructor(private rootFormGroup: FormGroupDirective) {}

  // ======================================
  //				Oninit
  // ======================================
  ngOnInit(): void {
    this.form2Adviser = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
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

  public validPattern(field: string) {
    return this.form2Adviser.controls[field].errors?.pattern;
  }

}
