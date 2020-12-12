import { NotaService } from './../../nota/nota.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FaturamentoService } from '../faturamento.service';

@Component({
  selector: 'app-faturamento-list',
  templateUrl: './faturamento-list.component.html',
  styleUrls: ['./faturamento-list.component.scss']
})
export class FaturamentoListComponent implements OnInit {

  faturamentos : any = []

  displayedColumns : string[] = ['nro_duplicata', 'nro_nota', 'data', 'valor', 'data_vencimento', 'status', 'usuario', 'editar', 'excluir']

  constructor(
    private faturamentoSrv : FaturamentoService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.faturamentos = await this.faturamentoSrv.listar()
    console.log(this.faturamentos)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.faturamentoSrv.excluir(id)
        // 1) Recarregar os dados da tabela
        this.ngOnInit()
        // 2) Dar feedback para o usuário com mensagem
        this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        // 3) Dar feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', 'Que pena!', {
          duration: 5000 // 5 segundos
        })
        console.log(erro)
      }
    }
  }


}
