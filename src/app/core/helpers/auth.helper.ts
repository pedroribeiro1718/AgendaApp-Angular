import { inject, Injectable } from "@angular/core";
import { AutenticarUsuarioResponse } from "../models/autenticar-usuario.response";
import { CryptoHelper } from "./crypto.helper";

@Injectable({
    providedIn: 'root'
})
export class AuthHelper {

    //chave para gravar os dados na session storage
    private key : string = 'user-auth';

    //injeção de dependência para a classe de criptografia
    private cryptoHelper = inject(CryptoHelper);

    //Método para gravar os dados do usuário autenticado na session storage
    create(data: AutenticarUsuarioResponse): void {     
        const crypt = this.cryptoHelper.encrypt(JSON.stringify(data));   
        sessionStorage.setItem(this.key, crypt);
    }

    //Método para retornar os dados do usuário autenticado
    get() : AutenticarUsuarioResponse | null {
        const data = sessionStorage.getItem(this.key);
        if(data != null) {
             const decrypt = this.cryptoHelper.decrypt(data);
             return JSON.parse(decrypt) as AutenticarUsuarioResponse;
        }
        else
            return null;
    }

    //Método para apagar os dados do usuário gravado na session storage
    remove(): void {
        sessionStorage.removeItem(this.key);
    }
}