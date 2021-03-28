#pragma checksum "/Users/ngunguoksiong/color-admin/admin/template/template_asp/ColorAdmin/Views/LoginRegister/LoginV3.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "6ca46106c711fcf28609490a8abb61397957a1c8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_LoginRegister_LoginV3), @"mvc.1.0.view", @"/Views/LoginRegister/LoginV3.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/ngunguoksiong/color-admin/admin/template/template_asp/ColorAdmin/Views/_ViewImports.cshtml"
using studio;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/ngunguoksiong/color-admin/admin/template/template_asp/ColorAdmin/Views/_ViewImports.cshtml"
using studio.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"6ca46106c711fcf28609490a8abb61397957a1c8", @"/Views/LoginRegister/LoginV3.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"17bd241ee090bd8b39c0cf55b12cb73c6c44cc0b", @"/Views/_ViewImports.cshtml")]
    public class Views_LoginRegister_LoginV3 : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString("/"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "GET", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("margin-bottom-0"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/Users/ngunguoksiong/color-admin/admin/template/template_asp/ColorAdmin/Views/LoginRegister/LoginV3.cshtml"
  
  ViewData["Title"] = "Login V3";
  ViewData["PageWithoutContainer"] = "true";
  ViewData["PageWithoutHeader"] = "true";
  ViewData["PageWithoutSidebar"] = "true";
  ViewData["BodyClass"] = "pace-top";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<!-- begin login -->
<div class=""login login-with-news-feed"">
	<!-- begin news-feed -->
	<div class=""news-feed"">
		<div class=""news-image"" style=""background-image: url(/img/login-bg/login-bg-11.jpg)""></div>
		<div class=""news-caption"">
			<h4 class=""caption-title""><b>Color</b> Admin App</h4>
			<p>
				Download the Color Admin app for iPhone®, iPad®, and Android™. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
		</div>
	</div>
	<!-- end news-feed -->
	<!-- begin right-content -->
	<div class=""right-content"">
		<!-- begin login-header -->
		<div class=""login-header"">
			<div class=""brand"">
				<span class=""logo""></span> <b>Color</b> Admin
				<small>responsive bootstrap 4 admin template</small>
			</div>
			<div class=""icon"">
				<i class=""fa fa-sign-in-alt""></i>
			</div>
		</div>
		<!-- end login-header -->
		<!-- begin login-content -->
		<div class=""login-content"">
			");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6ca46106c711fcf28609490a8abb61397957a1c85589", async() => {
                WriteLiteral(@"
				<div class=""form-group m-b-15"">
					<input type=""text"" class=""form-control form-control-lg"" placeholder=""Email Address"" required />
				</div>
				<div class=""form-group m-b-15"">
					<input type=""password"" class=""form-control form-control-lg"" placeholder=""Password"" required />
				</div>
				<div class=""checkbox checkbox-css m-b-30"">
					<input type=""checkbox"" id=""remember_me_checkbox""");
                BeginWriteAttribute("value", " value=\"", 1604, "\"", 1612, 0);
                EndWriteAttribute();
                WriteLiteral(@" />
					<label for=""remember_me_checkbox"">
					Remember Me
					</label>
				</div>
				<div class=""login-buttons"">
					<button type=""submit"" class=""btn btn-success btn-block btn-lg"">Sign me in</button>
				</div>
				<div class=""m-t-20 m-b-40 p-b-40 text-inverse"">
					Not a member yet? Click <a href=""/LoginRegister/RegisterV3"">here</a> to register.
				</div>
				<hr />
				<p class=""text-center text-grey-darker mb-0"">
					&copy; Color Admin All Right Reserved 2020
				</p>
			");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\t\t</div>\r\n\t\t<!-- end login-content -->\r\n\t</div>\r\n\t<!-- end right-container -->\r\n</div>\r\n<!-- end login -->\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
