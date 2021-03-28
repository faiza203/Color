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
import { DashboardV1Page }          from './pages/dashboard/v1/dashboard-v1';
import { DashboardV2Page }          from './pages/dashboard/v2/dashboard-v2';
import { DashboardV3Page }          from './pages/dashboard/v3/dashboard-v3';
import { EmailInboxPage }           from './pages/email/inbox/email-inbox';
import { EmailComposePage }         from './pages/email/compose/email-compose';
import { EmailDetailPage }          from './pages/email/detail/email-detail';

// Widgets
import { WidgetPage }               from './pages/widget/widget';

// Page Options
import { PageBlank }                from './pages/page-options/page-blank/page-blank';
import { PageFooter }               from './pages/page-options/page-with-footer/page-with-footer';
import { PageWithoutSidebar }       from './pages/page-options/page-without-sidebar/page-without-sidebar';
import { PageSidebarRight }         from './pages/page-options/page-with-right-sidebar/page-with-right-sidebar';
import { PageSidebarMinified }      from './pages/page-options/page-with-minified-sidebar/page-with-minified-sidebar';
import { PageFullHeight }           from './pages/page-options/page-full-height/page-full-height';
import { PageTwoSidebar }           from './pages/page-options/page-with-two-sidebar/page-with-two-sidebar';
import { PageSidebarWide }          from './pages/page-options/page-with-wide-sidebar/page-with-wide-sidebar';
import { PageSidebarLight }         from './pages/page-options/page-with-light-sidebar/page-with-light-sidebar';
import { PageSidebarTransparent }   from './pages/page-options/page-with-transparent-sidebar/page-with-transparent-sidebar';
import { PageTopMenu }              from './pages/page-options/page-with-top-menu/page-with-top-menu';
import { PageMixedMenu }            from './pages/page-options/page-with-mixed-menu/page-with-mixed-menu';
import { PageMegaMenu }             from './pages/page-options/page-with-mega-menu/page-with-mega-menu';
import { PageBoxedLayout }          from './pages/page-options/page-with-boxed-layout/page-with-boxed-layout';
import { BoxedLayoutMixedMenu }     from './pages/page-options/boxed-layout-with-mixed-menu/boxed-layout-with-mixed-menu';
import { PageSidebarSearch }         from './pages/page-options/page-with-search-sidebar/page-with-search-sidebar';

// UI Element
import { UIGeneralPage }            from './pages/ui-elements/general/general';
import { UITypographyPage }         from './pages/ui-elements/typography/typography';
import { UITabsAccordionsPage }     from './pages/ui-elements/tabs-accordions/tabs-accordions';
import { UIModalNotificationPage }  from './pages/ui-elements/modal-notification/modal-notification';
import { UIWidgetBoxesPage }        from './pages/ui-elements/widget-boxes/widget-boxes';
import { UIMediaObjectPage }        from './pages/ui-elements/media-object/media-object';
import { UIButtonsPage }            from './pages/ui-elements/buttons/buttons';
import { UIIconsPage }              from './pages/ui-elements/icons/icons';
import { UISimpleLineIconsPage }    from './pages/ui-elements/simple-line-icons/simple-line-icons';
import { UIIoniconsPage }           from './pages/ui-elements/ionicons/ionicons';
import { UILanguageIconPage }       from './pages/ui-elements/language-icon/language-icon';
import { UISocialButtonsPage }      from './pages/ui-elements/social-buttons/social-buttons';

// Bootstrap 4
import { Bootstrap4Page }           from './pages/bootstrap-4/bootstrap-4';

// Calendar
import { CalendarPage }             from './pages/calendar/calendar';

// Map
import { MapPage }                  from './pages/map/map';

// Gallery
import { GalleryV1Page }            from './pages/gallery/gallery-v1/gallery-v1';
import { GalleryV2Page }            from './pages/gallery/gallery-v2/gallery-v2';

