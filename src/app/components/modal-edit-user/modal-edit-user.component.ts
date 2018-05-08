import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.css']
})
export class ModalEditUserComponent implements OnInit, OnChanges {

  @Input() isOpen: boolean;
  @Input() user: UserModel;
  @Output() close: EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initForm();
  }

  initForm() {
    if (this.user) {
      this.form = this.fb.group({
        name: this.user.name || '',
        email: this.user.email || '',
        phone: this.user.phone || ''
      });
    } else {
      this.form = this.fb.group({
        name: '',
        email: '',
        phone: ''
      });
    }
  }

  closeModal(userData = null) {
    this.isOpen = false;
    this.close.emit(userData);
  }

  saveUserChanges() {
     this.userService.changeFieldsUser(this.user.id, {
       name: this.form.value.name,
       email: this.form.value.email,
       phone: this.form.value.phone
     })
       .subscribe(updatedUserData => {
          this.closeModal(updatedUserData);
       });
  }
}
