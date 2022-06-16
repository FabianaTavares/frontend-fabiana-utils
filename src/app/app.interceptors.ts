/**
 * @description
 * https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8
 * https://www.digitalocean.com/community/tutorials/how-to-use-angular-interceptors-to-manage-http-requests-and-error-handling
 * https://www.codegrepper.com/code-examples/javascript/interceptor+in+angular+9
 *
 */

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

import { MsgSystemEnum } from './shared/models/enum/msg-system.enum';
import HttpStatusCode from './shared/models/enum/http-status-code.enum';
import { AuthService } from './core/auth/auth.service';


@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private toastrService: ToastrService,
    private loadingService: NgxSpinnerService
  ) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestToken = null;
    if(this.auth.isAutenticated()){
      requestToken = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.auth.getUserLogin().token}`)
      });
    }
    return next.handle(request != null ? requestToken : request).pipe(tap(
      (event: HttpEvent<any>) =>
        {
          if(event instanceof HttpResponse) {
            // do stuff with response if you want
            //this.loadingService.hide()
          }else{
            //exibir mensagem
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if(err.status <= 0){
              this.toastrService.error(MsgSystemEnum.SERVICO_INDISPONIVEL);
            }else if(err.error !== undefined){
              switch(err.status){
                case HttpStatusCode.UNAUTHORIZED:
                  this.toastrService.error(MsgSystemEnum.UNAUTHORIZED);
                  this.auth.logout();
                  break;
                case HttpStatusCode.BAD_REQUEST:
                  this.toastrService.error(MsgSystemEnum.ERROR_PARSER);
                  break;
                case HttpStatusCode.NOT_FOUND:
                case HttpStatusCode.METHOD_NOT_ALLOWED:
                  this.toastrService.error(MsgSystemEnum.SERVICO_NAO_EXISTE);
                  break;
                case HttpStatusCode.INTERNAL_SERVER_ERROR:
                  this.toastrService.error(MsgSystemEnum.ERRO_INTERNO);
                  break;
                default:
                  this.toastrService.error(MsgSystemEnum.ERRO_DESCONHECIDO);
                  break;

              }
            }
          }
          this.loadingService.hide();
        }
      )
    );
  }

}
