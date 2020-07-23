import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ttransform } from "../../../../../libs/core/src/lib/ttransform/ttranform";
import { ChildComponent } from "../child/child.component";

fdescribe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  ttransform(ChildComponent);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
