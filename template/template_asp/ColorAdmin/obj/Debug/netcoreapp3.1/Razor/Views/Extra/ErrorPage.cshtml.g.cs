#pragma checksum "/Users/ngunguoksiong/color-admin/admin/template/template_asp/ColorAdmin/Views/Extra/ErrorPage.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e5f29b75d0c5f01f89988e2167bc099907de24ad"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Extra_ErrorPage), @"mvc.1.0.view", @"/Views/Extra/ErrorPage.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e5f29b75d0c5f01f89988e2167bc099907de24ad", @"/Views/Extra/ErrorPage.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"17bd241ee090bd8b39c0cf55b12cb73c6c44cc0b", @"/Views/_ViewImports.cshtml")]
    public class Views_Extra_ErrorPage : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/Users/ngunguoksiong/color-admin/admin/template/template_asp/ColorAdmin/Views/Extra/ErrorPage.cshtml"
  
  ViewData["Title"] = "404 Error Page";
  ViewData["PageWithoutContainer"] = "true";
  ViewData["PageWithoutHeader"] = "true";
  ViewData["PageWithoutSidebar"] = "true";
  ViewData["BodyClass"] = "pace-top";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<!-- begin error -->
<div class=""error"">
	<div class=""error-code"">404</div>
	<div class=""error-content"">
		<div class=""error-message"">We couldn't find it...</div>
		<div class=""error-desc mb-3 mb-sm-4 mb-md-5"">
			The page you're looking for doesn't exist. <br />
			Perhaps, there pages will help find what you're looking for.
		</div>
		<div>
			<a href=""index.html"" class=""btn btn-success p-l-20 p-r-20"">Go Home</a>
		</div>
	</div>
</div>
<!-- end error -->");
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
