export enum MsgSystemEnum {
	E003 = 'Erro ao atribuir validação dinamica, verifique o console.',
	A006 = 'Declare o atributo "id" com o mesmo valor do formControlName:"{VALUE}"',
	A008 = 'Declare o atributo "name" com o valor para apresentação ao usuário',
	A010 = 'ERRO_NÃO_TRATADO "{value}"',
	A013 = 'Verifique se o(s) campos de {VALUE} estão preenchidos corretamente. É necessário a inclusão de, pelo menos, um(a) {VALUE}',
	A016 = 'Só é permitido imagens no formato JPG, JPEG ou PNG, com limite de 2MB.',
	SERVICO_INDISPONIVEL = 'Serviço Indisponível no momento.',
	UNAUTHORIZED = 'Usuário não autorizado.',
	ERROR_PARSER = 'Erro ao realizar analise de mensagem recebida do serviço para a aplicação.',
	SERVICO_NAO_EXISTE = 'O serviço solicitado não existe. \nVerifique o console.',
	ERRO_INTERNO = 'Erro inesperado ao consumir serviço, \nverifique o console.',
	ERRO_DESCONHECIDO = 'Erro desconhecido, verifique o console.',

	MSG_INTERVALO_HORA_REQUIRED = 'Verifique se o(s) campos do intervalo {VALUE} estão preenchidos corretamente.',
	MSG_INTERVALO_DATA_REQUIRED = 'Verifique se o(s) campos de {VALUE} estão preenchidos corretamente. É necessário a inclusão de, pelo menos, um(a) {VALUE}.',
	MSG_INATERVALO_HORA_INVALIDO = 'Hora inicial precisa ser menor que a final',
	MSG_INATERVALO_DATA_INVALIDO = 'A Data inicial precisa ser menor que a final',
	MSG_DATA_INICIAL_MENOR_ATUAL = 'A Data inicial não pode ser menor que a Data Atual',
	MSG_TAMANHO_CARACTERES_CPF_CNPJ = 'Número CPF/CNPJ inválido.',
	INDEFERIDO = 'indeferido'
}
