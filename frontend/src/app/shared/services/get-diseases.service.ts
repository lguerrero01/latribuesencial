import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class GetDiseasesService {
  // ======================================
  //			Atributes
  // ======================================
  public apiUrl: string = environment.urlAPI;

  public Data: Array<any> = [
    { name: "Ansiedad", id: "1" },
    { name: "Dermatitis Atopica", id: "2" },
    { name: "Insomnio", id: "3" },
    { name: "Eczema", id: "4" },
    { name: "Caida del Cabello", id: "5" },
    { name: "Problemas estomacales", id: "6" },
    { name: "Infecciones urinarias", id: "7" },
    { name: "Migraña", id: "8" },
    { name: "Dolores Musculares", id: "8" },
    { name: "Problemas Respiratorios", id: "9" },
    { name: "Problemas de peso", id: "10" },
    { name: "Debilidad en el sistema inmunológico", id: "11" },
    { name: "Fibromialgia", id: "12" },
    { name: "Acné", id: "13" },
    { name: "Hiperactividad en los niños", id: "14" },
    { name: "Menopausia", id: "15" },
    { name: "Alergias", id: "16" },
    { name: "Cansancio", id: "17" },
    { name: "Caspa", id: "18" },
    { name: "Dolores de garganta", id: "19" },
    { name: "Estreñimiento", id: "" },
    { name: "Gripes recurrentes", id: "20" },
    { name: "Herpes labial", id: "21" },
    { name: "Hongos en la piel", id: "22" },
    { name: "Manchas en la piel", id: "23" },
    { name: "Dolores menstruales", id: "24" },
    { name: "Náuseas", id: "25" },
    { name: "Dolores de oído", id: "26" },
    { name: "Pie de atleta", id: "27" },
    { name: "Piojos", id: "28" },
    { name: "Embarazo", id: "29" },
    { name: "Reducción de carga tóxica", id: "30" },
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
      .get<any>(`${this.apiUrl}/diseases`)
      .pipe(catchError(this.errorHandler));
  }

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
