import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import * as $ from 'jquery';

declare global {
  interface ArrayConstrutor {
    create: <T>(callback: (index: number) => T, count?: number) =>
    Array<T>;
  }
}
/* Array.create=(callback, count =1) => {
  const lista = [];
  if(callback){
    for (let index =0; index<count; index++){
      lista.push(callback(index));
    }
  }
  return lista;
} */

export function removeDuplicatedArray<T>(array: Array<T>, key: string): Array<T> {
  const novoArray = new Set();
  return array.filter(obj => !novoArray.has(obj[key]) && novoArray.add(obj[key]));
}

export function ativarMensagemErros(form: FormGroup): void {
  Object.keys(form.controls).forEach(ctrl => {
    form.get(ctrl).updateValueAndValidity();
  })
}

export function divideNumberTel(numero: string): [string, string] {
  if(numero !== undefined && numero !== null){
    const ddd = numero.substring(0, 2);
    const numeroRestante = numero.substring(2);
    return [ddd, numeroRestante];
  }
  return [null, null];
}

export function  httpParamsByObjeto(objeto: Object): {
  [param: string]: string | string[]
}{
  const httpParams: {
    [param: string]: string | string[];
  } = {};
  if(objeto != null){
    for (const key in objeto){
      if(objeto.hasOwnProperty(key)) {
        const parametro = objeto[key];
        if(parametro != null){
          if(String(parametro).trim()){
            httpParams[key] = String(objeto[key]);
          }
        }
      }
    }
  }
  return httpParams;
}

export function scrollToId(id: string, offset = 0){
  const elemento = document.getElementById(id);
  if(elemento){
    $([document.documentElement, document.body]).animate({
      scrollTop: $(elemento).offset().top + offset
    });
  }
}

export function getObjectByByteArrayResponse(error: HttpErrorResponse){
  const dataView = new DataView(error.error);
  const decoder = new TextDecoder('utf8');
  return JSON.parse(decoder.decode(dataView));
}

export function isEmpty(obj) {
  for (var key in obj){
    if(obj.hasOwnProperty(key))
    return false;
  }
  return true;
}

String.prototype.replaceAll = function (search, replacement) {
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
}

declare global {
  interface String {
    replaceAll: any;
  }
}
