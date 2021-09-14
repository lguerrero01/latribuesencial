import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styles: [],
})
export class Step1Component implements OnInit {
  // ======================================
  //				Attributes
  // ======================================
  @Input() formGroupName: string;
  form1: FormGroup;

  // ======================================
  //				Constructor
  // ======================================
  constructor(private rootFormGroup: FormGroupDirective) {}

  // ======================================
  //				onInit
  // ======================================
  ngOnInit(): void {
    this.form1 = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }

  public fieldValid(field: string) {
    return (
      this.form1.controls[field].errors && this.form1.controls[field].touched
    );
  }

}
