/*
  This file is automatically generated. Any changes will be overwritten.
  Modify erfassen.component.ts instead.
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

export class ErfassenGenerated implements AfterViewInit, OnInit, OnDestroy {
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
  @ViewChild('buttonArtikelLaden') buttonArtikelLaden: ButtonComponent;
  @ViewChild('buttonBerechneArtikelSummeErfasst') buttonBerechneArtikelSummeErfasst: ButtonComponent;
  @ViewChild('buttonErfassungLoeschen') buttonErfassungLoeschen: ButtonComponent;
  @ViewChild('buttonNavigateBack') buttonNavigateBack: ButtonComponent;
  @ViewChild('buttonPlaySoundArtikelGefunden') buttonPlaySoundArtikelGefunden: ButtonComponent;
  @ViewChild('buttonPlaySoundArtikelNichtGefunden') buttonPlaySoundArtikelNichtGefunden: ButtonComponent;
  @ViewChild('buttonPlaySoundMengeErfasst') buttonPlaySoundMengeErfasst: ButtonComponent;
  @ViewChild('buttonPlaySoundMengeUngueltig') buttonPlaySoundMengeUngueltig: ButtonComponent;

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
  strArtikelnummerStatus: any;
  strArtikelnummer: any;
  strMenge: any;
  intSummeErfasst: any;
  dsoArtikelLaden: any;
  dsoErfassung: any;
  dsoDevice: any;
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

    this.strArtikelnummerStatus = 'NichtGeladen';

    this.strArtikelnummer = '';

    this.strMenge = '';

    this.intSummeErfasst = 0;

    this.dsoArtikelLaden = {InventurID: 0, ArtikelID: 0, Artikelnummer: ''};

    this.dsoErfassung = {ArtikelID: 0, InventurID: 0, DeviceID: 0, ErfasstAm: '', ErfasstAnzahl: 0, GescannteDaten: ''};

    this.dbOptimo.getInventurDeviceByDeviceId(null, this.globalDeviceID)
    .subscribe((result: any) => {
      this.dsoDevice = result;
    }, (result: any) => {

    });

    this.dbOptimo.getInventurBasisByInventurId(null, this.parameters.InventurID)
    .subscribe((result: any) => {
      this.dsoLagerort = result;

      // Wird zur Zeit nicht verwendet
// this.dsoArtikelLaden.InventurID = this.parameters.InventurID;
// Es werden alle Artikel pro Lagerort angezeigt!!!
this.dsoArtikelLaden.InventurID = 9999;
this.dsoArtikelLaden.ArtikelID = this.globalArtikelID;
this.dsoArtikelLaden.Artikelnummer = '';

      this.buttonArtikelLadenClick(this.dsoArtikelLaden);
    }, (result: any) => {

    });

    this.onKeyDownSetArtikelnummer = (event) => {
	if(this.strArtikelnummerStatus == 'Geladen') {
		this.textboxArtikelnummer.value = ''
		this.strArtikelnummerStatus = 'NichtGeladen'
	}

	if(this.dsoDevice.DeviceTyp == 'Barcodescanner') {
		switch (event.key) {
			case "Enter":
			case "Unidentified":
			case "F12":
			case "Shift":
			case "Tab":
			case "Control":
			case "Alt":
				break;

			case "Backspace":
				if(this.textboxArtikelnummer.value.length >= 1) {
					this.textboxArtikelnummer.value = this.textboxArtikelnummer.value.substr(0,this.textboxArtikelnummer.value.length - 1)
				}
				break;

			default:
				if(this.textboxArtikelnummer.value.length < 30) {
					this.textboxArtikelnummer.value = this.textboxArtikelnummer.value + event.key
				}
				break;
		}
	}
	
	switch (event.key) {
		case "Enter":
		case "Unidentified":
			// --------- Enter ---------
			if(this.textboxArtikelnummer.value.length >= 1) {
                this.dsoErfassung.GescannteDaten = this.textboxArtikelnummer.value
				var tempArtikelnummer = this.textboxArtikelnummer.value
				var pos = tempArtikelnummer.indexOf('-F')

				if (pos > 0) {
					tempArtikelnummer = tempArtikelnummer.substr(0, pos)
					this.textboxArtikelnummer.value = tempArtikelnummer
				}

				//this.dsoArtikelLaden.InventurID = this.parameters.InventurID
				this.dsoArtikelLaden.InventurID = 9999;
				this.dsoArtikelLaden.ArtikelID = 0
				this.dsoArtikelLaden.Artikelnummer = tempArtikelnummer

				this.buttonArtikelLadenClick(this.dsoArtikelLaden)
			}
			break;
		}
};

    this.onKeyDownSetMenge = (event) => {
	if (this.textboxMenge.value === undefined) {
		this.textboxMenge.value = ""
	}

	if(this.dsoDevice.DeviceTyp == 'Barcodescanner') {
		switch (event.key) {
			case "Enter":
			case "Unidentified":
			case "F12":
			case "Shift":
			case "Tab":
			case "Control":
			case "Alt":
				break;
		
			case "Backspace":
				if (this.textboxMenge.value.length >= 1) {
					this.textboxMenge.value = this.textboxMenge.value.substr(0, this.textboxMenge.value.length - 1)
				}
				break;

			default:
				if(this.textboxMenge.value.length < 8) {
					this.textboxMenge.value = this.textboxMenge.value + event.key
				}
				break;
		}
	}

	switch (event.key) {
		case "Enter":
		case "Unidentified":
			// --------- Enter ---------
			this.buttonMengeErfassenClick(null)
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

    this.strArtikelnummerStatus = 'NichtGeladen';

    this.strMenge = '';

    setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)

    localStorage.setItem("globalErfassungModus", event)

    this.datalistErfassung.load();
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

    this.strArtikelnummerStatus = 'NichtGeladen';

    this.strMenge = '';

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

    if (this.strMenge == '') {
      this.buttonPlaySoundMengeUngueltigClick(null)
setTimeout(() => { document.getElementById('textboxMenge').focus(); }, 500)
    }

    if (isNaN(Number(this.strMenge)) == true) {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `${this.strMenge} · Menge ungültig!` });
    }

    if (isNaN(Number(this.strMenge)) == true) {
      this.buttonPlaySoundMengeUngueltigClick(null)
setTimeout(() => { 
    document.getElementById('textboxMenge').focus(); 
    this.strMenge = ''; 
}, 500)
    }

    if (this.strArtikelnummer != '' && this.strMenge != '' && isNaN(Number(this.strMenge)) == false) {
      var date = new Date();

this.dsoErfassung.ErfasstAm = new Date(Date.UTC(date.getFullYear(),
                                                date.getMonth(),
                                                date.getDate(),
                                                date.getHours(),
                                                date.getMinutes(),
                                                date.getSeconds(),
                                                date.getMilliseconds() ));
                                         
this.dsoErfassung.ArtikelID = Number(this.globalArtikelID);
this.dsoErfassung.InventurID = Number(this.parameters.InventurID);

console.log("this.parameters.InventurID", Number(this.parameters.InventurID));

this.dsoErfassung.DeviceID = Number(this.globalDeviceID);
this.dsoErfassung.ErfasstAnzahl = Number(this.strMenge);

console.log("this.dsoErfassung.GescannteDaten", this.dsoErfassung.GescannteDaten)

if(this.dsoErfassung.GescannteDaten == '') {
  this.dsoErfassung.GescannteDaten = this.strArtikelnummer;
}

console.log("this.dsoErfassung", this.dsoErfassung)
    }

    if (this.strArtikelnummer != '' && this.strMenge != '' && isNaN(Number(this.strMenge)) == false) {
          this.dbOptimo.createInventurErfassung(null, this.dsoErfassung)
      .subscribe((result: any) => {
          this.notificationService.notify({ severity: "success", summary: ``, detail: `Menge ${this.strMenge} erfasst` })
      .subscribe(() => {

      });

      this.buttonPlaySoundMengeErfasstClick(null)

      this.strMenge = '';

      this.datalistErfassung.load();

      this.buttonBerechneArtikelSummeErfasstClick(this.dsoErfassung.ArtikelID);

      setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)
      }, (result: any) => {
          this.notificationService.notify({ severity: "error", summary: ``, detail: `Menge konnte nicht erfasst werden!` });

      this.buttonPlaySoundMengeUngueltigClick(null)
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

  buttonArtikelLadenClick(event: any) {
    if (event.ArtikelID == 0 && event.Artikelnummer == '') {
      this.dsoArtikel = null
this.strArtikelnummer = ''
this.strArtikelnummerStatus = 'Geladen'
this.globalArtikelID = 0

this.buttonBerechneArtikelSummeErfasstClick(null)

this.datalistErfassung.load()

setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)
    }

    if (event.ArtikelID != 0) {
          this.dbOptimo.getInventurArtikelByArtikelId(null, event.ArtikelID)
      .subscribe((result: any) => {
          this.dsoArtikel = result
this.strArtikelnummer = this.dsoArtikel.Artikelnummer
this.strArtikelnummerStatus = 'Geladen'
this.globalArtikelID = this.dsoArtikel.ArtikelID

if(this.globalErfassungModus == 'Einzeln') {
    this.strMenge = '1'
    this.buttonMengeErfassenClick(null)
} else {
    this.buttonBerechneArtikelSummeErfasstClick(this.dsoArtikel.ArtikelID)
    this.datalistErfassung.load()
    setTimeout(() => { document.getElementById('textboxMenge').focus(); }, 500)
    this.buttonPlaySoundArtikelGefundenClick(null)
}
      }, (result: any) => {
    
      });
    }

    if (event.Artikelnummer != '') {
          this.dbOptimo.getInventurArtikels(`InventurID eq ${event.InventurID} AND Artikelnummer eq '${event.Artikelnummer}'`, null, null, null, null, null, null, null)
      .subscribe((result: any) => {
          if (result.value.length != 0) {
        this.dsoArtikel = result.value[0]
this.strArtikelnummer = this.dsoArtikel.Artikelnummer
this.strArtikelnummerStatus = 'Geladen'
this.globalArtikelID = this.dsoArtikel.ArtikelID

if(this.globalErfassungModus == 'Einzeln') {
    this.strMenge = '1'
    this.buttonMengeErfassenClick(null)
} else {
    this.buttonBerechneArtikelSummeErfasstClick(this.dsoArtikel.ArtikelID)
    this.datalistErfassung.load()
    setTimeout(() => { document.getElementById('textboxMenge').focus(); }, 500)
    this.buttonPlaySoundArtikelGefundenClick(null)
}
      }

      if (result.value.length == 0) {
        this.dsoArtikel = null
this.strArtikelnummerStatus = 'Geladen'
this.globalArtikelID = 0

this.notificationService.notify({ severity: "error", summary: ``, detail: `Artikel nicht gefunden!` })

this.buttonBerechneArtikelSummeErfasstClick(null)
this.datalistErfassung.load()
setTimeout(() => { document.getElementById('textboxArtikelnummer').focus(); }, 500)
this.buttonPlaySoundArtikelNichtGefundenClick(null)
      }
      }, (result: any) => {
    
      });
    }
  }

  buttonBerechneArtikelSummeErfasstClick(event: any) {
    if (event != null) {
          this.dbOptimo.getVwInventurErfassungSummens(`ArtikelID eq ${event}`, null, null, null, null, null, null, null)
      .subscribe((result: any) => {
          if (result.value.length != 0) {
            this.intSummeErfasst = result.value[0].SummeErfasstFormatiert;
      }

      if (result.value.length == 0) {
            this.intSummeErfasst = 0;
      }
      }, (result: any) => {
    
      });
    }

    if (event == null) {
        this.intSummeErfasst = 0;
    }
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

  buttonPlaySoundArtikelGefundenClick(event: any) {
    let audio = new Audio();

audio.src = "assets/images/SoundArtikelGefunden.mp3";
audio.load();
audio.play();
  }

  buttonPlaySoundArtikelNichtGefundenClick(event: any) {
    let audio = new Audio();

audio.src = "assets/images/SoundArtikelNichtGefunden.WAV";
audio.load();
audio.play();
  }

  buttonPlaySoundMengeErfasstClick(event: any) {
    let audio = new Audio();

audio.src = "assets/images/SoundMengeErfasst.mp3";
audio.load();
audio.play();
  }

  buttonPlaySoundMengeUngueltigClick(event: any) {
    let audio = new Audio();

audio.src = "assets/images/SoundMengeUngueltig.WAV";
audio.load();
audio.play();
  }
}
