import { AtivoInativoEnum } from '../enum/ativo-inativo.enum';
import { TipoRedirecionamentoEnum } from './../enum/tipo-redirecionamento.enum';
import { RedirecionamentoModel } from './redirecionamento.model';
export const RedirecionamentoPadraoModel = {
  [TipoRedirecionamentoEnum.PESQUISAR]: (redirecionamentoPadraoModel: RedirecionamentoModel): string => {
    switch(redirecionamentoPadraoModel.req.status){
      case AtivoInativoEnum.ATIVO:
        return '/cadastrar';
      case AtivoInativoEnum.INATIVO:
        return '/visualizar';
      default:
        return '/resumo';
    }
  }
}
