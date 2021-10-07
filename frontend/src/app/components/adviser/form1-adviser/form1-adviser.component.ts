import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { FormsDataService } from "@shared/services/forms-data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-form1-adviser",
  templateUrl: "./form1-adviser.component.html",
  styleUrls: ["./form1-adviser.component.scss"],
})
export class Form1AdviserComponent implements OnInit, OnDestroy {
  // ======================================
  //				Atributes
  // ======================================
  public letters = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/,/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/,/[0-9]/, /[0-9]/, /[0-9]/]
  public closeSubs: Subscription;

  @Input() formGroupName: string;
  form1Adviser: FormGroup;
  
  constructor(private rootFormGroup: FormGroupDirective, private formService: FormsDataService) {}

  ngOnInit(): void {
    
    this.form1Adviser = this.rootFormGroup.control.get(
      this.formGroupName
      ) as FormGroup;

      this.formService.disabledNextAdviser$.next(this.form1Adviser.invalid);
  
     this.closeSubs = this.form1Adviser.valueChanges.subscribe((resp) => {
        this.formService.disabledNextAdviser$.next(this.form1Adviser.invalid);
      })
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

  ngOnDestroy(){
    this.closeSubs.unsubscribe();
  }
}
