import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-decoration",
  templateUrl: "./decoration.component.html",
  styleUrls: ["./decoration.component.scss"],
})
export class DecorationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  public redirect() {
    this.router.navigate(["/"]);
  }
}
