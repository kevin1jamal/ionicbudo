import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActualitePage } from './detail-actualite.page';

describe('DetailActualitePage', () => {
  let component: DetailActualitePage;
  let fixture: ComponentFixture<DetailActualitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailActualitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailActualitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
