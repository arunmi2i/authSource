import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MylibraryPage } from './mylibrary.page';

describe('MylibraryPage', () => {
  let component: MylibraryPage;
  let fixture: ComponentFixture<MylibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MylibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
