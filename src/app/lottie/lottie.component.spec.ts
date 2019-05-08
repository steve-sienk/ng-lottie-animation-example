import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LottieAnimationViewModule } from 'ng-lottie';

import { LottieComponent } from './lottie.component';

describe('LottieComponent', () => {
  let component: LottieComponent;
  let fixture: ComponentFixture<LottieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottieComponent ], 
      imports: [LottieAnimationViewModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
