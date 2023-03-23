import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  form = new FormGroup({
    'account': new FormGroup({
      'username': new FormControl('',
      Validators.required,
      UsernameValidators.shouldBeUnique),
      'password': new FormControl('',Validators.required),
    }),
  })

  get username(){
    return this.form.get('account.username');
  }
  get password() {
    return this.form.get('account.password');
  }
}
