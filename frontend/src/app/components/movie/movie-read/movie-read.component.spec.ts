import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReadComponent } from './movie-read.component';

describe('MovieReadComponent', () => {
  let component: MovieReadComponent;
  let fixture: ComponentFixture<MovieReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}

function expect(component: MovieReadComponent) {
  throw new Error('Function not implemented.');
}

