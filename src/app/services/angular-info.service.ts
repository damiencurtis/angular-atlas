import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularInfoService {

  private angularFacts = [
    'Angular is maintained by Google.',
    'It uses TypeScript as its main language.',
    'Components are the core building blocks of Angular apps.',
    'Services handle logic and data shared across components.',
    'Dependency Injection is a key Angular feature.'
  ];

  constructor() { }

  getFacts(): string[] {
    return this.angularFacts;
  }
}
