import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FormsDataService {
  
  // ======================================
  //				Atributes
  // ======================================
  public basicInfo: {} = {};
  public formFinal: {} = {};
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

  public getInfoBasic(formBasic: {}) {
    this.basicInfo = formBasic;
    console.log("obteniendo formbasic desde el servicio", this.basicInfo);
  }

  // ======================================
  //				Send info to client
  // ======================================
  public sendFormClient(form: {}): Observable<any> {
    this.formFinal = { ...form, ...this.basicInfo };

    console.log("Obteniendo form final desde servicio", this.formFinal);
    return this.httpClient
      .post<any>(`${this.apiUrl}/client`, this.formFinal, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // ======================================
  //				Send info to adviser
  // ======================================

  public sendFormAdviser(form: {}) {
    this.formFinal = { ...form, ...this.basicInfo };

    console.log("obteniendo form final desde servicio", this.formFinal);
    this.httpClient
      .post<any>(
        "http://api.latribu.test/api/adviser",
        this.formFinal,
        this.httpOptions
      )
      .subscribe((rest) => {
        console.log("listo mano", rest);
      });
    // .pipe(catchError(this.errorHandler));
  }

  // ======================================
  //				Error handler
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
