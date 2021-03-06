/*
  This file is automatically generated. Any changes will be overwritten.
  Modify zz-dashboard-v-1.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { CardComponent } from '@radzen/angular/dist/card';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { ProgressBarComponent } from '@radzen/angular/dist/progressbar';
import { SparklineComponent } from '@radzen/angular/dist/sparkline';
import { ImageComponent } from '@radzen/angular/dist/image';
import { IconComponent } from '@radzen/angular/dist/icon';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { LinkComponent } from '@radzen/angular/dist/link';

import { ConfigService } from '../config.service';


export class ZzDashboardV1Generated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('card0') card0: CardComponent;
  @ViewChild('heading0') heading0: HeadingComponent;
  @ViewChild('progressbar0') progressbar0: ProgressBarComponent;
  @ViewChild('heading19') heading19: HeadingComponent;
  @ViewChild('heading20') heading20: HeadingComponent;
  @ViewChild('heading21') heading21: HeadingComponent;
  @ViewChild('sparkline0') sparkline0: SparklineComponent;
  @ViewChild('heading24') heading24: HeadingComponent;
  @ViewChild('image0') image0: ImageComponent;
  @ViewChild('card2') card2: CardComponent;
  @ViewChild('icon1') icon1: IconComponent;
  @ViewChild('button2') button2: ButtonComponent;
  @ViewChild('heading4') heading4: HeadingComponent;
  @ViewChild('card4') card4: CardComponent;
  @ViewChild('icon4') icon4: IconComponent;
  @ViewChild('button4') button4: ButtonComponent;
  @ViewChild('heading6') heading6: HeadingComponent;
  @ViewChild('card3') card3: CardComponent;
  @ViewChild('icon3') icon3: IconComponent;
  @ViewChild('button3') button3: ButtonComponent;
  @ViewChild('heading5') heading5: HeadingComponent;
  @ViewChild('card5') card5: CardComponent;
  @ViewChild('icon5') icon5: IconComponent;
  @ViewChild('button5') button5: ButtonComponent;
  @ViewChild('heading7') heading7: HeadingComponent;
  @ViewChild('card8') card8: CardComponent;
  @ViewChild('heading8') heading8: HeadingComponent;
  @ViewChild('link0') link0: LinkComponent;

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
  dateHeute: any;
  customers: any;
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

  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


  load() {
    this.dateHeute = new Date();

    this.customers = [134, 193, 156, 123, 192, 155, 132, 163, 143, 182, 192, 233, 129, 183, 233, 150, 113, 233, 323, 354, 433, 425, 365, 322, 280, 321, 393, 436,530,553,576];
  }

  button2Click(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['kontakte']);

    window.scroll(0,0);
  }

  button4Click(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['nachrichten']);

    window.scroll(0,0);
  }

  button3Click(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['nachrichten']);

    window.scroll(0,0);


  }

  button5Click(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['einstellungen']);

    window.scroll(0,0);
  }
}
