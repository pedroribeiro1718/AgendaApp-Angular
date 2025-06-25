import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { CriarUsuarioRequest } from '../../../../core/models/criar-usuario.request';

@Component({
  selector: 'app-criar-usuario',
  standalone: false,
  templateUrl: './criar-usuario.component.html',
  styleUrl: './criar-usuario.component.css'
})
export class CriarUsuarioComponent {

  //injeções de dependência
  private service = inject(UsuarioService); //classe de serviços de usuário
  private builder = inject(FormBuilder); //construtor de formulário

  //atributos
  mensagemSucesso: string[] = [];
  mensagemErro: string[] = [];

  //estrutura do formulário
  form = this.builder.group({
    nome: new FormControl('', []),
    email: new FormControl('', []),
    senha: new FormControl('', []),
    senhaConfirmacao: new FormControl('', [])
  });

  //função para capturar o submit
  onSubmit() {

    //preenchendo o objeto request com os dados do formulário
    const request: CriarUsuarioRequest = {
      name: this.form.value.nome as string,
      email: this.form.value.email as string,
      password: this.form.value.senha as string,
      passwordConfirm: this.form.value.senhaConfirmacao as string
    }

    this.mensagemSucesso = [];
    this.mensagemErro = [];

    //fazendo o envio para a API
    this.service.criar(request)
      .subscribe({ //aguardando o retorno da API
        next: (response) => { //capturando a resposta de sucesso
          this.mensagemSucesso.push(`Parabéns, ${response.name}. Sua conta foi criada com sucesso!`);
          this.form.reset(); //limpando o formulário
        },
        error: (e) => { //capturando a resposta de erro
          this.mensagemErro = []; //limpando as mensagens
          const errorResponse = e.error;

          if (errorResponse?.errors) {
            // Tratamento de erros de validação (objeto com arrays de mensagens)
            for (const key in errorResponse.errors) {
              if (Array.isArray(errorResponse.errors[key])) {
                this.mensagemErro.push(...errorResponse.errors[key]);
              }
            }
          } else if (errorResponse?.message) {
            // Tratamento de erro com mensagem única
            this.mensagemErro.push(errorResponse.message);
          } else {
            // Erro genérico
            this.mensagemErro.push('Ocorreu um erro inesperado ao processar sua solicitação.');
          }
        }
      });
  }
}
