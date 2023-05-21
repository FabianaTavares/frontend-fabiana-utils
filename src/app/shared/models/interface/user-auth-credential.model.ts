import { TokenJwtModel } from './token-jwt.model';

export interface UserAuthCredentialsModel {
	id?: string;
	user?: string;
	password?: string;
	hasPass?: boolean;
	token?: string;
	refreshToken?: string;
	tokenModel?: TokenJwtModel;
}
