import { medico } from '../../../_models/user';
import { UsersService } from './../../../_services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicos-listar',
  templateUrl: './medicos-listar.component.html',
  styleUrl: './medicos-listar.component.css'
})
export class MedicosListarComponent implements OnInit {
medicos:medico[]|undefined;

constructor(private UsersService: UsersService){}
ngOnInit(): void {
  this.getMedicos();
}

getMedicos(){
  this.UsersService.getMedicos().subscribe((Response: any)=> {
    this.medicos= Response;
  });
}
async exluir(item:medico){

  this.medicos = this.medicos?.filter((a) => item.id_medico !== a.id_medico);
  await this.UsersService.delete(item.id_medico,'medicos').subscribe();

 }

}
