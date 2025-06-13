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
  especialidade: number[]; // array de especialidade
  linhaRaciocinio: string;
  formacao: string;
  instituicao: string;
  anoConclusao: number;
  biografia: string;
  valorFixo: number;
}

export interface Paciente extends Pessoa {}


export interface Especialidade {
  id: number;
  descricao: string;
}

export interface Consulta {
  id: number;
  dataHora: Date;
  status: string;
  linkSessao?: string;
  obsClinicas?: string;
  idPaciente: number;
  idPsicologo: number;
  idTipoConsulta: number;
  valorRegistrado: number;
}

export interface TipoConsulta {
  id: number;
  descricao: string;
}

export interface PsicologoEspecialidade {
  idPsicologo: number;
  idEspecialidade: number;
}
