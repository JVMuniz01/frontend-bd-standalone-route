import { Component, OnInit } from '@angular/core';
import { IViewClientesProdutos } from '../../interface/view-clientes-produtos.interface';
import { BancoDeDadosService } from '../../service/banco-de-dados.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-primeiro',
  imports: [MatTableModule],
  standalone: true,
  templateUrl: './primeiro.html',
  styleUrl: './primeiro.scss',
})
// So executa a lógica quando a rota seja carregada 
export class Primeiro implements OnInit{
  vendasCliente: IViewClientesProdutos[] = [];
  colunasVendasClientes: string[] = ['nome', 'total_compras','total_transporte'];

  constructor(
    private readonly bancoDeDadosService: BancoDeDadosService
  ){}

  ngOnInit(): void {
    this.bancoDeDadosService.getVendasClientes().subscribe({
      next: (dados: IViewClientesProdutos[]) => {
        console.log(dados);
        this.vendasCliente = dados;
        console.log(this.vendasCliente);
      },
      error: (err) => console.error(err)
    })
  }


}
