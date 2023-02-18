import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRecordComponent } from './blog-record.component';

describe('BlogRecordComponent', () => {
  let component: BlogRecordComponent;
  let fixture: ComponentFixture<BlogRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
