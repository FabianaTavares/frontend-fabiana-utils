export enum TipoReqEnum {
	ADMIN = 'ADMIN',
	COMUN = 'COMUM'
}

export const TipoReqEnumMensagem = {
	[TipoReqEnum.ADMIN]: 'Admin',
	[TipoReqEnum.COMUN]: 'Comun'
};

export const TipoRequerimentoEnumId = {
	[TipoReqEnum.ADMIN]: 1,
	[TipoReqEnum.COMUN]: 2
};
