import { Component, Input, OnInit } from "@angular/core";
import { GetKitsService } from "@shared/services/get-kits.service";

@Component({
  selector: "app-kits",
  templateUrl: "./kits.component.html",
  styleUrls: ["./kits.component.scss"],
})
export class KitsComponent implements OnInit {
  @Input() checks: [] = [];
  public items: any = [];
  constructor(private showKits: GetKitsService) {}

  ngOnInit(): void {
    this.showKitsByDiseases(this.checks);
  }

  public showKitsByDiseases(diseases: []) {
    console.log('linea 20', diseases)
    this.showKits.getKitsByDiseases(diseases).subscribe((resp) => {
      this.items = resp;
    },
    (err) => {
      console.error("Hay un error al obtener los kits ", err);
    });
  }
}
