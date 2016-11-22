import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Novelty } from "./novelty";


@Injectable()
export class NoveltyService {
noveltiesChanged = new EventEmitter<Novelty[]>();
  
  private novelties: Novelty[] = [
  new Novelty('Матч Зоря – Зірка не відбудеться', 'Товариський матч, що був запланований на неділю, 13 листопада, між луганською «Зорею» та кропивницькою Зіркою не відбудеться', 'http://www.fczirka.com.ua/media/bearleague/bl145726784643.png'),
  new Novelty('Віктору Квасову – 75!', 'Сьогодні, 7 листопада, свій 75-й День Народження святкує легендарний гравець «Зірки» кінця 60-х – початку 70-х років минулого століття Віктор Квасов', 'http://fczirka.com.ua/images/Photo/History/2016/kwasow.jpg'), 
  new Novelty('До вашої уваги 44-й номер газети «Спортревю New»', 'Тільки тут ви зможете прочитати про незаслужені поразки кропивницької «Зірки» та ФК «Олександрія» в чергових матчах Ліги Парі-Матч', 'http://www.fczirka.com.ua/images/Photo/Other/sport-rew/S_revue_44_1.jpg'), 
  new Novelty('Вітаємо з Днем народження! ', 'Керівництво та вболівальники футбольного клубу "Зірка" вітають із Днем народження півзахисника команди Ігоря Калініна.', 'http://fczirka.com.ua/images/thumbnails/images/Photo/Persons/Players/Kalinin1-180x240.jpg'), 
  new Novelty('Втрачені три очки ', 'У поєдинку між «Зіркою» та «Олімпіком» фортуна посміхнулася донеччанам, які вдруге в сезоні здобули перемогу в Кропивницькому.', 'http://fczirka.com.ua/images/Photo/Games/2016-17/2016-11-05/2016-11-05-0.jpg') 
  ];

  constructor(private http: Http) {}

  getNovelties() {
    return this.novelties;
  }

  getNovelty(id: number) {
    return this.novelties[id];
  }

  deleteNovelty(novelty: Novelty) {
    this.novelties.splice(this.novelties.indexOf(novelty), 1);
  }

  addNovelty(novelty: Novelty) {
    this.novelties.push(novelty);
  }

  editNovelty(oldNovelty: Novelty, newNovelty: Novelty) {
    this.novelties[this.novelties.indexOf(oldNovelty)] = newNovelty;
  }

  storeData() {
    const body = JSON.stringify(this.novelties);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://fclub-app.firebaseio.com//novelties.json', body, {headers: headers});
  }
  fetchData() {
    return this.http.get('https://fclub-app.firebaseio.com//novelties.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Novelty[]) => {
          this.novelties = data;
          this.noveltiesChanged.emit(this.novelties);
        }
      );
  }
}

