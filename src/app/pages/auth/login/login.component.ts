import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FuseAlertType } from '@fuse/components/alert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  signIn(): void
  {}

}
