import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularInfoService } from '../../services/angular-info.service';

@Component({
  selector: 'app-angular-facts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-facts.component.html',
  styleUrls: ['./angular-facts.component.css']
})
export class AngularFactsComponent implements OnInit {
  facts: string[] = [
    'Angular is maintained by Google.',
    'Components are the building blocks of Angular apps.',
    'Angular uses TypeScript for development.',
    'Dependency Injection is a core Angular feature.'
  ];

  constructor(private angularInfoService: AngularInfoService) {}

  ngOnInit(): void {
    this.facts = this.angularInfoService.getFacts();
  }
}
