import { Component, signal } from '@angular/core';
// @ts-ignore
import { IKnowledge} from '../../interface/IKnowledge.interface';
@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de Angular',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de Angular',
    }
  ])
}
