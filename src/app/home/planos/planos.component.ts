import { Component, OnInit } from '@angular/core';

import { PlanosService} from '../planos/planos.service';
import { Planos } from './shared/planos.model';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css'],
  providers: [PlanosService]
})
export class PlanosComponent implements OnInit {

  public planos: Planos[];

  constructor(private planosService: PlanosService) { }

  ngOnInit() {
    
    this.planosService.getPlanos()
      .then((planos: Planos[]) => {
        this.planos = planos
      })
      .catch((param: any) => {
        console.log(param);
      })
  }

}
