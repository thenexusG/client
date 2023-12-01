import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '2';
  password: string = '2';
  loggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.username && this.password) {
      this.loggedIn = true;
      this.router.navigate(['/administrador/add']);   
    }
  }

}
