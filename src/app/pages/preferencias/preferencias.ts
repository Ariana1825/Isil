import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-preferencias',
  imports: [UpperCasePipe, RouterModule],
  templateUrl: './preferencias.html',
  styleUrl: './preferencias.css',
})
export class Preferencias {
  isOpen = false;

  toggleDropdown(event: Event) {
    event.preventDefault(); // evita refrescar la página
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  isOpenToo = false;

  toggleDropdownToo(event: Event) {
    event.preventDefault(); // evita refrescar la página
    this.isOpenToo = !this.isOpenToo;
  }

  closeDropdownToo() {
    this.isOpenToo = false;
  }

  isUser = false;

  toogleUser(event: Event) {
    event.preventDefault();
    this.isUser = !this.isUser;
  }

  closerToogleUser() {
    this.isUser = false;
  }

  nombreUsuario = 'eve.holt@reqres.in';
}
