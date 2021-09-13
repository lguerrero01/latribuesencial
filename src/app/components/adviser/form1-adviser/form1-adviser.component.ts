import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form1-adviser",
  templateUrl: "./form1-adviser.component.html",
  styleUrls: ["./form1-adviser.component.scss"],
})
export class Form1AdviserComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================

  constructor(private formBuilder: FormBuilder) {}

  public form1Adviser: FormGroup = this.formBuilder.group({
    ocupation: ["", [Validators.required]],
    maritalStatus: ["", [Validators.required]],
    sons: ["", [Validators.required]],
  });

  ngOnInit(): void {}

  public fieldValid(field: string) {
    return (
      this.form1Adviser.controls[field].errors &&
      this.form1Adviser.controls[field].touched
    );
  }
}
