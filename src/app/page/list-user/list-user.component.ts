import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUsers: UserModel[];
  viewListUsers: UserModel[];
  filterNameUser = '';
  isOpenModalEditUser = false;
  isOpenModalUserAlbums = false;
  editableUser: UserModel;
  modelFilterNameUserChanged: Subject<string> = new Subject<string>();

  constructor(
    private userService: UserService
  ) {
    this.modelFilterNameUserChanged
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(model => {
        this.filterNameUser = model;
        this.filteredListUser();
      });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loadListUser();
  }

  loadListUser() {
    this.userService.getListUsers()
      .subscribe(listUsers => {
        this.listUsers = listUsers;
        this.viewListUsers = listUsers;
      },
      error => {});
  }

  startEditCurrentUser(user) {
    this.editableUser = user;
    this.isOpenModalEditUser = true;
  }

  openModalUserAlbums(user) {
    this.editableUser = user;
    this.isOpenModalUserAlbums = true;
  }

  changedFilterUser(text: string) {
    this.modelFilterNameUserChanged.next(text);
  }

  filteredListUser() {
    if (this.filterNameUser === '') {
      this.viewListUsers = this.listUsers;
    } else {
      this.viewListUsers = this.listUsers.filter(user => {
        return Boolean(user.name.indexOf(this.filterNameUser) !== -1);
      });
    }
  }

  onCloseModalEditUser(event) {
    this.isOpenModalEditUser = false;
  }

  onCloseModalUserAlbums(event) {
    this.isOpenModalUserAlbums = false;
  }
}
