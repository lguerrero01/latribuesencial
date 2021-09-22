import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class GetDiseasesService {
  // ======================================
  //			Atributes
  // ======================================
  public apiURL: string = "http://api.latribu.test/api";
  public Data: Array<any> = [
    { name: "Ansiedad", value: "ansiedad" },
    { name: "Dermatitis Atopica", value: "dermatitis atopica" },
    { name: "Insomnio", value: "insomnio" },
    { name: "Eczema", value: "eczema" },
    { name: "Caida del Cabello", value: "caida del cabello" },
    { name: "Problemas estomacales", value: "problemas estomacales" },
    { name: "Infecciones urinarias", value: "infecciones urinarias" },
    { name: "Migraña", value: "migraña" },
    { name: "Dolores Musculares", value: "dolores musculares" },
    { name: "Problemas Respiratorios", value: "problemas respiratorios" },
    { name: "Problemas de peso", value: "problemas de peso " },
  ];

  // ======================================
  //			Constructor
  // ======================================
  constructor(private httpClient: HttpClient) {}

  // ======================================
  //				Get Diseases
  // ======================================
  public getDiseases(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.apiURL}/diseases`)
      .pipe(catchError(this.errorHandler));
  }
  // ======================================
  //				Get kits
  // ======================================
  public getKitsByDiseases(diseases: []) {}

  // ======================================
  //				Error Handler
  // ======================================
  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
