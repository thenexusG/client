import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  showButtonsList = false;
  showButtonsAdd = false;

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.router.events
    .subscribe(() => {
      this.showButtonsList = this.router.url === '/administrador/list';
    });

    this.router.events
    .subscribe(() => {
      this.showButtonsAdd = this.router.url === '/administrador/add';
    });
  }

  navigateAdd(){
    this.router.navigate(['/administrador/add']);  
  }
  navigateList(){
    this.router.navigate(['/administrador/list']);  
  }
}
