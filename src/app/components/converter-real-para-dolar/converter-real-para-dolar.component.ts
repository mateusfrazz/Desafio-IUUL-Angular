import { Component, OnInit } from '@angular/core';
import { Moeda } from '../../interfaces/Moeda';
import { MatTableDataSource } from '@angular/material/table';
import { HistoricoConversaoService } from '../../services/historico-conversao.service';

@Component({
  selector: 'app-converter-real-para-dolar',
  standalone: false,

  templateUrl: './converter-real-para-dolar.component.html',
  styleUrl: './converter-real-para-dolar.component.css',
})

export class ConverterRealParaDolarComponent implements OnInit {
  private ELEMENT_DATA = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA
  // Propriedade para armazenar o histórico local
  history: any[] = [];

  constructor(private historicoConversao: HistoricoConversaoService) {}

  ngOnInit(): void {
  
  }


}
