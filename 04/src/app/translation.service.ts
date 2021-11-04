import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Locale {
  lang: string;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(public translate: TranslateService) {

    translate.addLangs(['en','bn'])
    translate.setDefaultLang('bn');
     // the lang to use, if the lang isn't available, it will use the current loader to get them

    translate.use(this.getCurrentLang());
   }

   addTranslation(...args: Locale[]){
    const locales = [...args];

    locales.forEach(locale => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);
    }
    )
  }

   getCurrentLang(){
    const browserLang=this.translate.getBrowserLang();
    return browserLang.match(/en|bn/)?browserLang:'bn';
   }
   useLang(languageCode:string){
    this.translate.use(languageCode);
   }
}
