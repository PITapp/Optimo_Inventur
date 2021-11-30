/*
  This file is automatically generated. Any changes will be overwritten.
  Modify copy-of-erfassen.component.ts instead.
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
import { IconComponent } from '@radzen/angular/dist/icon';
import { SelectBarComponent } from '@radzen/angular/dist/selectbar';
import { TextBoxComponent } from '@radzen/angular/dist/textbox';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { LabelComponent } from '@radzen/angular/dist/label';
import { CardComponent } from '@radzen/angular/dist/card';
import { DataListComponent } from '@radzen/angular/dist/datalist';

import { ConfigService } from '../config.service';
import { MeldungLoeschenComponent } from '../meldung-loeschen/meldung-loeschen.component';

import { DbOptimoService } from '../db-optimo.service';

export class CopyOfErfassenGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('icon1') icon1: IconComponent;
  @ViewChild('selectbarErfassenModus') selectbarErfassenModus: SelectBarComponent;
  @ViewChild('textboxArtikelnummer') textboxArtikelnummer: TextBoxComponent;
  @ViewChild('buttonArtikelAuswahl') buttonArtikelAuswahl: ButtonComponent;
  @ViewChild('label4') label4: LabelComponent;
  @ViewChild('label6') label6: LabelComponent;
  @ViewChild('label9') label9: LabelComponent;
  @ViewChild('buttonArtikelEntfernen') buttonArtikelEntfernen: ButtonComponent;
  @ViewChild('label5') label5: LabelComponent;
  @ViewChild('label13') label13: LabelComponent;
  @ViewChild('card1') card1: CardComponent;
  @ViewChild('textboxMenge') textboxMenge: TextBoxComponent;
  @ViewChild('buttonMengeErfassen') buttonMengeErfassen: ButtonComponent;
  @ViewChild('label14') label14: LabelComponent;
  @ViewChild('datalistErfassung') datalistErfassung: DataListComponent;
  @ViewChild('label2') label2: LabelComponent;
  @ViewChild('buttonErfassungLoeschen') buttonErfassungLoeschen: ButtonComponent;
  @ViewChild('buttonArtikelLadenByArtikelnummer') buttonArtikelLadenByArtikelnummer: ButtonComponent;
  @ViewChild('buttonBerechneArtikelSummeErfasst') buttonBerechneArtikelSummeErfasst: ButtonComponent;
  @ViewChild('buttonNavigateBack') buttonNavigateBack: ButtonComponent;

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
  globalErfassungModus: any;
  globalArtikelID: any;
  globalDeviceID: any;
  dsoArtikel: any;
  strStatusArtikelnummer: any;
  strArtikelnummer: any;
  strMenge: any;
  intSummeErfasst: any;
  dsoErfassung: any;
  dsoLagerort: any;
  onKeyDownSetArtikelnummer: any;
  onKeyDownSetMenge: any;
  onClickErfassungLoeschen: any;
  onClickNavigateBack: any;
  parameters: any;
  strFilterProtokollErfassung: any;
  rstErfassung: any;
  rstErfassungCount: any;
  dsoUpdateErfassen: any;
  dsoUpdateLagerort: any;

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
    this.globalErfassungModus = localStorage.getItem("globalErfassungModus");

    this.globalArtikelID = localStorage.getItem("globalArtikelID");

    this.globalDeviceID = localStorage.getItem("globalDeviceID");

    this.dsoArtikel = null;

    this.strStatusArtikelnummer = 'Unbekannt';

    this.strArtikelnummer = '';

    this.strMenge = '';

    this.intSummeErfasst = 0;

    this.dsoErfassung = {ArtikelID: 0, DeviceID: 0, ErfasstAm: '', ErfasstAnzahl: 0};

    setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)

    this.dbOptimo.getInventurBases(`InventurID eq ${this.parameters.InventurID}`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.dsoLagerort = result.value[0];
    }, (result: any) => {

    });

    this.dbOptimo.getInventurArtikelByArtikelId(null, this.globalArtikelID)
    .subscribe((result: any) => {
      this.dsoArtikel = result;

      this.strArtikelnummer = result.Artikelnummer;

      this.datalistErfassung.load();

      this.buttonBerechneArtikelSummeErfasstClick(result.ArtikelID);

      if (this.dsoArtikel != null && this.globalErfassungModus == 'Einzeln') {
        this.strMenge = '1';
this.buttonMengeErfassenClick(null);
      }
    }, (result: any) => {
      this.datalistErfassung.load();
    });

    this.onKeyDownSetArtikelnummer = (event) => {
  if(this.strStatusArtikelnummer == 'Artikel geladen') {
    this.textboxArtikelnummer.value = '';
    this.strStatusArtikelnummer = 'Unbekannt'
  }

  switch (event.key) {
    case "F12":
    case "Shift":
    case "Tab":
    case "Control":
    case "Alt":
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

  this.strArtikelnummer = this.textboxArtikelnummer.value;
};

    this.onKeyDownSetMenge = (event) => {
	if (this.textboxMenge.value === undefined) {
		this.textboxMenge.value = "";
	}

	switch (event.key) {
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			this.textboxMenge.value = this.textboxMenge.value + event.key;
			break;
	  
		case "Enter":
		case "Unidentified":
			// --------- Enter ---------
            this.buttonMengeErfassenClick(null);
			break;

		case "Backspace":
			if (this.textboxMenge.value.length >= 1) {
				this.textboxMenge.value = this.textboxMenge.value.substr(0, this.textboxMenge.value.length - 1);
			}
			break;

		default:
			break;
	}
};

    this.onClickErfassungLoeschen = (data) => {
    this.buttonErfassungLoeschenClick(data);
};

    this.onClickNavigateBack = () => {
    this.buttonNavigateBackClick(null);
};
  }

  selectbarErfassenModusChange(event: any) {
    this.dsoArtikel = null;

    this.strArtikelnummer = '';

    this.strStatusArtikelnummer = 'unbekannt';

    this.strMenge = '';

    setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)

    localStorage.setItem("globalErfassungModus", event)
  }

  buttonArtikelAuswahlClick(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['erfassen-artikel-auswahl', this.dsoLagerort.InventurID]);
  }

  buttonArtikelEntfernenClick(event: any) {
    this.dsoArtikel = null;

    this.strArtikelnummer = '';

    this.strStatusArtikelnummer = 'unbekannt';

    setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)

    this.datalistErfassung.load();
  }

  buttonMengeErfassenClick(event: any) {
    if (this.strArtikelnummer == '') {
      this.notificationService.notify({ severity: "warn", summary: ``, detail: `Keine Artikelnummer eingegeben!` });
    }

    if (this.strMenge == '') {
      this.notificationService.notify({ severity: "warn", summary: ``, detail: `Keine Menge eingegeben!` });
    }

    if (this.strArtikelnummer != '' && this.strMenge != '') {
      var date = new Date();

this.dsoErfassung.ErfasstAm = new Date(Date.UTC(date.getFullYear(),
                                                date.getMonth(),
                                                date.getDate(),
                                                date.getHours(),
                                                date.getMinutes(),
                                                date.getSeconds(),
                                                date.getMilliseconds() ));
                                         
this.dsoErfassung.ArtikelID = Number(this.globalArtikelID);
this.dsoErfassung.DeviceID = Number(this.globalDeviceID);
this.dsoErfassung.ErfasstAnzahl = Number(this.strMenge);
    }

    if (this.strArtikelnummer != '' && this.strMenge != '') {
          this.dbOptimo.createInventurErfassung(null, this.dsoErfassung)
      .subscribe((result: any) => {
          this.notificationService.notify({ severity: "success", summary: ``, detail: `Menge ${this.strMenge} erfasst` });

      this.strMenge = '';

      this.datalistErfassung.load();

      this.buttonBerechneArtikelSummeErfasstClick(this.dsoErfassung.ArtikelID);

      setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)
      }, (result: any) => {
          this.notificationService.notify({ severity: "error", summary: ``, detail: `Menge konnte nicht erfasst werden!` });
      });
    }
  }

  datalistErfassungLoadData(event: any) {
    if (this.dsoArtikel == null) {
        this.strFilterProtokollErfassung = "InventurID eq " + this.parameters.InventurID;
    }

    if (this.dsoArtikel != null) {
        this.strFilterProtokollErfassung = "InventurID eq " + this.parameters.InventurID + " AND ArtikelID eq " + this.dsoArtikel.ArtikelID;
    }

    this.dbOptimo.getVwInventurErfassungs(`${this.strFilterProtokollErfassung}`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.rstErfassung = result.value;

      this.rstErfassungCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  buttonErfassungLoeschenClick(event: any) {
    if (event.GeloeschtAm == null) {
      this.dialogService.open(MeldungLoeschenComponent, { parameters: {strMeldung: "Soll die Erfassung vom '" + event.ErfasstAmFormatiert + "' für den Artikel '" + event.Artikelnummer + " · " + event.Beschreibung + "' gelöscht werden?"}, title: `Erfassung` })
          .afterClosed().subscribe(result => {
                  if (result == 'Löschen') {
                this.dsoUpdateErfassen = {GeloeschtAm: ''};
        }

        if (result == 'Löschen') {
          var date = new Date();

this.dsoUpdateErfassen.GeloeschtAm = new Date(Date.UTC(date.getFullYear(),
                                                       date.getMonth(),
                                                       date.getDate(),
                                                       date.getHours(),
                                                       date.getMinutes(),
                                                       date.getSeconds(),
                                                       date.getMilliseconds() ));
        }

        if (result == 'Löschen') {
                  this.dbOptimo.updateInventurErfassung(null, event.ErfassungID, this.dsoUpdateErfassen)
          .subscribe((result: any) => {
                  this.notificationService.notify({ severity: "success", summary: ``, detail: `Erfassung gelöscht` })
          .subscribe(() => {

          });

          this.datalistErfassung.load();

          this.buttonBerechneArtikelSummeErfasstClick(event.ArtikelID);
          }, (result: any) => {
                  this.notificationService.notify({ severity: "error", summary: ``, detail: `Erfassung konnte nicht gelöscht werden!` });
          });
        }
      });
    }
  }

  buttonArtikelLadenByArtikelnummerClick(event: any) {
    this.dbOptimo.getInventurArtikels(`Artikelnummer eq '${event}' AND InventurID eq ${this.dsoLagerort.InventurID}`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.dsoArtikel = result.value[0];

      this.buttonBerechneArtikelSummeErfasstClick(this.dsoArtikel.ArtikelID);
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Der Artikel wurde für diesen Lagerort nicht gefunden!` });
    });
  }

  buttonBerechneArtikelSummeErfasstClick(event: any) {
    this.dbOptimo.getVwInventurErfassungSummens(`ArtikelID eq ${event}`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.intSummeErfasst = result.value[0].SummeErfasstFormatiert;
    }, (result: any) => {

    });
  }

  buttonNavigateBackClick(event: any) {
    this.dsoUpdateLagerort = {LagerortStatus: 'Erfassung offen'};

    this.dbOptimo.updateInventurBasis(null, this.parameters.InventurID, this.dsoUpdateLagerort)
    .subscribe((result: any) => {
      if (this.dialogRef) {
        this.dialogRef.close();
      } else {
        this._location.back();
      }
    }, (result: any) => {

    });
  }
}
