import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class FormsDataService {
  // ======================================
  //				Atributes
  // ======================================
  public kit: any = 0;
  public basicInfo: {} = {};
  public formFinal: {} = {};
  public apiUrl: string = environment.urlAPI;
  public disableNext$ = new BehaviorSubject(true);
  public httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  // ======================================
  //				Constructor
  // ======================================

  constructor(private httpClient: HttpClient, private router: Router) {}

  // ======================================
  //				Get kit
  // ======================================
  public getKit(kitId: {}) {
    this.kit = kitId;
  }
  // ======================================
  //				Get first form steps
  // ======================================
  public getInfoBasic(formBasic: {}) {
    this.basicInfo = formBasic;
  }

  // ======================================
  //				Send info to client
  // ======================================
  public sendFormClient(form: {}) {
    this.formFinal = { ...form, ...this.basicInfo };
    this.formFinal["kit"] = this.kit;

    this.httpClient
      .post<any>(`${this.apiUrl}/client`, this.formFinal, this.httpOptions)
      .subscribe(
        (resp) => {
          console.log("Se creo un cliente", resp);
          window.location.href =
            "https://www.doterra.com/US/en/selectRegion/WC/8619844";
        },
        (err) => {
          this.errorHandler(err);
          this.router.navigate(["/despedida"]);
        }
      );

    this.httpClient
      .post<any>(`${this.apiUrl}/sendBitrix`, this.formFinal)
      .subscribe(
        (data) => {
          console.log("send info client to bitrix");
        },
        (err) => {
          this.errorHandler(err);
        }
      );
  }

  // ======================================
  //				Send info to adviser
  // ======================================

  public sendFormAdviser(form: {}) {
    this.formFinal = { ...form, ...this.basicInfo };
    this.formFinal["kit"] = this.kit;

    this.httpClient
      .post<any>(`${this.apiUrl}/adviser`, this.formFinal, this.httpOptions)
      .subscribe(
        (rest) => {
          console.log("Se creo un asesor", rest);
          window.location.href =
            "https://www.doterra.com/US/en/selectRegion/WC/8619844";
        },
        (err) => {
          this.errorHandler(err);
          this.router.navigate(["/despedida"]);
        }
      );

    this.httpClient
      .post<any>(`${this.apiUrl}/sendBitrix`, this.formFinal)
      .subscribe(
        (data) => {
          console.log("send info client to bitrix", data);
        },
        (err) => {
          this.errorHandler(err);
        }
      );
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
