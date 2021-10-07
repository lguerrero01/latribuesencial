import { Component, Input, OnInit } from "@angular/core";
import { GetKitsService } from "@shared/services/get-kits.service";

import { FormsDataService } from "@shared/services/forms-data.service";
import { catchError } from "rxjs/operators";

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
  public kitSelected: number = 0;
  // ======================================
  //				Constructor
  // ======================================
  constructor(
    private showKits: GetKitsService,
    private formService: FormsDataService
  ) {}

  ngOnInit(): void {
    this.formService.disableNext$.next(true);
    this.formService.disabledNextAdviser$.next(true);
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

  // ======================================
  //        Send kit to service
  // ======================================

  public sendKit(id: number) {
    this.kitSelected = id;
    this.formService.setKit(id);

    this.formService.disableNext$.next(false);
    this.formService.disabledNextAdviser$.next(false);
  }
}
