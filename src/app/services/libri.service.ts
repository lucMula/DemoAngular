import { Injectable } from "@angular/core"
import { Libro } from "../model/libro"
@Injectable()
export class LibriService {
    private libri: Libro[] = [
        new Libro(1, 'I promessi sposi', 'Alessandro Manzoni', 20, "promessisposi.png"),
        new Libro(2, 'La divina commedia', 'Dante Alighieri', 12, "divinacommedia.png")
    ]
    getAll(): Libro[] {
        return this.libri
    }
    getRandom(): Libro {
        return this.libri[0];
    }
    add(l: Libro) {
        this.libri.push(l);
    }
    find(stringaRicerca: string): Libro[] {
        return this.libri.filter(libro => {
            const nomeLibro = libro.titolo.toLowerCase();
            const autoreLibro = libro.autore.toLowerCase();
            const ricerca = stringaRicerca.toLowerCase();
            return nomeLibro.includes(ricerca) || autoreLibro.includes(ricerca);
        });

    }

    /*findId(id1:number): Libro | undefined{
        for(let i =0;i<this.libri.length;i++){
            if(id1==this.libri[i].id){
                return this.libri[i]

            }
        }
        return undefined
    }*/
    getOne(id: number): Libro | undefined {
        return this.libri.find(l => l.id == id)
    }
}