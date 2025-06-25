import { Component, inject } from '@angular/core';
import { AuthHelper } from '../../../../core/helpers/auth.helper';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  authHelper = inject(AuthHelper)

  nomeUsuario : string = ''

  ngOnInit() {
    this.nomeUsuario = this.authHelper.get()?.name as string;
  }

  logout() {
      this.authHelper.remove()
      location.reload()
  }
}
