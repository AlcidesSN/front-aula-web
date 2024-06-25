import { UsersService } from './../../../_services/users.service';
import { paciente } from './../../../_models/user';
import { Component, OnInit } from '@angular/core';
import { user } from '../../../_models/user';

@Component({
  selector: 'app-pacientes-listar',
  templateUrl: './pacientes-listar.component.html',
  styleUrl: './pacientes-listar.component.css'
})
export class PacientesListarComponent implements OnInit{
  pacientes:paciente[]|undefined;

  ngOnInit(): void {
    this.getPacientes();
  }
  constructor(private UsersService: UsersService){}

  getPacientes(){
    this.UsersService.getPacientes().subscribe((Response: any)=> {
      this.pacientes = Response;
    });
  }
  async exluir(item:paciente){

    this.pacientes = this.pacientes?.filter((a) => item.id_paciente !== a.id_paciente);
    await this.UsersService.delete(item.id_paciente,'pacientes').subscribe();

   }

}

