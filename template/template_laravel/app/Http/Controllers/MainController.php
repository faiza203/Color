<?php
namespace App\Http\Controllers;


class MainController extends Controller {
    public function dashboardV1() {
        return view('pages/dashboard-v1');
    }
    public function dashboardV2() {
        return view('pages/dashboard-v2');
    }
    public function dashboardV3() {
        return view('pages/dashboard-v3');
    }
    
    public function emailInbox() {
        return view('pages/email-inbox');
    }
    public function emailCompose() {
        return view('pages/email-compose');
    }
    public function emailDetail() {
        return view('pages/email-detail');
    }
    
    public function widget() {
        return view('pages/widget');
    }
    
    public function uiGeneral() {
        return view('pages/ui-general');
    }
    public function uiTypography() {
        return view('pages/ui-typography');
    }
    public function uiTabsAccordions() {
        return view('pages/ui-tabs-accordions');
    }
    public function uiUnlimitedNavTabs() {
        return view('pages/ui-unlimited-nav-tabs');
    }
    public function uiModalNotification() {
        return view('pages/ui-modal-notification');
    }
    public function uiWidgetBoxes() {
        return view('pages/ui-widget-boxes');
    }
    public function uiMediaObject() {
        return view('pages/ui-media-object');
    }
    public function uiButtons() {
        return view('pages/ui-buttons');
    }
    public function uiIcons() {
        return view('pages/ui-icons');
    }
    public function uiSimpleLineIcons() {
        return view('pages/ui-simple-line-icons');
    }
    public function uiIonicons() {
        return view('pages/ui-ionicons');
    }
    public function uiTreeView() {
        return view('pages/ui-tree-view');
    }
    public function uiLanguageBarIcon() {
        return view('pages/ui-language-bar-icon');
    }
    public function uiSocialButtons() {
        return view('pages/ui-social-buttons');
    }
    public function uiIntroJs() {
        return view('pages/ui-intro-js');
    }
    
    public function bootstrap4() {
        return view('pages/bootstrap-4');
    }
    
    public function formElements() {
        return view('pages/form-elements');
    }
    public function formPlugins() {
        return view('pages/form-plugins');
    }
    public function formSliderSwitcher() {
        return view('pages/form-slider-switcher');
    }
    public function formValidation() {
        return view('pages/form-validation');
    }
    public function formWizards() {
        return view('pages/form-wizards');
    }
    public function formWysiwyg() {
        return view('pages/form-wysiwyg');
    }
    public function formXEditable() {
        return view('pages/form-x-editable');
    }
    public function formMultipleFileUpload() {
        return view('pages/form-multiple-file-upload');
    }
    public function formSummernote() {
        return view('pages/form-summernote');
    }
    public function formDropzone() {
        return view('pages/form-dropzone');
    }
    
    public function tableBasic() {
        return view('pages/table-basic');
    }
    public function tableManageDefault() {
        return view('pages/table-manage-default');
    }
    public function tableManageAutofill() {
        return view('pages/table-manage-autofill');
    }
    public function tableManageButtons() {
        return view('pages/table-manage-buttons');
    }
    public function tableManageColreorder() {
        return view('pages/table-manage-colreorder');
    }
    public function tableManageFixedColumn() {
        return view('pages/table-manage-fixed-column');
    }
    public function tableManageFixedHeader() {
        return view('pages/table-manage-fixed-header');
    }
    public function tableManageKeytable() {
        return view('pages/table-manage-keytable');
    }
    public function tableManageResponsive() {
        return view('pages/table-manage-responsive');
    }
    public function tableManageRowreorder() {
        return view('pages/table-manage-rowreorder');
    }
    public function tableManageScroller() {
        return view('pages/table-manage-scroller');
    }
    public function tableManageSelect() {
        return view('pages/table-manage-select');
    }
    public function tableManageCombine() {
        return view('pages/table-manage-combine');
    }
    
    public function posCustomerOrder() {
        return view('pages/pos-customer-order');
    }
    public function posKitchenOrder() {
        return view('pages/pos-kitchen-order');
    }
    public function posCounterCheckout() {
        return view('pages/pos-counter-checkout');
    }
    public function posTableBooking() {
        return view('pages/pos-table-booking');
    }
    public function posMenuStock() {
        return view('pages/pos-menu-stock');
    }
    
    public function emailTemplateSystem() {
        return view('pages/email-template-system');
    }
    public function emailTemplateNewsletter() {
        return view('pages/email-template-newsletter');
    }
    
    public function chartFlot() {
        return view('pages/chart-flot');
    }
    public function chartJs() {
        return view('pages/chart-js');
    }
    public function chartD3() {
        return view('pages/chart-d3');
    }
    public function chartApex() {
        return view('pages/chart-apex');
    }
    
    public function calendar() {
        return view('pages/calendar');
    }
    
    public function mapVector() {
        return view('pages/map-vector');
    }
    public function mapGoogle() {
        return view('pages/map-google');
    }
    
    public function galleryV1() {
        return view('pages/gallery-v1');
    }
    public function galleryV2() {
        return view('pages/gallery-v2');
    }
    
    public function pageBlank() {
        return view('pages/page-blank');
    }
    public function pageWithFooter() {
        return view('pages/page-with-footer');
    }
    public function pageWithoutSidebar() {
        return view('pages/page-without-sidebar');
    }
    public function pageWithRightSidebar() {
        return view('pages/page-with-right-sidebar');
    }
    public function pageWithMinifiedSidebar() {
        return view('pages/page-with-minified-sidebar');
    }
    public function pageWithTwoSidebar() {
        return view('pages/page-with-two-sidebar');
    }
    public function pageFullHeight() {
        return view('pages/page-full-height');
    }
    public function pageWithWideSidebar() {
        return view('pages/page-with-wide-sidebar');
    }
    public function pageWithLightSidebar() {
        return view('pages/page-with-light-sidebar');
    }
    public function pageWithMegaMenu() {
        return view('pages/page-with-mega-menu');
    }
    public function pageWithTopMenu() {
        return view('pages/page-with-top-menu');
    }
    public function pageWithBoxedLayout() {
        return view('pages/page-with-boxed-layout');
    }
    public function pageWithMixedMenu() {
        return view('pages/page-with-mixed-menu');
    }
    public function boxedLayoutWithMixedMenu() {
        return view('pages/page-boxed-layout-with-mixed-menu');
    }
    public function pageWithTransparentSidebar() {
        return view('pages/page-with-transparent-sidebar');
    }
    public function pageWithSearchSidebar() {
        return view('pages/page-with-search-sidebar');
    }
    
    public function extraTimeline() {
        return view('pages/extra-timeline');
    }
    public function extraComingSoon() {
        return view('pages/extra-coming-soon');
    }
    public function extraSearchResult() {
        return view('pages/extra-search-result');
    }
    public function extraInvoice() {
        return view('pages/extra-invoice');
    }
    public function extraErrorPage() {
        return view('pages/extra-error-page');
    }
    public function extraProfile() {
        return view('pages/extra-timeline');
    }
    public function extraScrumBoard() {
        return view('pages/extra-scrum-board');
    }
    public function extraCookieAcceptanceBanner() {
        return view('pages/extra-cookie-acceptance-banner');
    }
    
    public function loginV1() {
        return view('pages/login-v1');
    }
    public function loginV2() {
        return view('pages/login-v2');
    }
    public function loginV3() {
        return view('pages/login-v3');
    }
    public function registerV3() {
        return view('pages/register-v3');
    }
    
    public function helperCss() {
        return view('pages/helper-css');
    }
}