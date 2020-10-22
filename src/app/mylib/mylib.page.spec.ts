import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MylibPage } from './mylib.page';

describe('MylibPage', () => {
  let component: MylibPage;
  let fixture: ComponentFixture<MylibPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylibPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MylibPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
