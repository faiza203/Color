import React from 'react';
import { Redirect } from 'react-router';

import DashboardV1 from './../pages/dashboard/dashboard-v1.js';
import DashboardV2 from './../pages/dashboard/dashboard-v2.js';
import DashboardV3 from './../pages/dashboard/dashboard-v3.js';
import EmailInbox from './../pages/email/email-inbox.js';
import EmailCompose from './../pages/email/email-compose.js';
import EmailDetail from './../pages/email/email-detail.js';
import Widgets from './../pages/widget/widget.js';
import UIGeneral from './../pages/ui/ui-general.js';
import UITypography from './../pages/ui/ui-typography.js';
import UITabsAccordion from './../pages/ui/ui-tabs-accordion.js';
import UIModalNotification from './../pages/ui/ui-modal-notification.js';
import UIWidgetBoxes from './../pages/ui/ui-widget-boxes.js';
import UIMediaObject from './../pages/ui/ui-media-object.js';
import UIButtons from './../pages/ui/ui-buttons.js';
import UIIcons from './../pages/ui/ui-icons.js';
import UISimpleLineIcons from './../pages/ui/ui-simple-line-icons.js';
import UIIonicons from './../pages/ui/ui-ionicons.js';
import UILanguageBarIcon from './../pages/ui/ui-language-bar-icon.js';
import UISocialButtons from './../pages/ui/ui-social-buttons.js';
import Bootstrap4 from './../pages/bootstrap/bootstrap-4.js';
import FormElements from './../pages/form/form-elements.js';
import FormPlugins from './../pages/form/form-plugins.js';
import FormWizards from './../pages/form/form-wizards.js';
import TableBasic from './../pages/table/table-basic.js';
import TableData from './../pages/table/table-data.js';
import PosCustomerOrder from './../pages/pos/customer-order.js';
import PosKitchenOrder from './../pages/pos/kitchen-order.js';
import PosCounterCheckout from './../pages/pos/counter-checkout.js';
import PosTableBooking from './../pages/pos/table-booking.js';
import PosMenuStock from './../pages/pos/menu-stock.js';
import ChartJS from './../pages/chart/chart-js.js';
import ChartD3 from './../pages/chart/chart-d3.js';
import ChartApex from './../pages/chart/chart-apex.js';
import Calendar from './../pages/calendar/calendar.js';
import Map from './../pages/map/map.js';
import Gallery from './../pages/gallery/gallery.js';
import PageBlank from './../pages/option/page-blank.js';
import PageWithFooter from './../pages/option/page-with-footer.js';
import PageWithoutSidebar from './../pages/option/page-without-sidebar.js';
import PageWithRightSidebar from './../pages/option/page-with-right-sidebar.js';
import PageWithMinifiedSidebar from './../pages/option/page-with-minified-sidebar.js';
import PageWithTwoSidebar from './../pages/option/page-with-two-sidebar.js';
import PageFullHeight from './../pages/option/page-full-height.js';
import PageWithWideSidebar from './../pages/option/page-with-wide-sidebar.js';
import PageWithLightSidebar from './../pages/option/page-with-light-sidebar.js';
import PageWithMegaMenu from './../pages/option/page-with-mega-menu.js';
import PageWithTopMenu from './../pages/option/page-with-top-menu.js';
import PageWithBoxedLayout from './../pages/option/page-with-boxed-layout.js';
import PageWithMixedMenu from './../pages/option/page-with-mixed-menu.js';
import PageBoxedLayoutWithMixedMenu from './../pages/option/page-boxed-layout-with-mixed-menu.js';
import PageWithTransparentSidebar from './../pages/option/page-with-transparent-sidebar.js';
import PageWithSearchSidebar from './../pages/option/page-with-search-sidebar.js';
import ExtraTimeline from './../pages/extra/extra-timeline.js';
import ExtraComingSoon from './../pages/extra/extra-coming-soon.js';
import ExtraSearch from './../pages/extra/extra-search.js';
import ExtraInvoice from './../pages/extra/extra-invoice.js';
import ExtraError from './../pages/extra/extra-error.js';
import ExtraProfile from './../pages/extra/extra-profile.js';
import ExtraScrumBoard from './../pages/extra/extra-scrum-board.js';
import ExtraCookieAcceptanceBanner from './../pages/extra/extra-cookie-acceptance-banner.js';
import LoginV1 from './../pages/user/login-v1.js';
import LoginV2 from './../pages/user/login-v2.js';
import LoginV3 from './../pages/user/login-v3.js';
import RegisterV3 from './../pages/user/register-v3.js';
import HelperCSS from './../pages/helper/helper-css.js';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/dashboard/v2'/>
  },
  {
    path: '/dashboard/v1',
    exact: true,
    title: 'Dashboard V1',
    component: () => <DashboardV1 />
  },
  {
    path: '/dashboard/v2',
    title: 'Dashboard V2',
    component: () => <DashboardV2 />
  },
  {
    path: '/dashboard/v3',
    title: 'Dashboard V3',
    component: () => <DashboardV3 />
  },
  {
    path: '/email/inbox',
    title: 'Email Inbox',
    component: () => <EmailInbox />,
  },
  {
    path: '/email/compose',
    title: 'Email Compose',
    component: () => <EmailCompose />,
  },
  {
    path: '/email/detail',
    title: 'Email Detail',
    component: () => <EmailDetail />,
  },
  {
    path: '/widgets',
    title: 'Widgets',
    component: () => <Widgets />,
  },
  {
    path: '/ui/general',
    title: 'UI General',
    component: () => <UIGeneral />,
  },
  {
    path: '/ui/typography',
    title: 'UI Typography',
    component: () => <UITypography />,
  },
  {
    path: '/ui/tabs-accordion',
    title: 'UI Tabs Accordion',
    component: () => <UITabsAccordion />,
  },
  {
    path: '/ui/modal-notification',
    title: 'UI Modal & Notification',
    component: () => <UIModalNotification />,
  },
  {
    path: '/ui/widget-boxes',
    title: 'UI Widget Boxes',
    component: () => <UIWidgetBoxes />,
  },
  {
    path: '/ui/media-object',
    title: 'UI Media Object',
    component: () => <UIMediaObject />,
  },
  {
    path: '/ui/buttons',
    title: 'UI Buttons',
    component: () => <UIButtons />,
  },
  {
    path: '/ui/icons',
    title: 'UI Icons',
    component: () => <UIIcons />,
  },
  {
    path: '/ui/simple-line-icons',
    title: 'UI Simple Line Icons',
    component: () => <UISimpleLineIcons />,
  },
  {
    path: '/ui/ionicons',
    title: 'UI Ionicons',
    component: () => <UIIonicons />,
  },
  {
    path: '/ui/language-bar-icon',
    title: 'UI General',
    component: () => <UILanguageBarIcon />,
  },
  {
    path: '/ui/social-buttons',
    title: 'UI Social Buttons',
    component: () => <UISocialButtons />,
  },
  {
    path: '/bootstrap-4',
    title: 'Bootstrap 4',
    component: () => <Bootstrap4 />,
  },
  {
    path: '/form/elements',
    title: 'Form Elements',
    component: () => <FormElements />,
  },
  {
    path: '/form/plugins',
    title: 'Form Plugins',
    component: () => <FormPlugins />,
  },
  {
    path: '/form/wizards',
    title: 'Form Wizards',
    component: () => <FormWizards />,
  },
  {
    path: '/table/basic',
    title: 'Basic Tables',
    component: () => <TableBasic />,
  },
  {
    path: '/table/data',
    title: 'Data Tables',
    component: () => <TableData />,
  },
  {
    path: '/pos/customer-order',
    title: 'POS - Customer Order',
    component: () => <PosCustomerOrder />,
  },
  {
    path: '/pos/kitchen-order',
    title: 'POS - Kitchen Order',
    component: () => <PosKitchenOrder />,
  },
  {
    path: '/pos/counter-checkout',
    title: 'POS - Counter Checkout',
    component: () => <PosCounterCheckout />,
  },
  {
    path: '/pos/table-booking',
    title: 'POS - Table Booking',
    component: () => <PosTableBooking />,
  },
  {
    path: '/pos/menu-stock',
    title: 'POS - Menu Stock',
    component: () => <PosMenuStock />,
  },
  {
    path: '/chart/js',
    title: 'Chart JS',
    component: () => <ChartJS />,
  },
  {
    path: '/chart/d3',
    title: 'd3 Chart',
    component: () => <ChartD3 />,
  },
  {
    path: '/chart/apex',
    title: 'Apex Chart',
    component: () => <ChartApex />,
  },
  {
    path: '/calendar',
    title: 'Calendar',
    component: () => <Calendar />,
  },
  {
    path: '/map',
    title: 'Map',
    component: () => <Map />,
  },
  {
    path: '/gallery',
    title: 'Gallery',
    component: () => <Gallery />,
  },
  {
    path: '/page-option/blank',
    title: 'Blank Page',
    component: () => <PageBlank />,
  },
  {
    path: '/page-option/with-footer',
    title: 'Page with Footer',
    component: () => <PageWithFooter />,
  },
  {
    path: '/page-option/without-sidebar',
    title: 'Page without Sidebar',
    component: () => <PageWithoutSidebar />,
  },
  {
    path: '/page-option/with-right-sidebar',
    title: 'Page with Right Sidebar',
    component: () => <PageWithRightSidebar />,
  },
  {
    path: '/page-option/with-minified-sidebar',
    title: 'Page with Minified Sidebar',
    component: () => <PageWithMinifiedSidebar />,
  },
  {
    path: '/page-option/with-two-sidebar',
    title: 'PageWithTwoSidebar',
    component: () => <PageWithTwoSidebar />,
  },
  {
    path: '/page-option/full-height',
    title: 'Full Height Content',
    component: () => <PageFullHeight />,
  },
  {
    path: '/page-option/with-wide-sidebar',
    title: 'Page with Wide Sidebar',
    component: () => <PageWithWideSidebar />,
  },
  {
    path: '/page-option/with-light-sidebar',
    title: 'Page with Light Sidebar',
    component: () => <PageWithLightSidebar />,
  },
  {
    path: '/page-option/with-mega-menu',
    title: 'Page with Mega Menu',
    component: () => <PageWithMegaMenu />,
  },
  {
    path: '/page-option/with-top-menu',
    title: 'Page with Top Menu',
    component: () => <PageWithTopMenu />,
  },
  {
    path: '/page-option/with-boxed-layout',
    title: 'Page with Boxed Layout',
    component: () => <PageWithBoxedLayout />,
  },
  {
    path: '/page-option/with-mixed-menu',
    title: 'Page with Mixed Menu',
    component: () => <PageWithMixedMenu />,
  },
  {
    path: '/page-option/boxed-layout-with-mixed-menu',
    title: 'Boxed Layout with Mixed Menu',
    component: () => <PageBoxedLayoutWithMixedMenu />,
  },
  {
    path: '/page-option/with-transparent-sidebar',
    title: 'Page with Transparent Sidebar',
    component: () => <PageWithTransparentSidebar />,
  },
  {
    path: '/page-option/with-search-sidebar',
    title: 'Page with Search Sidebar',
    component: () => <PageWithSearchSidebar />,
  },
  {
    path: '/extra/timeline',
    title: 'Extra Timeline',
    component: () => <ExtraTimeline />,
  },
  {
    path: '/extra/coming-soon',
    title: 'Extra Coming Soon',
    component: () => <ExtraComingSoon />,
  },
  {
    path: '/extra/search',
    title: 'Extra Search Results',
    component: () => <ExtraSearch />,
  },
  {
    path: '/extra/invoice',
    title: 'Extra Invoice',
    component: () => <ExtraInvoice />,
  },
  {
    path: '/extra/error',
    title: 'Extra Error',
    component: () => <ExtraError />,
  },
  {
    path: '/extra/profile',
    title: 'Extra Profile',
    component: () => <ExtraProfile />,
  },
  {
    path: '/extra/scrum-board',
    title: 'Extra Scrum Board',
    component: () => <ExtraScrumBoard />,
  },
  {
    path: '/extra/cookie-acceptance-banner',
    title: 'Extra Cookie Acceptance Banner',
    component: () => <ExtraCookieAcceptanceBanner />,
  },
  {
    path: '/user/login-v1',
    title: 'Login',
    component: () => <LoginV1 />,
  },
  {
    path: '/user/login-v2',
    title: 'Login v2',
    component: () => <LoginV2 />,
  },
  {
    path: '/user/login-v3',
    title: 'Login v3',
    component: () => <LoginV3 />,
  },
  {
    path: '/user/register-v3',
    title: 'Register v3',
    component: () => <RegisterV3 />,
  },
  {
    path: '/helper/css',
    title: 'Predefined CSS Classes',
    component: () => <HelperCSS />,
  }
];


export default routes;