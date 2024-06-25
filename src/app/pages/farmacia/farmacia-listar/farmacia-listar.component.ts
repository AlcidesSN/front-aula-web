import { UsersService } from './../../../_services/users.service';
import { Component, OnInit } from '@angular/core';
import { farmacias } from '../../../_models/user';

@Component({
  selector: 'app-farmacia-listar',
  templateUrl: './farmacia-listar.component.html',
  styleUrl: './farmacia-listar.component.css'
})
export class FarmaciaListarComponent implements OnInit {
  farmacias:farmacias[]|undefined;

  constructor(private UsersService: UsersService){}
  ngOnInit(): void {
    this.getFarmacias();
  }

  getFarmacias(){
    this.UsersService.getFarmacias().subscribe((Response: any)=> {
      this.farmacias= Response;
    });
  }
  exluir(item:farmacias){

    this.farmacias = this.farmacias?.filter((a) => item.id_farmacia !== a.id_farmacia);
    this.UsersService.delete(item.id_farmacia,'farmacias').subscribe();

   }

   editar(item:farmacias){
    //eviar informaçoes via post(no boby) se possivel e editar elas na farmacia-criar
   }

  }
