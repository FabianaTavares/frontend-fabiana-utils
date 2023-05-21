export enum StatusAnexosEnum {
	RECEBIDO = 'RECEBIDO',
	REPROVADO = 'REPROVADO',
	EM_ANALISE = 'EM_ANALISE',
	PENDENTE = 'PENDENTE',
	CANCELADO = 'CANCELADO',
	APROVADO = 'APROVADO'
}

export const StatusAnexosEnumMensagem = {
	[StatusAnexosEnum.RECEBIDO]: 'Recebido',
	[StatusAnexosEnum.REPROVADO]: 'Reprovado',
	[StatusAnexosEnum.EM_ANALISE]: 'Em Analise',
	[StatusAnexosEnum.PENDENTE]: 'Pendente',
	[StatusAnexosEnum.CANCELADO]: 'Cancelado',
	[StatusAnexosEnum.APROVADO]: 'Aprovado'
};

export const StatusAnexosEnumSigla = {
	[StatusAnexosEnum.RECEBIDO]: 'R',
	[StatusAnexosEnum.REPROVADO]: 'RP',
	[StatusAnexosEnum.EM_ANALISE]: 'EA',
	[StatusAnexosEnum.PENDENTE]: 'P',
	[StatusAnexosEnum.CANCELADO]: 'C',
	[StatusAnexosEnum.APROVADO]: 'A'
};

export const StatusAnexosEnumId = {
	[StatusAnexosEnum.RECEBIDO]: 12,
	[StatusAnexosEnum.REPROVADO]: 13,
	[StatusAnexosEnum.EM_ANALISE]: 14,
	[StatusAnexosEnum.PENDENTE]: 15,
	[StatusAnexosEnum.CANCELADO]: 16,
	[StatusAnexosEnum.APROVADO]: 17
};
