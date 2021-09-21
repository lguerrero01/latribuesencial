import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FormsDataService {
  public formFinal: {} = {};

  constructor(private httpClient: HttpClient) {}
  
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  public sendForm(form: {}) {
    this.formFinal = { ...form};
    console.log("obteniendo form desde servicio", this.formFinal);
  }
}
