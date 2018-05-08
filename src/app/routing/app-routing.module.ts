import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsUserComponent } from '../page/albums-user/albums-user.component';
import { ListUserComponent } from '../page/list-user/list-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-user', pathMatch: 'full'},
  { path: 'list-user',
    component: ListUserComponent
  },
  { path: 'albums',
    component: AlbumsUserComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

