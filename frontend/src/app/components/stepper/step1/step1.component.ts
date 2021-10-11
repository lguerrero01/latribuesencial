import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from "@angular/forms";

import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat
} from "ngx-intl-tel-input";

import { countries } from "../../../shared/helpers/countries";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styles: [],
})
export class Step1Component implements OnInit {
  // ======================================
  //				Attributes
  // ======================================
  @Output() countryEvent = new EventEmitter<string>();
  @Input() formGroupName: string;
  form1: FormGroup;
  public countries: any = countries;
  // ======================================
  //				phone
  // ======================================

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];

  // ======================================
  //				Constructor
  // ======================================
  constructor(private rootFormGroup: FormGroupDirective, private  httpClient: HttpClient) {}

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

  public validPattern(field: string) {
    return this.form1.controls[field].errors?.pattern;
  }

  public validPhone(field: string) {
    return this.form1.controls[field].errors?.maxlength;
  }

  public onCountryChange(event) {
      this.countryEvent.emit(event.target.innerText);
  }
}
