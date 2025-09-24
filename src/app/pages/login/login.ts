import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/pagina.service';
import { UserLogin } from '../../models/login.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user: UserLogin = { email: '', password: '' };
  token: string = '';
  error: string = '';

  private fb = inject(FormBuilder);

  formulario!: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    // aquí inicializamos el form
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor completa todos los campos correctamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    const user: UserLogin = this.formulario.value;

    this.userService.login(user).subscribe({
      next: (res) => {
        this.token = res.token;
        localStorage.setItem('Token', this.token);
        Swal.fire({
          title: '¡Éxito!',
          text: 'Has iniciado sesión correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          this.router.navigate(['/home']);
        });
        this.error = '';
      },
      error: (err) => {
        console.error(err);
        this.error = err.status === 401 ? 'Credenciales incorrectas' : 'Error al iniciar sesión';
        this.token = '';
      },
    });
  }
}
