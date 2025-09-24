import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { AreaPersonal } from './pages/area-personal/area-personal';
import { IsilNet } from './pages/isil-net/isil-net';
import { Cursos } from './pages/cursos/cursos';
import { Perfil } from './pages/perfil/perfil';

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
];
