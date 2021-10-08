import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormsDataService } from "@shared/services/forms-data.service";

@Component({
  selector: "app-last-page",
  templateUrl: "./last-page.component.html",
  styleUrls: ["./last-page.component.scss"],
})
export class LastPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  public redirect() {
    this.router.navigate(["/"]);
  }
}
