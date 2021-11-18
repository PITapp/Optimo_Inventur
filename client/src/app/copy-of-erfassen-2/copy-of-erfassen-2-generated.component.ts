/*
  This file is automatically generated. Any changes will be overwritten.
  Modify copy-of-erfassen-2.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { SelectBarComponent } from '@radzen/angular/dist/selectbar';
import { TextBoxComponent } from '@radzen/angular/dist/textbox';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { LabelComponent } from '@radzen/angular/dist/label';
import { CardComponent } from '@radzen/angular/dist/card';
import { DataListComponent } from '@radzen/angular/dist/datalist';
import { IconComponent } from '@radzen/angular/dist/icon';

import { ConfigService } from '../config.service';
import { MeldungLoeschenComponent } from '../meldung-loeschen/meldung-loeschen.component';

import { DbOptimoService } from '../db-optimo.service';

export class CopyOfErfassen2Generated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('selectbarErfassenModus') selectbarErfassenModus: SelectBarComponent;
  @ViewChild('textboxArtikelnummer') textboxArtikelnummer: TextBoxComponent;
  @ViewChild('buttonArtikelAuswahl') buttonArtikelAuswahl: ButtonComponent;
  @ViewChild('label4') label4: LabelComponent;
  @ViewChild('label6') label6: LabelComponent;
  @ViewChild('label9') label9: LabelComponent;
  @ViewChild('button0') button0: ButtonComponent;
  @ViewChild('label5') label5: LabelComponent;
  @ViewChild('label7') label7: LabelComponent;
  @ViewChild('button5') button5: ButtonComponent;
  @ViewChild('card1') card1: CardComponent;
  @ViewChild('textbox2') textbox2: TextBoxComponent;
  @ViewChild('button2') button2: ButtonComponent;
  @ViewChild('button3') button3: ButtonComponent;
  @ViewChild('button1') button1: ButtonComponent;
  @ViewChild('label12') label12: LabelComponent;
  @ViewChild('label1') label1: LabelComponent;
  @ViewChild('label3') label3: LabelComponent;
  @ViewChild('datalistErfassung') datalistErfassung: DataListComponent;
  @ViewChild('label2') label2: LabelComponent;
  @ViewChild('buttonOpenDialogErfassungLoeschen') buttonOpenDialogErfassungLoeschen: ButtonComponent;

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
  dsoLagerort: any;
  onClickAuswahlLagerorte: any;
  onClickErfassungLoeschen: any;
  strErfassungModus: any;
  parameters: any;
  rstErfassung: any;
  rstErfassungCount: any;

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
    window.scroll(0,0);

    this.dbOptimo.getInventurBases(`InventurID eq ${this.parameters.InventurID}`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.dsoLagerort = result.value[0];

      this.datalistErfassung.load();
    }, (result: any) => {

    });

    this.onClickAuswahlLagerorte = () => {
    
};



    this.onClickErfassungLoeschen = (data) => {
    this.buttonOpenDialogErfassungLoeschenClick('');
};

    this.strErfassungModus = 'Mengen';

    setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)
  }

  selectbarErfassenModusChange(event: any) {
    setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)
  }

  buttonArtikelAuswahlClick(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['erfassen-artikel-auswahl']);
  }

  button0Click(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['erfassen-artikel-auswahl']);
  }

  button5Click(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['erfassen-artikel-auswahl']);
  }

  button2Click(event: any) {
    this.notificationService.notify({ severity: "success", summary: ``, detail: `5 Artikel erfasst!` });
  }

  button3Click(event: any) {
    this.notificationService.notify({ severity: "success", summary: ``, detail: `5 Artikel erfasst!` });
  }

  button1Click(event: any) {
    this.notificationService.notify({ severity: "success", summary: ``, detail: `5 Artikel erfasst!` });
  }

  datalistErfassungLoadData(event: any) {
    this.dbOptimo.getVwInventurErfassungs(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.rstErfassung = result.value;

      this.rstErfassungCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  buttonOpenDialogErfassungLoeschenClick(event: any) {
    this.dialogService.open(MeldungLoeschenComponent, { parameters: {strMeldung: 'Soll die Erfassung vom ... gelöscht werden?'}, title: `Löschen Erfassung` })
        .afterClosed().subscribe(result => {
              this.notificationService.notify({ severity: "info", summary: ``, detail: `Erfassung gelöscht` });
    });
  }
}