import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { IndiaPage } from './india.page';

describe('IndiaPage', () => {
  let component: IndiaPage;
  let fixture: ComponentFixture<IndiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndiaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IndiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
