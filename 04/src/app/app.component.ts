import { Component } from '@angular/core';
import { locale as englishLang } from './i18n/en';
import { locale as banglaLang } from './i18n/bn';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Internationalization';
  currentLang = 'bn';
  constructor(private translationService: TranslationService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translationService.addTranslation(englishLang, banglaLang)

  }
  ngOnInit() {
    this.currentLang = this.translationService.getCurrentLang();
  }
  onLangChange(currentLang: string) {
    this.translationService.useLang(currentLang);
  }
  languages = [
    { name: 'Bangla', lang: 'bn' },
    { name: 'English', lang: 'en' }
  ]
}
