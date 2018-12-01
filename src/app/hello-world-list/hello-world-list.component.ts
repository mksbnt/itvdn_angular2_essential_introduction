import { Component } from '@angular/core';
import { Phrase } from "./phrase";

const PHRASES: Phrase[] = [
  { value: 'Salam Dünya', language: 'Azerbaijani' },
  { value: 'Përshendetje Botë', language: 'Albanian' },
  { value: 'ሰላም ልዑል', language: 'Amharic' },
  { value: 'مرحبا بالعالم', language: 'Arabian' },
  { value: 'Բարեւ աշխարհ', language: 'Armenian' }
]

@Component({
  selector: 'app-hello-world-list',
  templateUrl: './hello-world-list.component.html',
  styleUrls: ['./hello-world-list.component.scss']
})

export class HelloWorldListComponent {

  PhraseList: Phrase[] = PHRASES;
  selectedPhraseLanguage: string;

  onSelect(selected: Phrase) {
    this.selectedPhraseLanguage = selected.language;
  }
}