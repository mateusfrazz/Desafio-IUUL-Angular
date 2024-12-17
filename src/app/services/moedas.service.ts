import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moeda } from '../interfaces/Moeda';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {
  private apiURL = 'https://v6.exchangerate-api.com/v6/d689891c6cea0995886cf97a/codes'
  
  constructor(private http:HttpClient) {}

  getMoeda(): Observable <ApiResponse>{
      return this.http.get<ApiResponse>(this.apiURL)
  }
  converterMoedas(moedaOrigem:string, moedaDestino:string, valor:number): Observable <ApiResponse>{
    return this.http.get<ApiResponse>(this.apiURL)
}
  
}
