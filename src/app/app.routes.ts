import { Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login', //domínio
        // Lazy loading do módulo de login
        // O Angular vai carregar o módulo de login apenas quando o usuário acessar a rota /login
        loadChildren: () => import('./modules/login/login.module')
                            .then(m => m.LoginModule)
    },
    {
        path: 'admin', //domínio
        // Lazy loading do módulo de admin
        // O Angular vai carregar o módulo de admin apenas quando o usuário acessar a rota /admin
        loadChildren: () => import('./modules/admin/admin.module')
                            .then(m => m.AdminModule),
        //Aplicar o guardião para só permitir o acesso de usuários autenticados
        canActivate: [AuthGuard]
    },
    {
        path: '', //raiz do projeto
        pathMatch: 'full',
        redirectTo: '/login/autenticar-usuario' //redireciona para a rota de login
    },
    {
        path: '**', //caminho corrompido
        component: NotfoundComponent //componente de erro 404
    }
];
