import { NgModule } from "@angular/core";
import { AutenticarUsuarioComponent } from "./components/autenticar-usuario/autenticar-usuario.component";
import { CriarUsuarioComponent } from "./components/criar-usuario/criar-usuario.component";
import { LoginRoutingModule } from "./login-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AlertsComponent } from "./shared/alerts/alerts.component";

@NgModule({
    declarations: [ //componentes do módulo
        AutenticarUsuarioComponent,
        CriarUsuarioComponent,
        AlertsComponent
    ],
    imports: [ //bilbiotecas ou configurações do módulo
        LoginRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterLink
    ]
})
export class LoginModule { }