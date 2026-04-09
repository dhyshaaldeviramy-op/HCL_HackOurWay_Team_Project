import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Authservice } from '../../../core/services/authservice';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   private fb     = inject(FormBuilder);
  private auth   = inject(Authservice);
  private router = inject(Router);

  loading = signal(false);
  

  form: FormGroup = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched();
     return;
   }
    this.loading.set(true);
  

    this.auth.login(this.form.value).subscribe({
      next: (res:any) => {
        this.auth.savesession(res);
        if (this.auth.isAdmin()) {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/messages']);
        }
      },
      error: () => {
      
        this.loading.set(false);
      }
    });
  }
}


