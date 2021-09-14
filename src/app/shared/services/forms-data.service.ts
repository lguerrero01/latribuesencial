import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FormsDataService {
  constructor() {}
  public getForm(form: {}) {
    console.log("formulario desde el servicio: ", form);
  }
  public getRole(role: string) {
    console.log("role: ", role);
  }
}
