import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, UntypedFormGroup, Validators } from '@angular/forms';
import { LoginRequest } from './login-request';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginResponse } from './login-response';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
  MatFormField, MatInputModule,
MatLabel, MatFormFieldModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;
  loginRequest!: LoginRequest;
  constructor(private authService: AuthService){}
  onSubmit():void{
    var loginRequest:LoginRequest = {
      userName: this.form.controls["userName"].value,
      password: this.form.controls["password"].value,
    }
    var loginResponse:LoginResponse;
    this.authService.login(loginRequest).subscribe({
      next: result => {
        loginResponse = result
        console.log(loginResponse)
      },
      error: e => console.error(e)
    })
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  }
}
