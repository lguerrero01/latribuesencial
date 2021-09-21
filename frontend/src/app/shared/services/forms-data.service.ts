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
  public apiUrl: string = "";
  
  constructor(private httpClient: HttpClient) {}

  public httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  public sendForm(form: {}): Observable<any> {
    this.formFinal = { ...form };

    console.log("obteniendo form desde servicio", this.formFinal);
    return this.httpClient
      .post<any>(this.apiUrl, JSON.stringify(form), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

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
