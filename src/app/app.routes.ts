import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { AreaPersonal } from './pages/area-personal/area-personal';
import { IsilNet } from './pages/isil-net/isil-net';
import { Cursos } from './pages/cursos/cursos';
import { Perfil } from './pages/perfil/perfil';
import { Calificaciones } from './pages/calificaciones/calificaciones';
import { Calendario } from './pages/calendario/calendario';
import { Preferencias } from './pages/preferencias/preferencias';
import { Cerrar } from './pages/cerrar/cerrar';
import { Psicologia } from './pages/psicologia/psicologia';
import { BolsaLaboral } from './pages/bolsa-laboral/bolsa-laboral';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'my',
    component: AreaPersonal,
  },
  {
    path: 'isilnet',
    component: IsilNet,
  },
  {
    path: 'cursos',
    component: Cursos,
  },
  {
    path: 'perfil',
    component: Perfil,
  },
  {
    path: 'calificaciones',
    component: Calificaciones,
  },
  {
    path: 'calendario',
    component: Calendario,
  },
  {
    path: 'preferencias',
    component: Preferencias,
  },
  {
    path: 'cerrar',
    component: Cerrar,
  },
  {
    path: 'psicologia',
    component: Psicologia,
  },
  {
    path: 'bolsa-laboral',
    component: BolsaLaboral,
  },
];
