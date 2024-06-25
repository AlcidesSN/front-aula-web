import { farmacias } from './../../../_models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../_services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-farmacia-criar',
  templateUrl: './farmacia-criar.component.html',
  styleUrl: './farmacia-criar.component.css'
})
export class FarmaciaCriarComponent implements OnInit {

  userForm:FormGroup = new FormGroup({});
  farmacias:farmacias|undefined;

  //
  id:Number = 0;
  nome:String = '';
  cnpj:String = '';
  endereco:String = '';
  //
  constructor(
    private fb: FormBuilder,
    private UsersService:UsersService,
    private router:Router,
    private route:ActivatedRoute ){}

  ngOnInit(): void {
    this.initializeForm();
    this.getParams();
  }
  async subumitForm(){
   await this.UsersService.postFarmacias(this.userForm.value).subscribe();
   this.router.navigate(['/farmacias/listar']);
  }
  attForm(){
    this.UsersService.putFarmacias(this.userForm.value,this.id).subscribe();
    this.router.navigate(['/farmacias/listar']);
  }
  getParams():void {
    this.route.queryParams.subscribe((params)=>{
      if(params['id'] != null){
        this.id = params['id'];
        this.nome = params['nome'];
        this.cnpj = params['cnpj'];
        this.endereco = params['endereco'];
      }

    });

  }

  initializeForm(){
    this.userForm = this.fb.group({
      id:[0,[Validators.required,Validators.max(999)]],
      nome:['',[Validators.required,Validators.maxLength(250)]],
      cnpj:['',[Validators.required,Validators.maxLength(250)]],
      senha:['',[Validators.required,Validators.maxLength(250)]],
      local:['',[Validators.required,Validators.maxLength(250)]],

    });
  }
}
