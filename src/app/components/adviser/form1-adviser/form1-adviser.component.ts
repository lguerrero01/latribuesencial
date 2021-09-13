import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1-adviser',
  templateUrl: './form1-adviser.component.html',
  styleUrls: ['./form1-adviser.component.scss']
})
export class Form1AdviserComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) {}

  public form1Adviser: FormGroup = this.formBuilder.group({
    ocupation: ['', [Validators.required]]
  });

  ngOnInit(): void {
  }

}
