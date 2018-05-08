import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import {UserService} from '../../services/user.service';

import {UserModel} from '../../models/user.model';
import {AlbumModel} from '../../models/album.model';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-modal-user-albums',
  templateUrl: './modal-user-albums.component.html',
  styleUrls: ['./modal-user-albums.component.css']
})
export class ModalUserAlbumsComponent implements OnInit, OnChanges, OnDestroy {

  @Input() isOpen: boolean;
  @Input() user: UserModel;
  @Output() close: EventEmitter<any> = new EventEmitter();
  listAlbums: AlbumModel[] = [];
  viewListAlbums: AlbumModel[] = [];
  modelFilterTitleAlbums: Subject<string> = new Subject<string>();
  filterTitleAlbums = '';

  constructor(
    private userService: UserService
  ) {
    this.modelFilterTitleAlbums
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(model => {
        this.filterTitleAlbums = model;
        this.filteredAlbumsUser();
      });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadData();
  }

  loadData() {
    if (this.user && typeof(this.user.id) === 'number') {
      this.loadUserAlbums(this.user.id);
    }
  }

  loadUserAlbums(idUser) {
    this.userService.getAlbumsUser(idUser)
      .subscribe(listAlbums => {
        this.listAlbums = listAlbums;
        this.viewListAlbums = listAlbums;
      },
      error => {});
  }

  closeModal(userData = null) {
    this.isOpen = false;
    this.close.emit();
  }

  changedFilterAlbums(text: string) {
    this.modelFilterTitleAlbums.next(text);
  }

  filteredAlbumsUser() {
    if (this.filterTitleAlbums === '') {
      this.viewListAlbums = this.listAlbums;
    } else {
      this.viewListAlbums = this.listAlbums.filter(album => {
        return Boolean(album.title.indexOf(this.filterTitleAlbums) !== -1);
      });
    }
  }

  ngOnDestroy() {
    this.filterTitleAlbums = '';
  }
}
