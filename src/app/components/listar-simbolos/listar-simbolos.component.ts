import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Moeda } from '../../interfaces/Moeda';
import { MoedasService } from '../../services/moedas.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-simbolos',
  standalone: false,
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.css']
})
export class ListarSimbolosComponent implements OnInit, AfterViewInit {
  displayedColumns = ['code', 'name'];
  listaDeMoedas: Moeda[] = [];
  dataSource: MatTableDataSource<Moeda>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private moedaService: MoedasService) {
    this.dataSource = new MatTableDataSource(this.listaDeMoedas);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.moedaService.getMoeda().subscribe((dado) => {
      this.listaDeMoedas = dado.supported_codes.map(([code, name]) => ({
        code,
        name,
      }));
      this.dataSource = new MatTableDataSource(this.listaDeMoedas);
    });
  }
}
