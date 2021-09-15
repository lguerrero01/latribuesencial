import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class FormsDataService {
  public object: {} = {}
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

  public getForm(form: {}) {
    let forms = {...form}
    console.log('obteniendo form desde servicio', forms)
  }
}
