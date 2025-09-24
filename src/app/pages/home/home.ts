import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [UpperCasePipe, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
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

  @ViewChild('banner') bannerVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    if (this.bannerVideo?.nativeElement) {
      this.bannerVideo.nativeElement.muted = true;
      this.bannerVideo.nativeElement.defaultMuted = true;
      this.bannerVideo.nativeElement.play();
    }
  }

  cursos = [
    {
      img: 'icons/img9.png',
      curso: '5218.202520 - CALCULO PARA CIENCIAS E INGENIERIA (SRM)',
      horario: 'Sa 09:00-10:50',
      profesor: 'JOHNNY OSMAN PEREZ CARPENA',
    },
    {
      img: 'icons/img10.png',
      curso: '4761.202520 - DESARROLLO DE APLICACIONES MOVILES (SRM)',
      horario: 'Vi 09:00-10:50',
      profesor: 'CELSO JAVIER GUZMAN DIAZ',
    },
    {
      img: 'icons/img9.png',
      curso: '3072.202520 - PROGRAMACION AVANZADA DE BASE DE DATOS (SRM)',
      horario: 'Ju 09:00-10:50',
      profesor: 'CELSO JAVIER GUZMAN DIAZ',
    },
    {
      img: 'icons/img11.png',
      curso: '1451.202520 - COMUNICACION ESCRITA (SRM)',
      horario: 'Vi 07:00-08:50',
      profesor: 'MONICA HORTENCIA CACEDA QUISPE',
    },
    {
      img: 'icons/img12.png',
      curso: '1066.202520 - PROGRAMACION WEB I (SRM)',
      horario: 'Lu 07:00-08:50',
      profesor: 'OBED ABRAHAM GOMERO HUERTA',
    },
    {
      img: 'icons/img9.png',
      curso: '3559.202520 - ANALISIS Y DISEÑO DE SISTEMAS I (SRM)',
      horario: 'Ma 16:00-17:50',
      profesor: 'JOSE LUIS MORON VALDIVIA',
    },
    {
      img: 'icons/img9.png',
      curso: '2256.202520 - GESTION DE DISPOSITIVOS TECNOLOGICOS (SRM)',
      horario: 'Ma 14:00-15:50',
      profesor: 'GUSTAVO EDMUNDO HUAMANI KANA',
    },
    {
      img: 'icons/img13.png',
      curso: '3586.202520 - SOLUCIONES BASADAS EN INTERNET DE LAS COSAS (SRM)',
      horario: 'Vi 17:00-18:50',
      profesor: 'MARCO ANTONIO FLORES ROSA',
    },
  ];
}
