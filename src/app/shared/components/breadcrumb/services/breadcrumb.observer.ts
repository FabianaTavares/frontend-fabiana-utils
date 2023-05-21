import { Subject } from 'rxjs';

export class BreadcrumbObserver {
  private listarRotasEvt: Subject<string> = new Subject<string>();

  $listarRotas = this.listarRotasEvt.asObservable();

  listarRotas() {
    this.listarRotasEvt.next(null);
  }
}
