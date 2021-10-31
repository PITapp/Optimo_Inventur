/*
  This file is automatically generated. Any changes will be overwritten.
  Modify main-layout.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { HeaderComponent } from '@radzen/angular/dist/header';
import { ImageComponent } from '@radzen/angular/dist/image';
import { LabelComponent } from '@radzen/angular/dist/label';
import { LinkComponent } from '@radzen/angular/dist/link';
import { BodyComponent } from '@radzen/angular/dist/body';
import { ContentContainerComponent } from '@radzen/angular/dist/content-container';

import { ConfigService } from '../config.service';

import { SecurityService } from '../security.service';

export class MainLayoutGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('header0') header0: HeaderComponent;
  @ViewChild('image0') image0: ImageComponent;
  @ViewChild('label2') label2: LabelComponent;
  @ViewChild('label5') label5: LabelComponent;
  @ViewChild('linkDashboard') linkDashboard: LinkComponent;
  @ViewChild('body0') body0: BodyComponent;
  @ViewChild('main') main: ContentContainerComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  security: SecurityService;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


  image0Click(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['dashboard']);
  }
}
