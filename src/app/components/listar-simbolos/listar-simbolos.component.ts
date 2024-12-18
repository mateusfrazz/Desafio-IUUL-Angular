import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Moeda } from '../../interfaces/Moeda';
import { MoedasService } from '../../services/moedas.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

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
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private moedaService: MoedasService, private _liveAnnouncer: LiveAnnouncer) {
    this.dataSource = new MatTableDataSource(this.listaDeMoedas);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getSimbolos();
  }

  getSimbolos(): void {
    this.moedaService.getMoeda().subscribe({
      next: (data) => {
        this.listaDeMoedas = data.supported_codes.map(([code, name]) => ({
          code,
          name,
        }));
        this.dataSource.data = this.listaDeMoedas;
      }
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.trim().toLowerCase();

    // Aplicar filtro na lista de moedas
    this.dataSource.data = this.listaDeMoedas.filter(moeda =>
      moeda.name.toLowerCase().includes(value) || moeda.code.toLowerCase().includes(value)
    );
  }

  sortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
