import { ReqResultModel } from './req-result.model';
import { UserAuthCredentialsModel } from './user-auth-credential.model';

export interface RedirecionamentoModel {
	req: ReqResultModel;
	userLogin: UserAuthCredentialsModel;
}
