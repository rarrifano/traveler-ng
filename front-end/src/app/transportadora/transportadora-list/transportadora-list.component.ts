import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { TransportadoraService } from '../transportadora.service';

@Component({
  selector: 'app-transportadora-list',
  templateUrl: './transportadora-list.component.html',
  styleUrls: ['./transportadora-list.component.scss']
})
export class TransportadoraListComponent implements OnInit {

  transportadoras : any = []

  displayedColumns: string [] = ['nome_transportadora', 'cnpj_transportadora', 'telefone', 'email', 'editar', 'excluir']

  constructor(
    private transportadoraSrv : TransportadoraService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.transportadoras = await this.transportadoraSrv.listar()
    console.log(this.transportadoras)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.transportadoraSrv.excluir(id)
        // 1) Recarregar os dados da tabela
        this.ngOnInit()
        // 2) Dar feedback para o usuário com mensagem
        this.snackBar.open('Usuário excluído com sucesso.', 'Entendi', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        // 3) Dar feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este usuário.', 'Que pena!', {
          duration: 5000 // 5 segundos
        })
        console.log(erro)
      }
    }
  }

}
