import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'ng2-imageupload';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Ng2ImgMaxService,
  ImgMaxSizeService,
  ImgExifService,
  ImgMaxPXSizeService,
} from 'ng2-img-max';
import { Ng2PicaService, ImgExifService as ImgPicaService } from 'ng2-pica';

import { FormComponent } from './form.component';

import { AppConfigModule } from '../../../app-config.module';
import { UserService } from '../../../core/services/user/user.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ImageUploadModule,
        NgbModule.forRoot(),
        NgbModalModule,
        RouterTestingModule,
        AppConfigModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
      ],
      providers: [
        UserService,
        Ng2ImgMaxService,
        ImgMaxSizeService,
        ImgExifService,
        ImgMaxPXSizeService,
        Ng2PicaService,
        ImgPicaService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
