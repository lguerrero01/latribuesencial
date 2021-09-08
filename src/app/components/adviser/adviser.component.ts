import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adviser',
  templateUrl: './adviser.component.html',
  styleUrls: ['./adviser.component.scss']
})
export class AdviserComponent implements OnInit {
  step: any;
  valid!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public next(){
  
    this.valid = false;

  
    this.step++;
  }
  
    public previous(){
  
      this.step--
    }
  

}
