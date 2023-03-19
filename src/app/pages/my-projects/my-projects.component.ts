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
      description: "App para calcular indice de metabolismo basal, utilizando Angular y Bootstrap",
      img: "../../../assets/project_imgs/project_calculator.png",
      link: 'https://ibmcalculator-ef02b.web.app/home'
    },
    {
      title: "Spotify Clone",
      description: "Web clon de Spotify usando Angular, ademas de unit test con Jasmine",
      img: "../../../assets/project_imgs/project_spotify.png",
      link: 'https://spotifyclone-aff6c.web.app/'
    },
    {
      title: "Clima",
      description: "App de clima por localización seleccionada, utilizando Angular, RxJS y consumiendo una API publica",
      img: "../../../assets/project_imgs/project_clima.png",
      link: 'https://clima-7b0e9.web.app/'
    },
    {
      title: "Quizz",
      description: "App de preguntas y respuestas, utlizando Angular, RxJS, Bootstrap",
      img: "../../../assets/project_imgs/project_quizz.png",
      link: 'https://preguntasrespuestas-bf0bb.web.app/'
    },
    {
      title: "Tarjetas de credito",
      description: "App de gestion y almacenamiento de tarjetas de credito en base de datos, utilizando Angular, Bootstrap y Firebase",
      img: "../../../assets/project_imgs/project_tarjeta.png",
      link: 'https://tarjetacredito-bed9c.web.app/'
    }
  ]
}
