import { Planos } from "./shared/planos.model";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import 'rxjs/add/operator/toPromise';
@Injectable()
export class PlanosService {
    
    constructor(private http: Http){}

    
    public getPlanos(): Promise<Planos[]> {
        
        return this.http.get('http://localhost:3000/planos')
            .toPromise()
            .then((resposta: any) => resposta.json())
    }
}