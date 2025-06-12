export type TipoPessoa = 'PSICOLOGO' | 'PACIENTE';

export interface Pessoa {
  id: number;
  status: string;
  nomeCompleto: string;
  dataNascimento: Date;
  endereco: string;
  bairro: string;
  CEP: string;
  cidade: string;
  UF: string;
  email: string;
  celular: string;
  CPF: string;
  dataCadastro: Date;
  senha: string;
  tipoPessoa: TipoPessoa;
}

export interface Psicologo extends Pessoa {
  CRP: string;
  especialidades: number[];
  linhaRaciocinio: string;
  formacao: string;
  instituicao: string;
  anoConclusao: number;
  biografia: string;
  valorOfertado: number;
}

export interface Paciente extends Pessoa {}
