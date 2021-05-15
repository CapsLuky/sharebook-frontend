import { ToastrModule } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list.component';

import { AppConfigModule } from '../../../app-config.module';
import { ConfirmationDialogService } from '../../../core/services/confirmation-dialog/confirmation-dialog.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        Ng2SmartTableModule,
        AppConfigModule,
        RouterTestingModule,
        NgbModule,
        NgbModalModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
      ],
      providers: [ConfirmationDialogService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
