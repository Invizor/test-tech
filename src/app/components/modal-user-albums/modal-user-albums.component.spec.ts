import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserAlbumsComponent } from './modal-user-albums.component';

describe('ModalUserAlbumsComponent', () => {
  let component: ModalUserAlbumsComponent;
  let fixture: ComponentFixture<ModalUserAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUserAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUserAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
