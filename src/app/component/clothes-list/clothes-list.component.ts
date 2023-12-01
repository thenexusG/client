import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ClothesService } from '../../services/clothes.service'

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  clothes: any = [];
  showButtons = false;


  constructor(private clothesService: ClothesService, private router: Router) { }

  ngOnInit(): void {
    this.getClothes();
    this.showButtons = this.router.url === '/administrador/list';
  }

  getClothes(){
    this.clothesService.getClothes().subscribe(
      res => {
        this.clothes = res;
      },
      err => console.error(err)
    );
  }

  deleteClothes(id: string){
    console.log(id);
    this.clothesService.deleteClothe(id).subscribe(
      res => {
        console.log(res);
        this.getClothes();
      }, err => console.log(err)
    )
  }
}
