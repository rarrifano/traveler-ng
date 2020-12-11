import { UsuarioService } from './../../usuario/usuario.service';
import { TransportadoraService } from './../../transportadora/transportadora.service';
import { EmpresaService } from './../../empresa/empresa.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NotaService } from '../nota.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
@Component({
  selector: 'app-nota-form',
  templateUrl: './nota-form.component.html',
  styleUrls: ['./nota-form.component.scss']
})
export class NotaFormComponent implements OnInit {

  title : string = 'Nova Nota'
  notas: any = []
  empresas: any = []
  transportadoras: any = []
  usuarios: any = []
  nota: any = {}
  
  constructor(
    private notaSrv:NotaService,
    private empresaSrv: EmpresaService,
    private transportadoraSrv: TransportadoraService,
    private usuarioSrv: UsuarioService,
    private location : Location,
    private snackBar : MatSnackBar,
    private actRoute : ActivatedRoute) { }

  async ngOnInit(){
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.nota = await this.notaSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando aula'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }  

    this.carregarDados()
  }

  async carregarDados() {
    try {
      this.notas = await this.notaSrv.listar()
      this.empresas = await this.empresaSrv.listar()
      this.transportadoras = await this.transportadoraSrv.listar()
      this.usuarios = await this.usuarioSrv.listar()
      console.log(this.transportadoras)
      
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
        // o atributo _id
        if(this.nota._id) {
          await this.notaSrv.atualizar(this.nota) // Atualização
        }
        else {
          await this.notaSrv.novo(this.nota)
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'OK',
          { duration: 5000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'OK!',
          { duration: 5000 })
      }
      
    }
  }

  voltar(form: NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }

    if(result) this.location.back()

  }

}
