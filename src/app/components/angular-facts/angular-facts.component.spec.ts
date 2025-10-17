import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFactsComponent } from './angular-facts.component';

describe('AngularFactsComponent', () => {
  let component: AngularFactsComponent;
  let fixture: ComponentFixture<AngularFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFactsComponent] // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(AngularFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have facts', () => {
    expect(component.facts.length).toBeGreaterThan(0);
  });
});
