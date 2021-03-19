import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSandCreditCardsComponent } from './ngx-sand-credit-cards.component';

describe('NgxSandCreditCardsComponent', () => {
  let component: NgxSandCreditCardsComponent;
  let fixture: ComponentFixture<NgxSandCreditCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSandCreditCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSandCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
