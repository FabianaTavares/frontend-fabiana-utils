import { BreadcrumbObserver } from './services/breadcrumb.observer';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbModel } from './model/breadcrumb.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: Array<BreadcrumbModel> = new Array<BreadcrumbModel>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbObs: BreadcrumbObserver
  ) { }

  ngOnInit(): void {
    this.cadastrarEventos();
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.listarRotas();
  }

  cadastrarEventos() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(() => {
        this.listarRotas();
      });

    this.breadcrumbObs.$listarRotas.subscribe(() => {
      this.listarRotas();
    });
  }

  private listarRotas() {
    const root: ActivatedRoute = this.activatedRoute.root;
    this.breadcrumbs = this.getBreadcrumbs(root);
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbModel[] = []): BreadcrumbModel[] {
    const ROUTE_DATA_BREADCRUMB = 'titulo';
    const ROUTE_LIST_DATA_BREADCRUMB = 'breadcrumb';
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB) && !child.snapshot.data.hasOwnProperty(ROUTE_LIST_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      const routeURL: string = child.snapshot.url.map((segment: UrlSegment) => segment.path).join('/');

      url += `/${routeURL}`;

      if (child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        const breadcrumb: BreadcrumbModel = {
          titulo: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
          params: child.snapshot.params,
          link: url
        };
        if (this.canAddBread(breadcrumbs, breadcrumb)) {
          breadcrumbs.push(breadcrumb);
        }
      }

      if (child.snapshot.data.hasOwnProperty(ROUTE_LIST_DATA_BREADCRUMB)) {
        const listaBreads = child.snapshot.data[ROUTE_LIST_DATA_BREADCRUMB] as [];
        for (let index = 0; index < listaBreads.length; index++) {
          const element = listaBreads[index] as { titulo: string, link: string };
          const breadcrumb: BreadcrumbModel = {
            titulo: element.titulo,
            params: child.snapshot.params,
            link: element.link
          };
          if (this.canAddBread(breadcrumbs, breadcrumb)) {
            breadcrumbs.push(breadcrumb);
          }
        }
      }

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

  private canAddBread(breadcrumbs: BreadcrumbModel[], breadcrumb: BreadcrumbModel) {
    if (breadcrumb && breadcrumbs) {
      return breadcrumbs.find(x => x.titulo === breadcrumb.titulo) == undefined;
    }
    return false;
  }

}
