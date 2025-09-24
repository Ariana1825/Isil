import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-cursos',
  imports: [UpperCasePipe, RouterModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos {
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
    event.preventDefault(); // evita refrescar la página
    this.isUser = !this.isUser;
  }

  closerToogleUser() {
    this.isUser = false;
  }

  nombreUsuario = 'eve.holt@reqres.in';

  cursos = false;

  toogleCursos() {
    this.cursos = !this.cursos;
  }

  ordenar = false;

  OrdenarToogle() {
    this.ordenar = !this.ordenar;
  }

  tarjeta = false;

  TarjetaToogle() {
    this.tarjeta = !this.tarjeta;
  }

  descripcion = false;

  DescripcionToogle() {
    this.descripcion = !this.descripcion;
  }

  cursosDatos = [
    {
      title: '1066.202520 - PROGRAMACION WEB I (SRM)',
      img: 'icons/img12.png',
    },
    {
      title: '1451.202520 - COMUNICACION ESCRITA (SRM)',
      img: 'icons/img11.png',
    },
    {
      title: '2256.202520 - GESTION DE DISPOSITIVOS TECNOLOGICOS ...',
      img: 'icons/img9.png',
    },
    {
      title: '3072.202520 - PROGRAMACION AVANZADA DE BASE DE DATOS ...',
      img: 'icons/img9.png',
    },
    {
      title: '3559.202520 - ANALISIS Y DISEÑO DE SISTEMAS I (SRM)',
      img: 'icons/img9.png',
    },
    {
      title: '3586.202520 - SOLUCIONES BASADAS EN INTERNET DE LAS ...',
      img: 'icons/img13.png',
    },
    {
      title: '4761.202520 - DESARROLLO DE APLICACIONES MOVILES (SRM)',
      img: 'icons/img10.png',
    },
    {
      title: '5218.202520 - CALCULO PARA CIENCIAS E INGENIERIA (SRM)',
      img: 'icons/img9.png',
    },
  ];
}
