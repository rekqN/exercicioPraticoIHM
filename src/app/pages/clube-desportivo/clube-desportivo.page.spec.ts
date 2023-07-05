import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubeDesportivoPage } from './clube-desportivo.page';

describe('ClubeDesportivoPage', () => {
  let component: ClubeDesportivoPage;
  let fixture: ComponentFixture<ClubeDesportivoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClubeDesportivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
