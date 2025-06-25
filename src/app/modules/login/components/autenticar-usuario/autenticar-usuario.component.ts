import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { AutenticarUsuarioRequest } from '../../../../core/models/autenticar-usuario.request';
import { Router } from '@angular/router';
import { AuthHelper } from '../../../../core/helpers/auth.helper';

@Component({
  selector: 'app-autenticar-usuario',
  standalone: false,
  templateUrl: './autenticar-usuario.component.html',
  styleUrl: './autenticar-usuario.component.css'
})
export class AutenticarUsuarioComponent {

  //injeções de dependência
  private service = inject(UsuarioService); //classe de serviços de usuário
  private builder = inject(FormBuilder); //construtor de formulário
  private router = inject(Router); //navegação de rotas
  private helper = inject(AuthHelper); //classe auxiliar de autenticação

  //atributos
  mensagemErro: string[] = [];

  //estrutura do formulário
  form = this.builder.group({
    email: new FormControl('', []),
    senha: new FormControl('', [])
  });

  //função para capturar o submit
  onSubmit() {

    //preenchendo o objeto request com os dados do formulário
    const request: AutenticarUsuarioRequest = {
      email: this.form.value.email as string,
      password: this.form.value.senha as string
    }

    //fazendo o envio para a API
    this.service.autenticar(request)
      .subscribe({ //aguardando o retorno da API
        next: (response) => { //capturando a resposta de sucesso          
          this.form.reset(); //limpando o formulário
          this.helper.create(response); //salvar os dados na session storage
          this.router.navigate(['/admin/painel-principal']); //redirecionamento
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
