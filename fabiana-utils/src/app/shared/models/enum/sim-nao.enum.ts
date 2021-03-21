import { TipoBootstrap } from './tipos-bootstrap.enum';
export enum SimNaoEnum {
  S = 'S',
  N = 'N'
}

export const SimNaoEnumMensagem = {
  [SimNaoEnum.S]: 'Sim',
  [SimNaoEnum.N]: 'Não',
}

export const SimNaoEnumMensagemBadge = {
  [SimNaoEnum.S]: TipoBootstrap.SUCCESS,
  [SimNaoEnum.N]: TipoBootstrap.DANGER,
}
