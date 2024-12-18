import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moeda } from '../interfaces/Moeda';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';
import { ConversaoResponse } from '../interfaces/ConversaoResponse';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {
  private apiURL = 'https://v6.exchangerate-api.com/v6/d689891c6cea0995886cf97a/codes'
  
  constructor(private http:HttpClient) {}

  getMoeda(): Observable <ApiResponse>{
      return this.http.get<ApiResponse>(this.apiURL)
  }
 
  converterMoeda(moedaOrigem: string, moedaDestino: string, valor: number): Observable<ConversaoResponse> {
    const url: string = `https://v6.exchangerate-api.com/v6/d689891c6cea0995886cf97a/pair/${moedaOrigem}/${moedaDestino}/${valor}`;
    return this.http.get<ConversaoResponse>(url);
  }
}
