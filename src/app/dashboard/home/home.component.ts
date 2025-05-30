import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tipoUsuario: number | null = null;

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.tipoUsuario = userData?.idTipoUsuario;

    if (!this.tipoUsuario) {
      this.router.navigateByUrl('/login');
    }
  }

  constructor(private router: Router) {}
}
