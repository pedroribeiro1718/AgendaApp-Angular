import { HttpInterceptorFn } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AuthHelper } from "../helpers/auth.helper";
import { inject } from "@angular/core";

//Função interceptador
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

    //verificar se a requisição é para o endpoint da api de tarefas
    if(req.url.includes(environment.apiTarefas)) {
        //Injeção de dependência
        const authHelper = inject(AuthHelper);

        //capturar o token do usuário na sessão
        const token = authHelper.get()?.token;

        //Modificar a requisição para incluir o envio do token
        const cloneRequest = req.clone({
            setHeaders: {
                Authorization : `Bearer ${token}`
            }
        });
        return next(cloneRequest);
    }

    return next(req);
}