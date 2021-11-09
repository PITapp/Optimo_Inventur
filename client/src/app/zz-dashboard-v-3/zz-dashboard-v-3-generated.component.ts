/*
  This file is automatically generated. Any changes will be overwritten.
  Modify zz-dashboard-v-3.component.ts instead.
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
import { IconComponent } from '@radzen/angular/dist/icon';
import { LabelComponent } from '@radzen/angular/dist/label';
import { DataListComponent } from '@radzen/angular/dist/datalist';
import { ButtonComponent } from '@radzen/angular/dist/button';

import { ConfigService } from '../config.service';

import { DbOptimoService } from '../db-optimo.service';

export class ZzDashboardV3Generated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('card15') card15: CardComponent;
  @ViewChild('heading3') heading3: HeadingComponent;
  @ViewChild('heading6') heading6: HeadingComponent;
  @ViewChild('progressbar0') progressbar0: ProgressBarComponent;
  @ViewChild('heading10') heading10: HeadingComponent;
  @ViewChild('heading11') heading11: HeadingComponent;
  @ViewChild('progressbar1') progressbar1: ProgressBarComponent;
  @ViewChild('card14') card14: CardComponent;
  @ViewChild('icon11') icon11: IconComponent;
  @ViewChild('label14') label14: LabelComponent;
  @ViewChild('label15') label15: LabelComponent;
  @ViewChild('datalistLagerorte') datalistLagerorte: DataListComponent;
  @ViewChild('card8') card8: CardComponent;
  @ViewChild('heading8') heading8: HeadingComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('label0') label0: LabelComponent;
  @ViewChild('buttonNavigateToErfassen') buttonNavigateToErfassen: ButtonComponent;

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

  dbOptimo: DbOptimoService;
  onClickStartErfassen: any;
  onClickStartInfos: any;
  parameters: any;
  rstLagerorte: any;
  rstLagerorteCount: any;

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

    this.dbOptimo = this.injector.get(DbOptimoService);
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
    this.datalistLagerorte.load();

    this.onClickStartErfassen = (data) => {

console.log(data);

    if (this.dialogRef) {
        this.dialogRef.close();
    }
    this.router.navigate(['erfassen', data.InventurID]);
};

    this.onClickStartInfos = () => {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['infos']);
};
  }

  datalistLagerorteLoadData(event: any) {
    this.dbOptimo.getInventurBases(null, null, null, `LagerortNummer`, null, null, null, null)
    .subscribe((result: any) => {
      this.rstLagerorte = result.value;

      this.rstLagerorteCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  buttonNavigateToErfassenClick(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['erfassen', 0]);
  }
}