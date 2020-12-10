import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiServer : string = environment.apiServer
  private apiUri : string = this.apiServer + 'usuario'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.apiUri).toPromise()
  }

  excluir(id: string){
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
