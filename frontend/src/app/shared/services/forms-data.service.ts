import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class FormsDataService {
  public formFinal: {} = {};

  constructor() {}

  public getForm(form: {}) {
    this.formFinal = { ...this.formFinal, ...form };
    console.log("obteniendo form desde servicio", this.formFinal);
  }
}
