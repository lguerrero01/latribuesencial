import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styles: [
  ]
})
export class Step1Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form1: FormGroup = this.formBuilder.group({
    email: [ , [ Validators.required] ],
    name: [ , [ Validators.required] ],
    country: [ , [ Validators.required] ],
    countryRes : [ , [ Validators.required] ],
  })

  ngOnInit(): void {
  }
  
  campoEsValido( campo: string ) {
    return this.form1.controls[campo].errors 
            && this.form1.controls[campo].touched;
  }
  guardar() {

    if ( this.form1.invalid )  {
      this.form1.markAllAsTouched();
      return;
    }


    console.log(this.form1.value);
    this.form1.reset();
  }
}
