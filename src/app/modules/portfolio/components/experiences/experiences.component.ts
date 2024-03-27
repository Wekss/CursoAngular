import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';
@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong: 'Suporte T.I',
        p: 'INFOCOMM | Set 2019 - 2020',
      },
      text: 'Em 2019, Iniciei como Suporte de T.I na Infocomm',
    },
    {
      summary:{
        strong: 'Suporte T.I',
        p: 'CREDIOK | Set 2020 - 2022',
      },
      text: 'Em 2020, Iniciei como Suporte de T.I na Crediok',
    },
    {
      summary:{
        strong: 'Suporte de T.I',
        p: 'UCRED | Ago 2024 -Present',
      },
      text: 'Des de agosto de 2024, atuo como suporte de T.I na financeira UCRED',
    },

  ]);
}
