import { NgModule } from "@angular/core";
import { PainelPrincipalComponent } from "./components/painel-principal/painel-principal.component";
import { CadastrarTarefasComponent } from "./components/cadastrar-tarefas/cadastrar-tarefas.component";
import { ConsultarTarefasComponent } from "./components/consultar-tarefas/consultar-tarefas.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [ //componentes do módulo
        PainelPrincipalComponent,
        CadastrarTarefasComponent,
        ConsultarTarefasComponent,
        SidebarComponent,
        NavbarComponent
    ],
    imports: [ //bibliotecas e configurações do módulo
        AdminRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterLink
    ]
})
export class AdminModule { }