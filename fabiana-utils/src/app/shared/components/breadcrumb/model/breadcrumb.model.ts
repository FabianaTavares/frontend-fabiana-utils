import { Params } from "@angular/router";

export interface BreadcrumbModel {
  titulo: string;
  link?: string;
  params?: Params;
}
