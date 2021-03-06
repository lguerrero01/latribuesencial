import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class GetKitsService {
  // ======================================
  //				Atributes
  // ======================================
  public apiUrl: string = environment.urlAPI;

  public kits = [];
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
    return this.httpClient
      .post<any>(
        `${this.apiUrl}/getKits`,
        { checkArray: diseases },
        this.httpOptions
      )
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
