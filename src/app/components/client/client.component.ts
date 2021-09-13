import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public step: number = 1;
  public valid!: boolean;

  constructor() {}

  

  ngOnInit(): void {}

  public next() {
    this.step++;
  }

  public previous() {
    this.step--;
  }

}
