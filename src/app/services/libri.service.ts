import { Injectable } from "@angular/core"
import { Libro } from "../model/libro"
@Injectable()
export class LibriService{
    private libri: Libro[]=[
        new Libro('I promessi sposi','Alessandro Manzoni',20,"promessisposi.png"),
        new Libro('La divina commedia','Dante Alighieri', 12,"divinacommedia.png")
    ]
    public librilower: Libro[]=this.libri;
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
        for(let i = 0; i<(this.librilower).length;i++){
            this.librilower[i].titolo=(this.librilower[i].titolo).toLowerCase();
            this.librilower[i].autore=(this.librilower[i].autore).toLowerCase();
        }
        if(stringaRicerca=='') return this.getAll();
        return this.librilower.filter(l=>l.titolo.includes(stringaRicerca.toLowerCase( ))||l.autore.includes(stringaRicerca.toLowerCase( )))
      }
}