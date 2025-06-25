import { RouterModule, Routes } from "@angular/router";
import { PainelPrincipalComponent } from "./components/painel-principal/painel-principal.component";
import { CadastrarTarefasComponent } from "./components/cadastrar-tarefas/cadastrar-tarefas.component";
import { ConsultarTarefasComponent } from "./components/consultar-tarefas/consultar-tarefas.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path: 'painel-principal',
        component: PainelPrincipalComponent
    },
    {
        path: 'cadastrar-tarefas',
        component: CadastrarTarefasComponent
    },
    {
        path: 'consultar-tarefas',
        component: ConsultarTarefasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }