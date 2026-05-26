import { Component, OnInit } from '@angular/core';
import { IViewProdutoVendedor } from '../../interface/view-produto-vendedore.interface';
import { BancoDeDadosService } from '../../service/banco-de-dados.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-base',
  imports: [MatTableModule],
  templateUrl: './base.html',
  styleUrl: './base.scss',
})
export class Base implements OnInit {
  totalVendas: IViewProdutoVendedor[] = [];
  colunasTotalVendas: string[] = ['nome', 'total_produto', 'valor_total_vendido'];
  constructor(
      private bancoDeDadosService: BancoDeDadosService,
  ) {}

  ngOnInit(): void {
    this.bancoDeDadosService.getProdutosVendedores().subscribe({
      next: (dados: IViewProdutoVendedor[]) => {
        this.totalVendas = dados;
        console.log(this.totalVendas);
      },
      error: (err) => console.error(err)
    });
  }

}
