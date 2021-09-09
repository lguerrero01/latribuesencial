import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adviser',
  templateUrl: './adviser.component.html',
  styleUrls: ['./adviser.component.scss']
})
export class AdviserComponent implements OnInit {
  public step: number = 1;
  public valid!: boolean;

  
  constructor( private formBuilder: FormBuilder) { }

  public personalInfo:FormGroup = this.formBuilder.group({
    ocupation: [ , [ Validators.required] ]
  })

  ngOnInit(): void {
  }

  public next(){
    this.step++;
  }
  
    public previous(){
      this.step--
    }
  

}
