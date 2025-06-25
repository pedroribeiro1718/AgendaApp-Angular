import { Component, inject } from '@angular/core';
import { TarefasService } from '../../../../core/services/tarefas.service';
import { DashboardTarefasResponse } from '../../../../core/models/dashboard-tarefas.response';

@Component({
  selector: 'app-painel-principal',
  standalone: false,
  templateUrl: './painel-principal.component.html',
  styleUrl: './painel-principal.component.css'
})
export class PainelPrincipalComponent {
  tarefasService = inject(TarefasService);

  dashboard: DashboardTarefasResponse[] = [];

  ngOnInit() {
    this.tarefasService.obterDashboard()
      .subscribe((response) => {
        this.dashboard = response;
      });
  }
}