import { Component, Input, OnInit } from "@angular/core";
import { GetKitsService } from "@shared/services/get-kits.service";

@Component({
  selector: "app-kits",
  templateUrl: "./kits.component.html",
  styleUrls: ["./kits.component.scss"],
})
export class KitsComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  @Input() checks: [] = [];
  public items: any = [];

  // ======================================
  //				Constructor
  // ======================================
  constructor(private showKits: GetKitsService) {}

  ngOnInit(): void {
    this.showKitsByDiseases(this.checks);
  }

  // ======================================
  //				Show Kits
  // ======================================
  public showKitsByDiseases(diseases: []) {
    this.showKits.getKitsByDiseases(diseases).subscribe(
      (resp) => {
        this.items = resp;
      },
      (err) => {
        console.error("Hay un error al obtener los kits ", err);
      }
    );
  }
}
