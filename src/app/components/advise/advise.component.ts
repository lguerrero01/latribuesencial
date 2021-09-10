import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-advise',
  templateUrl: './advise.component.html',
  styleUrls: ['./advise.component.scss']
})
export class AdviseComponent implements OnInit {

  public step: number = 1;
  public valid!: boolean;

  constructor(private formBuilder: FormBuilder) {}

  public personalInfo: FormGroup = this.formBuilder.group({
    ocupation: ['', [Validators.required]]
  });

  ngOnInit(): void {}

  public next() {
    this.step++;
  }

  public previous() {
    this.step--;
  }

}
