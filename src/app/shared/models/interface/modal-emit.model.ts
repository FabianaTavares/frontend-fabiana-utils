import { BsModalRef } from 'ngx-bootstrap/modal';

export interface ModalEmit<T> {
	ref: BsModalRef;
	value: T;
}
