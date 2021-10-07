import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FormsDataService } from "@shared/services/forms-data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-form1-client",
  templateUrl: "./form1-client.component.html",
  styleUrls: ["./form1-client.component.scss"],
})
export class Form1ClientComponent implements OnInit, OnDestroy{
  // ======================================
  //				Atributes
  // ======================================
  @Input() formGroupName: string;
  public form: FormGroup;
  public closeSubs: Subscription;
  constructor(private rootFormGroup: FormGroupDirective, private formService: FormsDataService, private router: Router) {}

  ngOnInit(): void {
    
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

    this.formService.disableNext$.next(this.form.invalid);

    this.closeSubs = this.form.valueChanges.subscribe((resp) => {
      this.formService.disableNext$.next(this.form.invalid);
    })
  }

  public fieldValid(field: string) {
    return (
      this.form.controls[field].errors &&
      this.form.controls[field].touched
    );
  }

  ngOnDestroy(){
    this.closeSubs.unsubscribe();
  }
}
