import { Component, signal } from '@angular/core';

//interface
import { IProjects } from '../../interface/IProjects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto Angular",
      title: "Projeto Angular",
      width: "100px",
      height: "51px",
      description: "Projeto de desenvolvimento em Angular",
      links:[
        {
          name : 'conheça meu portfolio',
          href: 'link aqui',
        },
      ],
  },
  ]);
}
