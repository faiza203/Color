// Core Module
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule }               from '@angular/platform-browser/animations';
import { BrowserModule, Title }                  from '@angular/platform-browser';
import { AppRoutingModule }                      from './app-routing.module';
import { NgbModule }                             from '@ng-bootstrap/ng-bootstrap';
import { NgModule }                              from '@angular/core';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import * as global                               from './config/globals';

// Main Component
import { AppComponent }                    from './app.component';
import { HeaderComponent }                 from './components/header/header.component';
import { SidebarComponent }                from './components/sidebar/sidebar.component';
import { SidebarRightComponent }           from './components/sidebar-right/sidebar-right.component';
import { TopMenuComponent }                from './components/top-menu/top-menu.component';
import { FooterComponent }                 from './components/footer/footer.component';
import { PanelComponent }                  from './components/panel/panel.component';
import { FloatSubMenuComponent }           from './components/float-sub-menu/float-sub-menu.component';


// Component Module
import { AgmCoreModule }                   from '@agm/core';
import { FullCalendarModule }              from '@fullcalendar/angular';
import dayGridPlugin                       from '@fullcalendar/daygrid';
import timeGridPlugin                      from '@fullcalendar/timegrid';
import interactionPlugin                   from "@fullcalendar/interaction";
import listPlugin                          from '@fullcalendar/list';
import bootstrapPlugin                     from '@fullcalendar/bootstrap';
import { LoadingBarRouterModule }          from '@ngx-loading-bar/router';
import { NgxChartsModule }                 from '@swimlane/ngx-charts';
import { TrendModule }                     from 'ngx-trend';
import { HighlightJsModule }               from 'ngx-highlight-js';
import { CountdownModule }                 from 'ngx-countdown';
import { NgChartjsModule }                 from 'ng-chartjs';
import { TagInputModule }                  from 'ngx-chips';
import { SweetAlert2Module }               from '@sweetalert2/ngx-sweetalert2';
import { NgxDatatableModule }              from '@swimlane/ngx-datatable';
import { NvD3Module }                      from 'ng2-nvd3';
import { NgxDaterangepickerMd }            from 'ngx-daterangepicker-material';
import 'd3';
import 'nvd3';
import { CalendarModule, DateAdapter }     from 'angular-calendar';
import { adapterFactory }                  from 'angular-calendar/date-adapters/date-fns';
import { PerfectScrollbarModule }          from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG }        from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


// Pages
import { HomePage }          from './pages/home/home';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    TopMenuComponent,
    FooterComponent,
    PanelComponent,
    FloatSubMenuComponent,

    HomePage
  ],
  imports: [
    AppRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyC5gJ5x8Yw7qP_DqvNq3IdZi2WUSiDjskk' }),
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CountdownModule,
    NgChartjsModule,
    FullCalendarModule,
    FormsModule,
    HighlightJsModule,
    LoadingBarRouterModule,
    NgbModule,
    NvD3Module,
    NgxChartsModule,
    NgxDatatableModule,
    NgxDaterangepickerMd.forRoot(),
    PerfectScrollbarModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    TagInputModule,
    TrendModule
  ],
  providers: [ Title, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        var title = 'Color Admin | ' + this.route.snapshot.firstChild.data['title'];
        this.titleService.setTitle(title);
      }
    });
  }
}
