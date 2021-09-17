import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.scss']
})
export class KitsComponent implements OnInit {
@Input() checks: string[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.checks)
  }

}
