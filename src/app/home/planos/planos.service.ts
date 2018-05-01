import { Planos } from "./shared/planos.model";

export class PlanosService {
    
    public planos: Planos[] = [
		{
			"id":1,
			"titulo": "AUTÔNOMO",
			"descricao": "Para controle financeiro de quem presta serviços sozinho",
			"valor": 18.00,
			"qtdUsuarios": 2,
			"usaBoleto": false,
			"qtdBoleto": 0,
			"usaNfProd": false,
			"qtdNfProd": 0,
			"usaNfServ": false,
			"qtdNfServ": 0,
			"maisUsado": false,
			"suporte": true
		},
		{
			"id":2,
			"titulo": "MICRO EMPRESA",
			"descricao": "Notas fiscais e boletos, para sua empresa",
			"valor": 46.34,
			"qtdUsuarios": 4,
			"usaBoleto": true,
			"qtdBoleto": 100,
			"usaNfProd": true,
			"qtdNfProd": 60,
			"usaNfServ": true,
			"qtdNfServ": 60,
			"maisUsado": false,
			"suporte": true
		},
		{
			"id":3,
			"titulo": "PEQUENA EMPRESA",
			"descricao": "Melhor opção para auxiliar a sua empresa",
			"valor": 99.66,
			"qtdUsuarios": 25,
			"usaBoleto": true,
			"qtdBoleto": 3500,
			"usaNfProd": true,
			"qtdNfProd": 2300,
			"usaNfServ": true,
			"qtdNfServ": 2300,
			"maisUsado": true,
			"suporte": true
		},
		{
			"id":1,
			"titulo": "MEDIA E GRANDE EMPRESA",
			"descricao": "Para empresas mais engajadas no mercado.",
			"valor": 199.32,
			"qtdUsuarios": 9999,
			"usaBoleto": true,
			"qtdBoleto": 9999,
			"usaNfProd": true,
			"qtdNfProd": 9999,
			"usaNfServ": true,
			"qtdNfServ": 9999,
			"maisUsado": false,
			"suporte": true
		}
	];
    public getPlanos(): Array<Planos> {
        
        return this.planos
    }
}