import { Equipe } from "./shared/equipe.model";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import 'rxjs/add/operator/toPromise';
@Injectable()
export class EquipesService {
    
    constructor(private http: Http){}

    
    public getEquipe(): Promise<Equipe[]> {
        
        return this.http.get('http://localhost:3000/admins')
            .toPromise()
            .then((resposta: any) => resposta.json())
    }
}