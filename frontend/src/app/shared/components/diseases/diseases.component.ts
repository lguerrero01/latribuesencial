import { Component, Input, OnDestroy, OnInit } from "@angular/core";
// ======================================
//				servives
// ======================================
import { GetDiseasesService } from "@shared/services/get-diseases.service";
import { FormsDataService } from "@shared/services/forms-data.service";
// ======================================
//				Components
// ======================================
import {
  FormGroup,
  FormArray,
  FormControl,
  FormGroupDirective,
} from "@angular/forms";
import { Subscriber, Subscription } from "rxjs";

@Component({
  selector: "app-diseases",
  templateUrl: "./diseases.component.html",
  styleUrls: ["./diseases.component.scss"],
})
export class DiseasesComponent implements OnInit, OnDestroy {
  // ======================================
  //				Atributes
  // ======================================
  public values: string[] = [];
  public Data = [];
  formArray!: FormArray;
  public form: FormGroup;
  public closeSubs: Subscription;

  // ======================================
  //				Constructor
  // ======================================
  constructor(
    private rootFormGroup: FormGroupDirective,
    private diseases: GetDiseasesService,
    private formService: FormsDataService
  ) {}

  // ======================================
  //				OnInit
  // ======================================
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
    this.formArray = this.form.get("checkArray") as FormArray;

    this.formService.disableNext$.next(!this.formArray.length);
    this.formService.disabledNextAdviser$.next(!this.formArray.length);

    this.closeSubs = this.form.valueChanges.subscribe((resp) => {
      this.formService.disableNext$.next(!this.formArray.length);
      this.formService.disabledNextAdviser$.next(!this.formArray.length);
    });

    this.formArray.controls.forEach((item, index) => {
      this.values.push(this.formArray.at(index).value as string);
    });

    this.diseases.getDiseases().subscribe((resp) => {
      this.Data = resp;
    });
    // this.Data = this.diseases.Data;
  }

  // ======================================
  //				On checkbox change
  // ======================================
  onCheckboxChange(e) {
    if (e.target.checked) {
      this.formArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      this.formArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          this.formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  ngOnDestroy() {
    this.closeSubs.unsubscribe();
    ("Destroy");
  }
}
