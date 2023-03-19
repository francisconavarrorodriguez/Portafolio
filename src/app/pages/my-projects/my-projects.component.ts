import { Component } from '@angular/core';
import { IProject } from 'src/app/models/project.interface';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {

  public projects: IProject[] = [
    {
      title: "BMI Calculator",
      description: "Calculadora de metabolismo basal usando Angular + Bootstrap",
      img: "../../../assets/project_imgs/project_calculator.png",
      link: 'https://ibmcalculator-ef02b.web.app/home'
    },
    {
      title: "Spotify Clone",
      description: "Pagina clon de Spotify usando Angular",
      img: "../../../assets/project_imgs/project_spotify.png",
      link: 'https://spotifyclone-aff6c.web.app/'
    },
    {
      title: "Clima",
      description: "App de clima por localización consumiendo una API",
      img: "../../../assets/project_imgs/project_clima.png",
      link: 'https://clima-7b0e9.web.app/'
    },
    {
      title: "Preguntas y Respuestas",
      description: "App de preguntas y respuestas",
      img: "../../../assets/project_imgs/project_preguntasRespuestas.png",
      link: 'https://preguntasrespuestas-bf0bb.web.app/'
    },
    {
      title: "Tarjetas de credito",
      description: "App de gestion de tarjetas de credito con Angular + Firebase",
      img: "../../../assets/project_imgs/project_tarjeta.png",
      link: 'https://tarjetacredito-bed9c.web.app/'
    }
  ]
}
