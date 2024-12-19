import { Injectable } from '@angular/core';
import { HistoricoConversao } from '../interfaces/historicoConversao';

@Injectable({
  providedIn: 'root',
})
export class HistoricoConversaoService {
  private history: HistoricoConversao[] = [];
  addConversion(conversao: HistoricoConversao): void {
    this.history.push(conversao);
    //salvar dados no localStorage
    localStorage.setItem('ConversionHistory', JSON.stringify(this.history));
  }

  getHistory(): HistoricoConversao[] {
    //recuperar do localStorage caso existam dados
    const savedHistory = localStorage.getItem('conversionHistory');
    if (savedHistory) {
      this.history = JSON.parse(savedHistory);
    }
    return this.history;
  }
}
