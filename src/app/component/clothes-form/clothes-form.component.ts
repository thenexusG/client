import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { ClothesService } from '../../services/clothes.service'
import { Clothes } from '../../models/clothes'


@Component({
  selector: 'app-clothes-form',
  templateUrl: './clothes-form.component.html',
  styleUrls: ['./clothes-form.component.css']
})
export class ClothesFormComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  clothe: any = {
    id: 0,
    nombre: '',
    talla: '',
    imagen_base64: ''
  };

  edit: boolean = false;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private clothesService: ClothesService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.clothesService.getClothe(params['id']).subscribe(
        res => {
          //console.log(res);
          this.clothe = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  saveNewGame() {
    delete this.clothe.id;

    this.clothesService.saveClothe(this.clothe).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/administrador/list']);
      },
      err => console.error(err)
    );
  }

  updateGame() {

  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.clothe.imagen_base64 = reader.result;
        //console.log(reader.result);
        
      };

      reader.readAsDataURL(file);
    }
  }
}
