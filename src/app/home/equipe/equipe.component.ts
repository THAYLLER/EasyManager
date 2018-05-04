import { Component, OnInit } from '@angular/core';

import { EquipesService} from '../equipe/equipe.service';
import { Equipe } from './shared/equipe.model';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css'],
  providers: [EquipesService]
})
export class EquipeComponent implements OnInit {

  public equipe: Equipe[];

  constructor(private equipesService: EquipesService) { }

  ngOnInit() {

    this.equipesService.getEquipe()
      .then(( equipes: Equipe[]) => {
        this.equipe = equipes;
        console.log(this.equipe);
      })
  }

}
