import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  private apiServer : string = environment.apiServer
  private apiUri : string = this.apiServer + 'faturamento'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.apiUri).toPromise()
}

excluir(id: string) {
    // O método delete() nativo do HTTPClient não suporta a passagem de um body para
    // o back-end
    //return this.http.delete(this.apiServer + 'curso/' + id).toPromise()
    
    // O método request() pode usado com qualquer verbo e aceita a passagem de body
    return this.http.request('DELETE', this.apiUri, {body: {_id: id}}).toPromise()
}

novo(body : any) {
    return this.http.post(this.apiUri, body).toPromise()
}

obterUm(id : string) {
  return this.http.get(this.apiUri + '/' + id).toPromise()
}

atualizar(body : any) {
  return this.http.put(this.apiUri, body).toPromise()
}
}