// Extra Pages
import { ExtraTimelinePage }        from './pages/extra/extra-timeline/extra-timeline';
import { ExtraComingSoonPage }      from './pages/extra/extra-coming-soon/extra-coming-soon';
import { ExtraSearchResultsPage }   from './pages/extra/extra-search-results/extra-search-results';
import { ExtraInvoicePage }         from './pages/extra/extra-invoice/extra-invoice';
import { ExtraErrorPage }           from './pages/extra/extra-error/extra-error';
import { ExtraProfilePage }         from './pages/extra/extra-profile/extra-profile';
import { ExtraScrumBoardPage }      from './pages/extra/extra-scrum-board/extra-scrum-board';
import { ExtraCookieAcceptanceBannerPage } from './pages/extra/extra-cookie-acceptance-banner/extra-cookie-acceptance-banner';

// User Login / Register
import { LoginV1Page }              from './pages/login/login-v1/login-v1';
import { LoginV2Page }              from './pages/login/login-v2/login-v2';
import { LoginV3Page }              from './pages/login/login-v3/login-v3';
import { RegisterV3Page }           from './pages/register/register-v3/register-v3';

// Helper
import { HelperCssPage }            from './pages/helper/helper-css/helper-css';

// Chart
import { ChartNgxPage }             from './pages/chart/chart-ngx/chart-ngx';
import { ChartD3Page }              from './pages/chart/chart-d3/chart-d3';

// Table
import { TableBasicPage }           from './pages/tables/table-basic/table-basic';
import { TableDataPage }            from './pages/tables/table-data/table-data';

// Form
import { FormElementsPage }         from './pages/form/form-elements/form-elements';
import { FormWizardsPage }          from './pages/form/form-wizards/form-wizards';

// Pos
import { PosCounterCheckoutPage }   from './pages/pos/counter-checkout/counter-checkout';
import { PosKitchenOrderPage }      from './pages/pos/kitchen-order/kitchen-order';
import { PosCustomerOrderPage }     from './pages/pos/customer-order/customer-order';
import { PosMenuStockPage }         from './pages/pos/menu-stock/menu-stock';
import { PosTableBookingPage }      from './pages/pos/table-booking/table-booking';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin,
  bootstrapPlugin
]);

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

    DashboardV1Page,
    DashboardV2Page,
    DashboardV3Page,
    EmailInboxPage,
    EmailComposePage,
    EmailDetailPage,
    WidgetPage,
    PageBlank,
    PageFooter,
    PageWithoutSidebar,
    PageSidebarRight,
    PageSidebarMinified,
    PageFullHeight,
    PageTwoSidebar,
    PageSidebarWide,
    PageSidebarLight,
    PageSidebarTransparent,
    PageSidebarSearch,
    PageTopMenu,
    PageMixedMenu,
    PageBoxedLayout,
    PageMegaMenu,
    BoxedLayoutMixedMenu,
    UIGeneralPage,
    UITypographyPage,
    UITabsAccordionsPage,
    UIModalNotificationPage,
    UIWidgetBoxesPage,
    UIMediaObjectPage,
    UIButtonsPage,
    UIIconsPage,
    UISimpleLineIconsPage,
    UIIoniconsPage,
    UILanguageIconPage,
    UISocialButtonsPage,
    Bootstrap4Page,
    CalendarPage,
    FormElementsPage,
    FormWizardsPage,
    MapPage,
    GalleryV1Page,
    GalleryV2Page,
    ExtraTimelinePage,
    ExtraComingSoonPage,
    ExtraSearchResultsPage,
    ExtraInvoicePage,
    ExtraErrorPage,
    ExtraProfilePage,
    ExtraScrumBoardPage,
    ExtraCookieAcceptanceBannerPage,
    LoginV1Page,
    LoginV2Page,
    LoginV3Page,
    RegisterV3Page,
    HelperCssPage,
    ChartNgxPage,
    ChartD3Page,
    TableBasicPage,
    TableDataPage,
    PosCounterCheckoutPage,
    PosKitchenOrderPage,
    PosCustomerOrderPage,
    PosTableBookingPage,
    PosMenuStockPage
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
