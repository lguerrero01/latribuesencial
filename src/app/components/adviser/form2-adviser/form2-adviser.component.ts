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
  //				Atributes
  // ======================================
  @Input() formGroupName: string;
  form2Adviser: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form2Adviser = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }

  public fieldValid(field: string) {
    return (
      this.form2Adviser.controls[field].errors &&
      this.form2Adviser.controls[field].touched
    );
  }
 
}
