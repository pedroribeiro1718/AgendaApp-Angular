import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { CriarUsuarioRequest } from "../models/criar-usuario.request";
import { Observable } from "rxjs";
import { CriarUsuarioResponse } from "../models/criar-usuario.response";
import { AutenticarUsuarioRequest } from "../models/autenticar-usuario.request";
import { AutenticarUsuarioResponse } from "../models/autenticar-usuario.response";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    //Atributos da classe
    private url = environment.apiUsuarios;
    private http = inject(HttpClient);

    //Método para criar um usuário
    criar(request: CriarUsuarioRequest): Observable<CriarUsuarioResponse> {
        return this.http.post<CriarUsuarioResponse>
            (`${this.url}/create`, request);
    }

    //Método para autenticar um usuário
    autenticar(request: AutenticarUsuarioRequest): Observable<AutenticarUsuarioResponse> {
        return this.http.post<AutenticarUsuarioResponse>
            (`${this.url}/login`, request);
    }
}