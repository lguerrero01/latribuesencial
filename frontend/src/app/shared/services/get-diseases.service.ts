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
    { name: "Debilidad en el sistema inmunológico", value: "debilidad en el sistema inmunológico " },
    { name: "Fibromialgia", value: "Fibromialgia " },
    { name: "Acné", value: "Acné " },
    { name: "Hiperactividad en los niños", value: "Hiperactividad en los niños" },
    { name: "Menopausia", value: "Menopausia" },
    { name: "Alergias", value: "Alergias" },
    { name: "Cansancio", value: "Cansancio" },
    { name: "Caspa", value: "Caspa" },
    { name: "Dolores de garganta", value: "Dolores de garganta" },
    { name: "Estreñimiento", value: "Estreñimiento" },
    { name: "Gripes recurrentes", value: "Gripes recurrentes" },
    { name: "Herpes labial", value: "Herpes labial" },
    { name: "Hongos en la piel", value: "Hongos en la piel" },
    { name: "Manchas en la piel", value: "Manchas en la piel" },
    { name: "Dolores menstruales", value: "Dolores menstruales" },
    { name: "Náuseas", value: "Náuseas" },
    { name: "Dolores de oído", value: "Dolores de oído" },
    { name: "Pie de atleta", value: "Pie de atleta" },
    { name: "Piojos", value: "Piojos" },
    { name: "Embarazo", value: "Embarazo" },
    { name: "Reducción de carga tóxica", value: "Reducción de carga tóxica" }
    
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
