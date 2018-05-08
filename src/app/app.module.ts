import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { ListUserComponent } from './page/list-user/list-user.component';
import { AlbumsUserComponent } from './page/albums-user/albums-user.component';

import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { ModalEditUserComponent } from './components/modal-edit-user/modal-edit-user.component';
import { ModalUserAlbumsComponent } from './components/modal-user-albums/modal-user-albums.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    AlbumsUserComponent,
    ModalEditUserComponent,
    ModalUserAlbumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
