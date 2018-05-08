import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from '../../app-config';

import {UserModel} from '../models/user.model';
import {AlbumModel} from '../models/album.model';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class UserService {
  private _listUser: ReplaySubject<UserModel[]> = new ReplaySubject(1);
  private listUser: UserModel[] = [];

  constructor(
    private apiService: ApiService
  ) {
    this.init();
  }

  private init() {
  }

  setListUsers(listUsers: UserModel[]) {
    if (Array.isArray(listUsers)) {
      this.listUser = listUsers;
      this._listUser.next(listUsers);
    } else {
      this.listUser = [];
      this._listUser.next([]);
    }
  }

  public getListUsers(): Observable<Array<UserModel>> {
    const path = AppConfig.API_URL + '/users';

    return this.apiService.get(path)
      .flatMap(listUsers => {
        this.setListUsers(listUsers);
        return this._listUser.asObservable();
      });
  }

  public getAlbumsUser(userId: number): Observable<Array<AlbumModel>> {
    const path = AppConfig.API_URL + '/albums';

    return this.apiService.get(path, {userId})
      .map(albumsUser => {
        return albumsUser;
      });
  }

  public changeFieldsUser(userId: number, paramsBody: object) {
    const path = AppConfig.API_URL + '/users/' + userId;

    return this.apiService.patch(path, paramsBody)
      .map(changeUser => {
        if (changeUser) {
          for (let i = 0; i < this.listUser.length; i++) {
            if (this.listUser[i].id === changeUser.id) {
              this.listUser[i] = changeUser;
            }
          };
          this.setListUsers(this.listUser);
        }
        return changeUser;
      });
  }

}
