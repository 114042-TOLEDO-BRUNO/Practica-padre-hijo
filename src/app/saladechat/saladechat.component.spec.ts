import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladechatComponent } from './saladechat.component';

describe('SaladechatComponent', () => {
  let component: SaladechatComponent;
  let fixture: ComponentFixture<SaladechatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaladechatComponent]
    });
    fixture = TestBed.createComponent(SaladechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
