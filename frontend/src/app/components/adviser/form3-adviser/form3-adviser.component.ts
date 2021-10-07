import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { FormsDataService } from "@shared/services/forms-data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-form3-adviser",
  templateUrl: "./form3-adviser.component.html",
  styleUrls: ["./form3-adviser.component.scss"],
})
export class Form3AdviserComponent implements OnInit , OnDestroy {
  // ======================================
  //				Atributes
  // ======================================
  @Input() formGroupName: string;
  form3Adviser: FormGroup;
  public closeSubs: Subscription;

  constructor(private rootFormGroup: FormGroupDirective , private formService: FormsDataService) {}

  ngOnInit(): void {
    this.form3Adviser = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;

    this.formService.disabledNextAdviser$.next(this.form3Adviser.invalid);
  
   this.closeSubs = this.form3Adviser.valueChanges.subscribe((resp) => {
      this.formService.disabledNextAdviser$.next(this.form3Adviser.invalid);
    })
  }
  public fieldValid(field: string) {
    return (
      this.form3Adviser.controls[field].errors &&
      this.form3Adviser.controls[field].touched
    );
  }
  ngOnDestroy(){
    this.closeSubs.unsubscribe();
  }
}
