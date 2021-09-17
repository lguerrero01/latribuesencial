import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: "app-form3-adviser",
  templateUrl: "./form3-adviser.component.html",
  styleUrls: ["./form3-adviser.component.scss"],
})
export class Form3AdviserComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  @Input() formGroupName: string;
  form3Adviser: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form3Adviser = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }
  public fieldValid(field: string) {
    return (
      this.form3Adviser.controls[field].errors &&
      this.form3Adviser.controls[field].touched
    );
  }
}
