import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name = new FormControl('', [Validators.minLength(6), Validators.required]);
  email = new FormControl('', [Validators.required , Validators.email]);
  password = new FormControl('', Validators.required);
  confirmPassword = new FormControl('', Validators.required);
  constructor() {}

  ngOnInit(): void {}

  register() {
    console.log(this.name.value);
  }
}
