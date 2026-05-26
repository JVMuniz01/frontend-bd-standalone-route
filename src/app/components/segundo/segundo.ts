import { Component, OnInit } from '@angular/core';
import { BancoDeDadosService } from '../../service/banco-de-dados.service';
import { IProduto } from '../../interface/produto.interface';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-segundo',
  imports: [MatTableModule],
  standalone: true,
  templateUrl: './segundo.html',
  styleUrl: './segundo.scss',
})
export class Segundo implements OnInit{
  produtos: IProduto[] = [];
  colunasNome: string[]= ['nome', 'descricao', 'qtd', 'valor'];
  constructor(
        private readonly bancoDeDadosService: BancoDeDadosService
  ){}

  ngOnInit(): void {
    this.bancoDeDadosService.getTodosProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
}
