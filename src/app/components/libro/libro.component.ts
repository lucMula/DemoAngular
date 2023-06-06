import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/model/libro';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  //libriService: LibriService;
  @Input()
  libro?: Libro;

  constructor(/*private libriService:LibriService*/private router:Router){
    //this.libriService=new LibriService();
    //this.libro=this.libriService.getRandom()
  }
  modificaPreferito(){
    if(this.libro)this.libro.preferito=!this.libro.preferito;
  }
  dettaglio(){
    this.router.navigate(['libro',this.libro?.id])
  }
}

