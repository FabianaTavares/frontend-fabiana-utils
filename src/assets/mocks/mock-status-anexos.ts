import { StatusAnexos } from 'src/app/shared/models/interface/status-anexos.model';

export const STATUS_ANEXOS: StatusAnexos[] = [
	{ id: 12, codigo: 'RECEBIDO', descricao: 'Recebido' },
	{ id: 13, codigo: 'REPROVADO', descricao: 'Reprovado' },
	{ id: 14, codigo: 'EM ANALISE', descricao: 'Em Analise' },
	{ id: 15, codigo: 'PENDENTE', descricao: 'Pendente' },
	{ id: 16, codigo: 'CANCELADO', descricao: 'Cancelado' },
	{ id: 17, codigo: 'APROVADO', descricao: 'Aprovado' }
];
