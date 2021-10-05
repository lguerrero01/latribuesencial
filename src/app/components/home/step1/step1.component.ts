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
	@Output() onIsValid: EventEmitter<boolean> = new EventEmitter();


  // ======================================
	//				Constructor
	// ======================================
  constructor(private formBuilder: FormBuilder) { }

  public form1: FormGroup = this.formBuilder.group({
    email: [ , [ Validators.required] ],
    name: [ , [ Validators.required] ],
    country: [ , [ Validators.required] ],
    countryRes : [ , [ Validators.required] ],
  })

  // ======================================
	//				onInit
	// ======================================
  ngOnInit(): void {
    console.log(this.form1.valid)
  }
  
  public valid() {
    this.onIsValid.emit(this.form1.valid);
  }

  public campoEsValido( field: string ) {
    return this.form1.controls[field].errors 
            && this.form1.controls[field].touched;
  }

  public guardar() {

    if ( this.form1.invalid )  {
      this.form1.markAllAsTouched();
      return;
    }


    console.log(this.form1.value);
    this.form1.reset();
  }
}