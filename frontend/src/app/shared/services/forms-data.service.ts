import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class FormsDataService {
  public object: {} = {}
  public formFinal: {} = { };
  constructor(private router: Router) {}

 
  public getRole(role: string) {
    console.log("role elegido:", role);
    if (role === 'cliente') {
      // this.router.navigate(["/cliente"]);
    } else {
      // this.router.navigate(["/asesor"]);
    }
    return role;
  }
  public getFormBasic (form : {}) {
    this.formFinal = {...form}
  }

  public getForm(form: {}) {
    this.formFinal = {...form}
    console.log('obteniendo form desde servicio', this.formFinal)
  }
}
