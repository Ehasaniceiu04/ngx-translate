import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import{ locale as englishLang} from '../assets/i18n/en';
import{ locale as banglaLang} from '../assets/i18n/bn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Internationalization';
  currentLang='bn';
  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setTranslation(englishLang.lang,englishLang.data,true);
    translate.setTranslation(banglaLang.lang,banglaLang.data,true);
    translate.addLangs(['en','bn'])
    translate.setDefaultLang('bn');
    const browserLang=translate.getBrowserLang();
    this.currentLang=browserLang.match(/en|bn/)?browserLang:'bn';
     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.currentLang);
}
onLangChange(currentLang:string){
  this.translate.use(currentLang);
}
languages=[
  {name:'Bangla',lang:'bn'},
  {name:'English',lang:'en'}
]
}
