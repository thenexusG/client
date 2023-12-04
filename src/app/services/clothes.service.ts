import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

import { Clothes } from '../models/clothes'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  API_URI = 'https://tiendaonline-v6kq.onrender.com/api'

  constructor(private http: HttpClient) { }

  
  getClothes(){
    return this.http.get(`${this.API_URI}/articles`);
  }

  getClothe(id: string){
    return  this.http.get(`${this.API_URI}/articles/${id}`);
  }

  deleteClothe(id: string){
    return  this.http.delete(`${this.API_URI}/articles/${id}`);
  }

  updateClothe(id: string, updatedGame: Clothes): Observable<Clothes>{
    return  this.http.put(`${this.API_URI}/articles/${id}`, updatedGame);
  }

  saveClothe(article: Clothes){
    return  this.http.post(`${this.API_URI}/articles`, article);
  }

  removeQuantityExisting(id: string): Observable<any> {
    return this.http.put(`${this.API_URI}/articles/existing/${id}`, {});
  }

  getClothesExisting(id: string){
    return  this.http.get(`${this.API_URI}/articles/existing/${id}`);
  }
}
