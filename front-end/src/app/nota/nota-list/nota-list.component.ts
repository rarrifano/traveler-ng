import { NotaService } from './../nota.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nota-list',
  templateUrl: './nota-list.component.html',
  styleUrls: ['./nota-list.component.scss']
})
export class NotaListComponent implements OnInit {

  notas: any = []
  displayedColumns: string[] = ['numNota','empresa', 'status', 'usuario', 'transportadora' ,'editar', 'excluir']
  constructor(private notaSrv: NotaService,
    private snackBar : MatSnackBar) { }

  async ngOnInit(){
    this.notas = await this.notaSrv.listar()
    console.log(this.notas)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.notaSrv.excluir(id)
        // 1) Recarregar os dados da tabela
        this.ngOnInit()
        // 2) Dar feedback para o usuário com mensagem
        this.snackBar.open('Item excluído com sucesso.', 'OK', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        // 3) Dar feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', 'OK', {
          duration: 5000 // 5 segundos
        })
        console.log(erro)
      }
    }
  }

}
