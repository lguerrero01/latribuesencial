import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";

@Component({
  selector: "app-form1-client",
  templateUrl: "./form1-client.component.html",
  styleUrls: ["./form1-client.component.scss"],
})
export class Form1ClientComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  @Input() formGroupName: string;
  form: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  public fieldValid(field: string) {
    return (
      this.form.controls[field].errors &&
      this.form.controls[field].touched
    );
  }
}
