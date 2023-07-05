import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurismoPage } from './turismo.page';

describe('TurismoPage', () => {
  let component: TurismoPage;
  let fixture: ComponentFixture<TurismoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TurismoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
