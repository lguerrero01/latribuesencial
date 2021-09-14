import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FormsDataService {
  public object: {} = {}
  constructor() {}
  public getForm(form: {}) {
    form = {...form, ...{role:'cliente'}}
    console.log("formulario desde el servicio: ", form);
  }
  public getRole(role: string) {
    console.log("role: ", role);
  }
  
}
