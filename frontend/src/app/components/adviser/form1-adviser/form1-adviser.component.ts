import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-form1-adviser",
  templateUrl: "./form1-adviser.component.html",
  styleUrls: ["./form1-adviser.component.scss"],
})
export class Form1AdviserComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  @Input() formGroupName: string;
  form1Adviser: FormGroup;
  
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form1Adviser = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }

  public fieldValid(field: string) {
    return (
      this.form1Adviser.controls[field].errors &&
      this.form1Adviser.controls[field].touched
    );
  }

  public validPattern(field: string) {
    return this.form1Adviser.controls[field].errors?.pattern;
  }
}
