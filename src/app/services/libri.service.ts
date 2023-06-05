import { Injectable } from "@angular/core"
import { Libro } from "../model/libro"
@Injectable()
export class LibriService{
    private libri: Libro[]=[
        new Libro('I promessi sposi','Alessandro Manzoni',20,"promessisposi.png"),
        new Libro('La divina commedia','Dante Alighieri', 12,"divinacommedia.png")
    ]
    getAll():Libro[]{
        return this.libri
    }
    getRandom(): Libro{
        return this.libri[0];
    }
    add(l:Libro){
        this.libri.push(l);
    }
    find(stringaRicerca: string): Libro[] {
        if(stringaRicerca=='') return this.getAll();
        return this.libri.filter(l=>l.titolo.includes(stringaRicerca)||l.autore.includes(stringaRicerca))
      }
}