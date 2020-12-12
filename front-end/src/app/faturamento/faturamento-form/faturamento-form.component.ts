import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NotaService } from 'src/app/nota/nota.service';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { FaturamentoService } from '../faturamento.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-faturamento-form',
  templateUrl: './faturamento-form.component.html',
  styleUrls: ['./faturamento-form.component.scss']
})
export class FaturamentoFormComponent implements OnInit {

  faturamento : any = {}

  title : string = 'Novo lançamento'

  notas : any = []
  usuarios : any = []

  constructor(
    private faturamentoSrv : FaturamentoService,
    private notaSrv : NotaService,
    private usuarioSrv : UsuarioService,
    private location : Location,
    private snackBar : MatSnackBar,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verifica se existe o parâmetro id na URL (rota)
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.faturamento = await this.faturamentoSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando lançamento de recebimento'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
    // Carrega as listagens das entidades relacionadas
    this.carregarDados()
  }

  async carregarDados() {
    try {
      this.notas = await this.notaSrv.listar()
      this.usuarios = await this.usuarioSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open(`ERRO: não foi possível carregar todos os dados 
        necessários para a página.`, 'Que pena', { duration: 5000 })
    }
  }

  async salvar(form: NgForm) {
    if(form.valid) {
      try {
        // 1) Salvar os dados no back-end
        // Se o turma já existir (caso de edição), ele já terá
        // o atributo _id
        if(this.faturamento._id) {
          await this.faturamentoSrv.atualizar(this.faturamento) // Atualização
        }
        else {
          await this.faturamentoSrv.novo(this.faturamento)
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
          { duration: 5000 })
      }
      
    }
  }

  voltar(form: NgForm) {
    let result = true
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }

    if(result) this.location.back()

  }

}
