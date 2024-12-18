import { Component } from '@angular/core';
import { Moeda } from '../../interfaces/Moeda';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-converter-real-para-dolar',
  standalone: false,
  
  templateUrl: './converter-real-para-dolar.component.html',
  styleUrl: './converter-real-para-dolar.component.css'
})
export class ConverterRealParaDolarComponent {
    displayedColumns = ['dataConversao', 'horaConversao', 'valorInformado', 'moedaSeleciona', 'resultado', 'moedaConvertida', 'taxa', 'acao']
    dataSource!: MatTableDataSource<Moeda>; 
    constructor(){

    }
}
