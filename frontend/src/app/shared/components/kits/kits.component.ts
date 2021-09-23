import { Component, Input, OnInit } from "@angular/core";
import { GetKitsService } from "@shared/services/get-kits.service";

@Component({
  selector: "app-kits",
  templateUrl: "./kits.component.html",
  styleUrls: ["./kits.component.scss"],
})
export class KitsComponent implements OnInit {
  @Input() checks: [] = [];
  public kits: [] = [];
  constructor(private showKits: GetKitsService) {}

  ngOnInit(): void {
    console.log("desde kits", this.checks);
    this.showKitsByDiseases(this.checks);
  }

  public showKitsByDiseases(diseases: []) {
    this.showKits.getKitsByDiseases(diseases).subscribe((resp) => {
      console.log("respuesta de kits", resp);
      this.kits = resp;
    });
  }
}
