import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ClothesListComponent } from './component/clothes-list/clothes-list.component'
import { ClothesFormComponent } from './component/clothes-form/clothes-form.component'
import { LoginComponent } from './component/login/login.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/clothes',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   redirectTo: 'administrador/list',
  //   pathMatch: 'full'
  // },
  {
    path: 'clothes',
    component: ClothesListComponent
  },
  {
    path: 'administrador/list',
    component: ClothesListComponent
  },
  {
    path: 'administrador/add',
    component: ClothesFormComponent
  },
  {
    path: 'administrador',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
