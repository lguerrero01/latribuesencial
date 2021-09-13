import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2-adviser',
  templateUrl: './form2-adviser.component.html',
  styleUrls: ['./form2-adviser.component.scss']
})
export class Form2AdviserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  public form2Adviser: FormGroup = this.formBuilder.group({
    why: ['', [Validators.required]],

  });

  ngOnInit(): void {
  }

}
