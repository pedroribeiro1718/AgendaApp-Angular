import { RouterModule, Routes } from "@angular/router";
import { AutenticarUsuarioComponent } from "./components/autenticar-usuario/autenticar-usuario.component";
import { CriarUsuarioComponent } from "./components/criar-usuario/criar-usuario.component";
import { NgModule } from "@angular/core";

//Mapeamento de rotas para o modulo de login
export const routes: Routes = [
    {
        path: 'autenticar-usuario',
        component: AutenticarUsuarioComponent
    },
    {
        path: 'criar-usuario',
        component: CriarUsuarioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }