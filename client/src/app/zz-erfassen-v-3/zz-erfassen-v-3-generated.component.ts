/*
  This file is automatically generated. Any changes will be overwritten.
  Modify zz-erfassen-v-3.component.ts instead.
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
import { IconComponent } from '@radzen/angular/dist/icon';
import { CardComponent } from '@radzen/angular/dist/card';
import { DataListComponent } from '@radzen/angular/dist/datalist';

import { ConfigService } from '../config.service';
import { MeldungLoeschenComponent } from '../meldung-loeschen/meldung-loeschen.component';

import { DbOptimoService } from '../db-optimo.service';

export class ZzErfassenV3Generated implements AfterViewInit, OnInit, OnDestroy {
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
  @ViewChild('buttonArtikelEntfernen') buttonArtikelEntfernen: ButtonComponent;
  @ViewChild('label5') label5: LabelComponent;
  @ViewChild('label13') label13: LabelComponent;
  @ViewChild('label7') label7: LabelComponent;
  @ViewChild('icon1') icon1: IconComponent;
  @ViewChild('card1') card1: CardComponent;
  @ViewChild('textbox2') textbox2: TextBoxComponent;
  @ViewChild('button2') button2: ButtonComponent;
  @ViewChild('datalistErfassung') datalistErfassung: DataListComponent;
  @ViewChild('label2') label2: LabelComponent;
  @ViewChild('buttonOpenDialogErfassungLoeschen') buttonOpenDialogErfassungLoeschen: ButtonComponent;
  @ViewChild('buttonArtikelLadenByArtikelnummer') buttonArtikelLadenByArtikelnummer: ButtonComponent;

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
  onClickErfassungLoeschen: any;
  strErfassungModus: any;
  globalArtikelID: any;
  dsoArtikel: any;
  onKeyDownSetArtikelnummer: any;
  onClickArtikelProtokollOeffnen: any;
  strStatusArtikelnummer: any;
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



    this.onClickErfassungLoeschen = (data) => {
    this.buttonOpenDialogErfassungLoeschenClick(data);
};

    this.strErfassungModus = 'Mengen';

    setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)

    this.globalArtikelID = sessionStorage.getItem("globalArtikelID");

    this.dbOptimo.getInventurArtikelByArtikelId(null, this.globalArtikelID)
    .subscribe((result: any) => {
      this.dsoArtikel = result;
    }, (result: any) => {

    });

    this.onKeyDownSetArtikelnummer = (event) => {
  console.log("taste gedrückt");
  console.log(event);
    
  if(this.textboxArtikelnummer.value === undefined) {
    this.textboxArtikelnummer.value = "";
  }

  if(this.strStatusArtikelnummer == 'Artikel geladen') {
    this.textboxArtikelnummer.value = "";
    this.strStatusArtikelnummer = 'Unbekannt'
  }

  switch (event.key) {
    case "F12":
    case "Shift":
    case "Tab":
    case "Control":
      // Taste - nix tun
      break;
      
    case "Enter":
    case "Unidentified":
      console.log("--------- Enter ---------");
          
      if(this.textboxArtikelnummer.value.length >= 1) {
        this.strStatusArtikelnummer = 'Artikel geladen';

        var strArtikelnummer = this.textboxArtikelnummer.value;
        var pos = strArtikelnummer.indexOf('-F');

        if (pos > 0) {
          strArtikelnummer = strArtikelnummer.substr(0, pos);
          this.textboxArtikelnummer.value = strArtikelnummer;
        }
        
        this.buttonArtikelLadenByArtikelnummerClick(strArtikelnummer);
      }
          
      //this.notificationService.notify({ severity: "info", summary: ``, detail: `Bin fertig` });
      //document.getElementById("Feld123").focus()
      break;

    case "Backspace":
      if(this.textboxArtikelnummer.value.length >= 1) {
        this.textboxArtikelnummer.value = this.textboxArtikelnummer.value.substr(0,this.textboxArtikelnummer.value.length - 1);
      }
      break;

    default:
      this.textboxArtikelnummer.value = this.textboxArtikelnummer.value + event.key;
      break;
  }
};

    this.onClickArtikelProtokollOeffnen = (data) => {
    // this.buttonOpenDialogErfassungLoeschenClick(data);
};

    this.strStatusArtikelnummer = 'Unbekannt';
  }

  selectbarErfassenModusChange(event: any) {
    setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)
  }

  buttonArtikelAuswahlClick(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['erfassen-artikel-auswahl', this.dsoLagerort.InventurID]);
  }

  buttonArtikelEntfernenClick(event: any) {
    this.dsoArtikel = null;

    setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)
  }

  button2Click(event: any) {
    this.notificationService.notify({ severity: "success", summary: `Ein Test`, detail: `5 Artikel erfasst!` });
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
    this.dialogService.open(MeldungLoeschenComponent, { parameters: {strMeldung: "Soll die Erfassung vom " + event.ErfasstAm + " für den Artikel '" + event.Artikelnummer + " " + event.Beschreibung + "'  gelöscht werden?"}, title: `Löschen Erfassung` })
        .afterClosed().subscribe(result => {
              if (result == 'Löschen') {
        this.notificationService.notify({ severity: "info", summary: ``, detail: `Erfassung gelöscht ${event.ErfassungID}` });
      }
    });
  }

  buttonArtikelLadenByArtikelnummerClick(event: any) {
    this.dbOptimo.getInventurArtikels(`Artikelnummer eq '${event}'`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.dsoArtikel = result.value[0];
    }, (result: any) => {

    });
  }
}
