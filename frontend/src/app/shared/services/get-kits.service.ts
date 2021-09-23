import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class GetKitsService {
  // ======================================
  //				Atributes
  // ======================================
  public kits = [];
  public apiUrl: string = "http://api.latribu.test/api";
  public httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  // ======================================
  //				Constructor
  // ======================================
  constructor(private httpClient: HttpClient) {}

  // ======================================
  //				Get kits by Diseases
  // ======================================
  public getKitsByDiseases(diseases: []): Observable<any> {
    console.log("obteniendo enfermedades desde servicio", diseases);
    return this.httpClient
      .post<any>(`${this.apiUrl}/getKits`, diseases, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // ======================================
  //				Error Handler
  // ======================================
  public errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
