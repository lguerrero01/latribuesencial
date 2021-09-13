import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form2-adviser",
  templateUrl: "./form2-adviser.component.html",
  styleUrls: ["./form2-adviser.component.scss"],
})
export class Form2AdviserComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  constructor(private formBuilder: FormBuilder) {}

  public form2Adviser: FormGroup = this.formBuilder.group({
    bePart: ["", [Validators.required]],
    desc: ["", [Validators.required]],
  });

  ngOnInit(): void {}

  public fieldValid(field: string) {
    return (
      this.form2Adviser.controls[field].errors &&
      this.form2Adviser.controls[field].touched
    );
  }
}
