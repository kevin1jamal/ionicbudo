import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeActualitePage } from './liste-actualite.page';

describe('ListeActualitePage', () => {
  let component: ListeActualitePage;
  let fixture: ComponentFixture<ListeActualitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeActualitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeActualitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
