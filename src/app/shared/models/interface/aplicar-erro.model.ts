import { AplicarTipoError } from '../enum/aplicacao-tipo-erro.enum';

export interface AplicarErro {
	type: AplicarTipoError;
	msg: string;
}
