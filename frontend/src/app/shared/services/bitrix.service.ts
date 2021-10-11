import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitrixService {



  constructor(private httpClient: HttpClient) { }

  public sendFormClient (data:any){
    this.httpClient.post('',data).subscribe(resp =>{
    })
  }
}
