import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoarUserComponent } from './boar-user.component';

describe('BoarUserComponent', () => {
  let component: BoarUserComponent;
  let fixture: ComponentFixture<BoarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
