import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  public step: number = 1;
  public valid!: boolean;
  public status: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public next() {
    this.status = true;

    this.step++;
  }

  public previous() {
    this.status = false;

    this.step--;
  }
}
