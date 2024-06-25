import { Component, OnInit } from '@angular/core';
import { receitas } from '../../../_models/user';
import { UsersService } from '../../../_services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receita-listar',
  templateUrl: './receita-listar.component.html',
  styleUrl: './receita-listar.component.css'
})
export class ReceitaListarComponent implements OnInit {
  receitas:receitas[]|undefined;

  constructor(private UsersService: UsersService,router:Router){}
  ngOnInit(): void {
    this.getReceitas();
  }
  getReceitas(){
    this.UsersService.getReceitas().subscribe((Response: any)=> {
      this.receitas= Response;
    });
  }
  async exluir(receita:receitas){

   this.receitas = this.receitas?.filter((a) => receita.id_receita !== a.id_receita);
   await this.UsersService.delete(receita.id_receita,'receitas').subscribe();

  }

}
