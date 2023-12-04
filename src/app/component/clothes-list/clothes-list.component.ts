import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ClothesService } from '../../services/clothes.service'
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  clothes: any = [];
  cantExistente: any = [];

  showButtons = false;
  itemId: string = "1"; 
  cantidad: number = 0;

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

  getClothesExisting(id: string): Observable<number> {
    return this.clothesService.getClothesExisting(id).pipe(
      map(res => {
        this.cantExistente = res;
        return this.cantExistente[0].cantidad_existente;
      })
    );
  }

  removeQuantityExisting(id: string) {
    //consulta cantidades existentes
    this.getClothesExisting(id).subscribe(
      cantExistentes => {
        this.cantidad = cantExistentes as number;
        // Aquí puedes usar el valor de cantExistentes como necesites
        if (this.cantidad > 0) {
          this.clothesService.removeQuantityExisting(id).subscribe(
              res => {
                console.log(res);
                this.getClothes();
                this.getClothesExisting(id).subscribe(
                  nuevaCantidad => {
                    if (nuevaCantidad === 0) {
                      // Si la cantidad es 0 después de la eliminación, elimina automáticamente el objeto
                      this.clothesService.deleteClothe(id).subscribe(
                        deleteRes => {
                          console.log(deleteRes);
                          this.getClothes();
                        },
                        deleteErr => console.error(deleteErr)
                      );
                    }
                  }, getCantidadError => {
                    console.error('Error al obtener la cantidad existente después de la eliminación:', getCantidadError);
                  }
                );
              },
             err => console.log(err)
            );
        } 
      },
      error => {
        console.error('Error al obtener la cantidad existente:', error);
      }
    );
    
    
    
    
  }
}
