import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/model/libro';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-dettaglio-libro',
  templateUrl: './dettaglio-libro.component.html',
  styleUrls: ['./dettaglio-libro.component.css']
})
export class DettaglioLibroComponent {
  id:number=0;
  libro?:Libro;
  constructor(private routeService:ActivatedRoute, private libriService:LibriService,private router2:Router){
    //accede al pramentro che si chiama 'id'
    this.id=+this.routeService.snapshot.params['id'];//+ converte in numero
    if(!isNaN(this.id)) libriService.getOne(this.id).subscribe(r=>this.libro=r);
  }
  back(){
      this.router2.navigate([''])
  }
}
