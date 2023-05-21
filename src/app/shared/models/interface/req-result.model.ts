import { AtivoInativoEnum } from '../enum/ativo-inativo.enum';

export interface ReqResultModel {
	id: number;
	status: AtivoInativoEnum; // criar enum de status de historico é uma possibilidade
	tipo: string;
	data: string;
}
