import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { FormsDataService } from "@shared/services/forms-data.service";

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
  public form: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective, private formService: FormsDataService) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    this.form.valueChanges.subscribe((resp) => {
      this.formService.disableNext$.next(this.form.invalid);
    })
  }

  public fieldValid(field: string) {
    return (
      this.form.controls[field].errors &&
      this.form.controls[field].touched
    );
  }
}
