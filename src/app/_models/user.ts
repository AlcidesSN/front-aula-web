export interface user {
  nome: String,
  idade: Number
}
export interface medico{

  id_medico:Number,
  nome: String,
  crm:String,
  senha: String,
  assinatura:String,
}
export interface paciente{

  id_paciente:Number,
  name: String,
  cpf:String,
  birth: Date,
  planoDeSaude:String,
}
export interface farmacias{

  id_farmacia:Number,
  nome: String,
  cnpj:String,
  senha: String,
  local:String,
}

export interface medicamentos{

  id_medicamento:Number,
  nome: String,
  dosagem:Number,
  quantidade: Number,
  viaAdiministracao:String,
  observacao:String,
}
export interface receitas{
  id_receita:Number,
  paciente:paciente,
  medico:medico,
  medicamentos:medicamentos[],
  farmacia:farmacias,
  data:Date,
}
