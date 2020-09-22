import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../security-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = false;

  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.construirForm(fb);
  }

  ngOnInit(): void {
  }

  private construirForm(fb: FormBuilder): void {
    this.loginForm = fb.group({
      user: [''],
      password: ['']
    });
  }

  login(user: string, password: string): void {
    if (user && password) {
      this.loginService.login(user, password).subscribe(x => {
        console.log(x);
      });
    } else {
      this.error = true;
    }

  }

}
