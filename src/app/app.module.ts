import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ClothesFormComponent } from './component/clothes-form/clothes-form.component';
import { ClothesListComponent } from './component/clothes-list/clothes-list.component';
import { LoginComponent } from './component/login/login.component';

import { ClothesService } from './services/clothes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClothesFormComponent,
    ClothesListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClothesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
