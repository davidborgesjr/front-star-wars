import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseItensPageComponent } from './base-itens-page.component';

describe('BaseItensPageComponent', () => {
  let component: BaseItensPageComponent;
  let fixture: ComponentFixture<BaseItensPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseItensPageComponent]
    });
    fixture = TestBed.createComponent(BaseItensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
