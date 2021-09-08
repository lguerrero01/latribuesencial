import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styles: [
  ]
})
export class Step1Component implements OnInit {
  // ======================================
	//				Attributes
	// ======================================
  @Output() onIsValid: any = new EventEmitter<string>();

  // ======================================
	//				Constructor
	// ======================================
  constructor(private formBuilder: FormBuilder) {}

  public form1: FormGroup = this.formBuilder.group({
    email: [ , [ Validators.required] ],
    name: [ , [ Validators.required] ],
    country: [ , [ Validators.required] ],
    countryRes : [ , [ Validators.required] ],
    phone : [ , [ Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)] ]
  })

  // ======================================
	//				onInit
	// ======================================
  ngOnInit(): void {
    console.log(this.form1.controls)
  }
  
  public formValid() {
    this.onIsValid.emit(this.form1.valid);
  }

  public fieldValid( field: string ) {
    return this.form1.controls[field].errors 
            && this.form1.controls[field].touched;
  }
  public phoneIsValid( field: any ) {
    return this.form1.controls[field].errors 
            && this.form1.controls[field].touched;
  }

  public guardar() {

    if ( this.form1.invalid )  {
      this.form1.markAllAsTouched();
      return;
    }
    this.form1.reset();
  }
}
