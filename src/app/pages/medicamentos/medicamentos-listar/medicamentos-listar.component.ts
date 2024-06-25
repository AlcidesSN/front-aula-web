import { UsersService } from '../../../_services/users.service';
import { medicamentos, medico } from './../../../_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicamentos-listar',
  templateUrl: './medicamentos-listar.component.html',
  styleUrl: './medicamentos-listar.component.css'
})
export class MedicamentosListarComponent implements OnInit {
medicamentos:medicamentos[]|undefined;

constructor(private UsersService: UsersService){}
ngOnInit(): void {
  this.getmedicamentos();
}

getmedicamentos(){
  this.UsersService.getMedicamentos().subscribe((Response: any)=> {
    this.medicamentos= Response;
  });
}
async exluir(item:medicamentos){

  this.medicamentos = this. medicamentos?.filter(
    (a) => item.id_medicamento !== a.id_medicamento
    );
  await this.UsersService.delete(item.id_medicamento,'medicamentos').subscribe();

 }
}
