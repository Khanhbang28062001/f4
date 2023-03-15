import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangChuHvComponent } from './trang-chu-hv.component';

describe('TrangChuHvComponent', () => {
  let component: TrangChuHvComponent;
  let fixture: ComponentFixture<TrangChuHvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangChuHvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrangChuHvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
