import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  userList = [
    {
      name: 'sagar@gamil.com',
      pass: 'sagar123',
    },
    {
      name: 'user@gmail.com',
      pass: 'user123',
    },
    {
      name: 'userABC@gmail.com',
      pass: 'userABC123',
    },
    {
      name: 'AMweb@gmail.com',
      pass: 'amWeb123',
    },
  ];

  public email: any;
  public password: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  loginSubmit() {
    let userCheck: any;
    if (this.email && this.password) {
      userCheck = this.userList.find(
        (ele) => ele.name === this.email && ele.pass === this.password
      );
      if (userCheck != undefined) {
        alert('You Logged in Successfully');
         this.router.navigateByUrl('dashboard')
      } else {
        alert('Try Again');
      }
    }else{
      alert('Please enter credential')
    }

  }
}
