import { Injectable, signal } from '@angular/core';
import { Trabalho } from '../models/trabalho.model';


@Injectable({
  providedIn: 'root'
})
export class TrabalhosService {
  //variables
  trabalhos = signal<Trabalho[]>([
    {id: 1, nome: 'Portfolio', descricao: 'Esse mesmo portfólio que busca mostrar um pouco mais sobre mim e sobre minhas qualidades além de introduzir um pouco minhas capacidades com o tailwind', imagem: 'assets/portfolio-01.PNG', paginaWeb: 'home', paginaDocumentacao: 'https://github.com/marcosxrp/portfolio', tags: ['angular', 'html', 'typescript', 'tailwind']},
    {id: 2, nome: 'Silver Dream', descricao: 'Um MarketPlace, para servir de catálogo para uma empresa fictícia, com várias funcionalidades disponíveis, desde a opçao de adicionar itens ao carrinho, modificar a quantidade de itens, e uma página de administrador com um pequeno CRUD para adicionar, remover e atualizar os itens disponíveis!', imagem: 'assets/silver-dream-01.PNG', paginaWeb: 'https://silver-dream.netlify.app', paginaDocumentacao: 'https://github.com/marcosxrp/silver-dream', tags: ['angular', 'css', 'typescript', 'html']},
    {id: 3, nome: 'Weather App', descricao: '(Uso de API)Uma página do tempo com funções de verificar o tempo na localidade atual do usuário, buscar por outras localidades e verificar o tempo no momento atual, por horário e para os próximos dias!', imagem: 'assets/weather-app-01.PNG', paginaWeb: 'https://ky-weather.netlify.app', paginaDocumentacao: 'https://github.com/marcosxrp/weather-app', tags: ['angular', 'typescript', 'css', 'html']},
    {id: 4, nome: 'Fokhus Tech', descricao: 'Empresa pessoal voltada para a criação de Websites para pequenas empresas!', imagem: 'assets/fokhus-tech.png', paginaWeb: 'https://fokhus.netlify.app', paginaDocumentacao: 'https://github.com/marcosxrp/fokhus-A18', tags: ['angular', 'typescript', 'tailwind', 'css', 'html']}
  ]);

  constructor() { }
}
