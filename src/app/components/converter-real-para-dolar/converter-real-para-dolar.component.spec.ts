import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterRealParaDolarComponent } from './converter-real-para-dolar.component';

describe('ConverterRealParaDolarComponent', () => {
  let component: ConverterRealParaDolarComponent;
  let fixture: ComponentFixture<ConverterRealParaDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConverterRealParaDolarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterRealParaDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
