import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  standalone: false,
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {

  //Parâmetros do componente
  @Input() titulo: string = '';
  @Input() mensagens: string[] = [];
  @Input() tipo: 'success' | 'danger' = 'success';

  //função para fechar as mensagens
  fecharMensagens() {
    this.mensagens = [];
  }
}
