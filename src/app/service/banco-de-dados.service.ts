import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IViewProdutoVendedor } from '../interface/view-produto-vendedore.interface';
import { IViewVendaProduto } from '../interface/view-venda-produto.interface';
import { IViewClientesProdutos } from '../interface/view-clientes-produtos.interface';
import { IProduto } from '../interface/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class BancoDeDadosService {
  
  private readonly apiURL = 'http://localhost:3000/api/dashboard';

  constructor(
    private readonly _http: HttpClient
  ){}

  getVendasProdutos(): Observable<IViewVendaProduto[]> {
    return this._http.get<IViewVendaProduto[]>(`${this.apiURL}/vendas-produtos`);
  }

  getVendasClientes(): Observable<IViewClientesProdutos[]> {
    return this._http.get<IViewClientesProdutos[]>(`${this.apiURL}/vendas-clientes`);
  }

  getProdutosVendedores(): Observable<IViewProdutoVendedor[]> {
    return this._http.get<IViewProdutoVendedor[]>(`${this.apiURL}/produtos-vendedores`);
  }

  getTodosProdutos(): Observable<IProduto[]> {
    return this._http.get<IProduto[]>(`${this.apiURL}/produtos`);
  }
}
