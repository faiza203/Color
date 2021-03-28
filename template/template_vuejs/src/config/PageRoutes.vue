<script>
import DashboardV1 from '../pages/Dashboard-v1.vue'
import DashboardV2 from '../pages/Dashboard-v2.vue'
import DashboardV3 from '../pages/Dashboard-v3.vue'
import EmailInbox from '../pages/Email-inbox.vue'
import EmailCompose from '../pages/Email-compose.vue'
import EmailDetail from '../pages/Email-detail.vue'
import Widgets from '../pages/Widgets.vue'
import UIGeneral from '../pages/UI-general.vue'
import UITypography from '../pages/UI-typography.vue'
import UITabsAccordion from '../pages/UI-tabs-accordion.vue'
import UIModalNotification from '../pages/UI-modal-notification.vue'
import UIWidgetBoxes from '../pages/UI-widget-boxes.vue'
import UIMediaObject from '../pages/UI-media-object.vue'
import UIButtons from '../pages/UI-buttons.vue'
import UIIcons from '../pages/UI-icons.vue'
import UISimpleLineIcons from '../pages/UI-simple-line-icons.vue'
import UIIonicons from '../pages/UI-ionicons.vue'
import UILanguageBarIcon from '../pages/UI-language-bar-icon.vue'
import UISocialButtons from '../pages/UI-social-buttons.vue'
import Bootstrap4 from '../pages/Bootstrap-4.vue'
import FormElements from '../pages/Form-elements.vue'
import FormPlugins from '../pages/Form-plugins.vue'
import FormWizards from '../pages/Form-wizards.vue'
import PosCounterCheckout from '../pages/Pos-counter-checkout.vue'
import PosCustomerOrder from '../pages/Pos-customer-order.vue'
import PosKitchenOrder from '../pages/Pos-kitchen-order.vue'
import PosMenuStock from '../pages/Pos-menu-stock.vue'
import PosTableBooking from '../pages/Pos-table-booking.vue'
import TableBasic from '../pages/Table-basic.vue'
import TableData from '../pages/Table-data.vue'
import ChartJs from '../pages/Chart-js.vue'
import ChartD3 from '../pages/Chart-d3.vue'
import ChartApex from '../pages/Chart-apex.vue'
import Calendar from '../pages/Calendar.vue'
import Map from '../pages/Map.vue'
import Gallery from '../pages/Gallery.vue'
import PageBlank from '../pages/Page-blank.vue'
import PageWithFooter from '../pages/Page-with-footer.vue'
import PageWithoutSidebar from '../pages/Page-without-sidebar.vue'
import PageWithRightSidebar from '../pages/Page-with-right-sidebar.vue'
import PageWithMinifiedSidebar from '../pages/Page-with-minified-sidebar.vue'
import PageWithTwoSidebar from '../pages/Page-with-two-sidebar.vue'
import PageFullHeight from '../pages/Page-full-height.vue'
import PageWithWideSidebar from '../pages/Page-with-wide-sidebar.vue'
import PageWithLightSidebar from '../pages/Page-with-light-sidebar.vue'
import PageWithMegaMenu from '../pages/Page-with-mega-menu.vue'
import PageWithTopMenu from '../pages/Page-with-top-menu.vue'
import PageWithBoxedLayout from '../pages/Page-with-boxed-layout.vue'
import PageWithMixedMenu from '../pages/Page-with-mixed-menu.vue'
import PageBoxedLayoutWithMixedMenu from '../pages/Page-boxed-layout-with-mixed-menu.vue'
import PageWithTransparentSidebar from '../pages/Page-with-transparent-sidebar.vue'
import PageWithSearchSidebar from '../pages/Page-with-search-sidebar.vue'
import ExtraTimeline from '../pages/Extra-timeline.vue'
import ExtraComingSoon from '../pages/Extra-coming-soon.vue'
import ExtraSearch from '../pages/Extra-search.vue'
import ExtraInvoice from '../pages/Extra-invoice.vue'
import ExtraError from '../pages/Extra-error.vue'
import ExtraProfile from '../pages/Extra-profile.vue'
import ExtraScrumBoard from '../pages/Extra-scrum-board.vue'
import ExtraCookieAcceptanceBanner from '../pages/Extra-cookie-acceptance-banner.vue'
import UserLoginV1 from '../pages/User-login-v1.vue'
import UserLoginV2 from '../pages/User-login-v2.vue'
import UserLoginV3 from '../pages/User-login-v3.vue'
import UserRegisterV3 from '../pages/User-register-v3.vue'
import HelperCss from '../pages/Helper-css'

