import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from './validators/nospace.validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* Custom Errors, let's say that we want to type a username without having spaces
  */

  form: any;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        noSpace.noSpaceValidations
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  get username() {
    return this.form.get('username')
  }

  get password() {
    return this.form.get('password')
  }

  get fc () {
    return this.form.controls;


  }


}
