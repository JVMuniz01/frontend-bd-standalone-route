import { Component } from '@angular/core';
import { IViewProdutoVendedor } from '../../interface/view-produto-vendedore.interface';
import { BancoDeDadosService } from '../../service/banco-de-dados.service';
import {MatTableModule} from '@angular/material/table';
import { IViewVendaProduto } from '../../interface/view-venda-produto.interface';

@Component({
  selector: 'app-inicial',
  imports: [MatTableModule],
  templateUrl: './inicial.html',
  styleUrl: './inicial.scss',
})
export class Inicial {
  vendasProdutos: IViewVendaProduto[] = [];
  colunasVendasProdutos: string[] = ['nome', 'total_vendido', 'valor_total'];
  constructor(
    private bancoDeDadosService: BancoDeDadosService
  ) {}

  ngOnInit(): void {
    this.bancoDeDadosService.getVendasProdutos().subscribe({
      next: (dados: IViewVendaProduto[]) => {
        if(dados){
          setTimeout(() => {
        this.vendasProdutos = dados;
        }, 0);
      }
      },
      error: (err) => console.error(err)
    });
  }
}
