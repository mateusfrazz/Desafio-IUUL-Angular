import { Component, OnInit } from '@angular/core';
import { MoedasService } from '../../services/moedas.service';
import { Moeda } from '../../interfaces/Moeda';
import { FormControl, Validators } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
import { ConversaoResponse } from '../../interfaces/ConversaoResponse';

@Component({
  selector: 'app-converter-moedas',
  standalone: false,
  
  templateUrl: './converter-moedas.component.html',
  styleUrl: './converter-moedas.component.css'
})
export class ConverterMoedasComponent implements OnInit {
  listaDeMoedas: Moeda[] = [];
  moedaOrigemControl: FormControl = new FormControl({value:null,disabled:false},Validators.required);
  moedaDestinoControl: FormControl = new FormControl({value:null,disabled:false},Validators.required);
  valorConversaoControl: FormControl = new FormControl({value:null,disabled:false},Validators.required);
  resultadoConversao! : ConversaoResponse;
  resultadoConversaoControl: FormControl = new FormControl();
  taxaControl: FormControl = new FormControl()
  constructor(private moedaService: MoedasService){}
  ngOnInit(): void {
    this.getSimbolos();
    // this.valorConversaoControl.valueChanges.subscribe((valorConversao)=>{
    //    console.log(valorConversao);
    // })
  }
  getSimbolos(): void {
    this.moedaService.getMoeda().subscribe({
      next: (data) => {
        this.listaDeMoedas = data.supported_codes.map(([code, name]) => ({
          code,
          name,
        }));
      }
    });
    console.log(this.listaDeMoedas)
  }

  converterMoedas():void {
    const moedaOrigemValor = this.moedaOrigemControl.value;
    const moedaDestinoValor = this.moedaDestinoControl.value;
    const valorConversao = this.valorConversaoControl.value;
     this.moedaService.converterMoeda(moedaOrigemValor, moedaDestinoValor, valorConversao).subscribe((response)=>{
        this.resultadoConversao = response;
        this.mapearValoresInput(response)
     })
  }

  mapearValoresInput(valor:ConversaoResponse):void{
     this.resultadoConversaoControl.setValue(valor.conversion_result);
     this.taxaControl.setValue(valor.conversion_rate);
  }

}