const routes = [
	{ path: '*', redirect: '/dashboard/v2' },
  { path: '/dashboard/v1', component: DashboardV1 },
  { path: '/dashboard/v2', component: DashboardV2 },
  { path: '/dashboard/v3', component: DashboardV3 },
  { path: '/email/inbox', component: EmailInbox },
  { path: '/email/compose', component: EmailCompose },
  { path: '/email/detail', component: EmailDetail },
  { path: '/widgets', component: Widgets },
  { path: '/ui/general', component: UIGeneral },
  { path: '/ui/typography', component: UITypography },
  { path: '/ui/tabs-accordions', component: UITabsAccordion },
  { path: '/ui/modal-notification', component: UIModalNotification },
  { path: '/ui/widget-boxes', component: UIWidgetBoxes },
  { path: '/ui/media-object', component: UIMediaObject },
  { path: '/ui/buttons', component: UIButtons },
  { path: '/ui/icons', component: UIIcons },
  { path: '/ui/simple-line-icons', component: UISimpleLineIcons },
  { path: '/ui/ionicons', component: UIIonicons },
  { path: '/ui/language-bar-icon', component: UILanguageBarIcon },
  { path: '/ui/social-buttons', component: UISocialButtons },
  { path: '/bootstrap-4', component: Bootstrap4 },
  { path: '/form/elements', component: FormElements },
  { path: '/form/plugins', component: FormPlugins },
  { path: '/form/wizards', component: FormWizards },
  { path: '/pos/counter-checkout', component: PosCounterCheckout },
  { path: '/pos/customer-order', component: PosCustomerOrder },
  { path: '/pos/kitchen-order', component: PosKitchenOrder },
  { path: '/pos/menu-stock', component: PosMenuStock },
  { path: '/pos/table-booking', component: PosTableBooking },
  { path: '/table/basic', component: TableBasic },
  { path: '/table/data', component: TableData },
  { path: '/chart/js', component: ChartJs },
  { path: '/chart/d3', component: ChartD3 },
  { path: '/chart/apex', component: ChartApex },
  { path: '/calendar', component: Calendar },
  { path: '/map', component: Map },
  { path: '/page-option/blank', component: PageBlank },
  { path: '/page-option/with-footer', component: PageWithFooter },
  { path: '/page-option/without-sidebar', component: PageWithoutSidebar },
  { path: '/page-option/with-right-sidebar', component: PageWithRightSidebar },
  { path: '/page-option/with-minified-sidebar', component: PageWithMinifiedSidebar },
  { path: '/page-option/with-two-sidebar', component: PageWithTwoSidebar },
  { path: '/page-option/full-height', component: PageFullHeight },
  { path: '/page-option/with-wide-sidebar', component: PageWithWideSidebar },
  { path: '/page-option/with-light-sidebar', component: PageWithLightSidebar },
  { path: '/page-option/with-mega-menu', component: PageWithMegaMenu },
  { path: '/page-option/with-top-menu', component: PageWithTopMenu },
  { path: '/page-option/with-boxed-layout', component: PageWithBoxedLayout },
  { path: '/page-option/with-mixed-menu', component: PageWithMixedMenu },
  { path: '/page-option/boxed-layout-with-mixed-menu', component: PageBoxedLayoutWithMixedMenu },
  { path: '/page-option/with-transparent-sidebar', component: PageWithTransparentSidebar },
  { path: '/page-option/with-search-sidebar', component: PageWithSearchSidebar },
  { path: '/gallery', component: Gallery },
  { path: '/extra/timeline', component: ExtraTimeline },
  { path: '/extra/coming-soon', component: ExtraComingSoon },
  { path: '/extra/search', component: ExtraSearch },
  { path: '/extra/invoice', component: ExtraInvoice },
  { path: '/extra/error', component: ExtraError },
  { path: '/extra/profile', component: ExtraProfile },
  { path: '/extra/scrum-board', component: ExtraScrumBoard },
  { path: '/extra/cookie-acceptance-banner', component: ExtraCookieAcceptanceBanner },
  { path: '/user/login-v1', component: UserLoginV1 },
  { path: '/user/login-v2', component: UserLoginV2 },
  { path: '/user/login-v3', component: UserLoginV3 },
  { path: '/user/register-v3', component: UserRegisterV3 },
  { path: '/helper/css', component: HelperCss }
]

export default routes;
</script>
