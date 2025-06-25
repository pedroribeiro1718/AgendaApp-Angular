import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthHelper } from "../helpers/auth.helper";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    //injeções de dependência
    router = inject(Router);
    helper = inject(AuthHelper);

    /*
       Método para verificar se o usuário está 
       autenticado e se poderá acessar a rota
    */
    canActivate() : boolean {

        //verificar se o usuário está autenticado
        if(this.helper.get() == null) {
            this.router.navigate(['/login/autenticar-usuario']);
            return false;
        }

        return true;        
    }
}