#pragma checksum "/Users/ngunguoksiong/color-admin/admin/template/template_asp/ColorAdmin/Views/Form/Wizards.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "746f231f9fec8c80bf69b8b6f4d1199ed077cb69"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Form_Wizards), @"mvc.1.0.view", @"/Views/Form/Wizards.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"746f231f9fec8c80bf69b8b6f4d1199ed077cb69", @"/Views/Form/Wizards.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"17bd241ee090bd8b39c0cf55b12cb73c6c44cc0b", @"/Views/_ViewImports.cshtml")]
    public class Views_Form_Wizards : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/lib/highlight.js/highlight.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/demo/render.highlight.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/Users/ngunguoksiong/color-admin/admin/template/template_asp/ColorAdmin/Views/Form/Wizards.cshtml"
  
  ViewData["Title"] = "Wizards";

#line default
#line hidden
#nullable disable
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n\t");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "746f231f9fec8c80bf69b8b6f4d1199ed077cb694094", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n\t");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "746f231f9fec8c80bf69b8b6f4d1199ed077cb695177", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
            }
            );
            WriteLiteral(@"
<!-- begin breadcrumb -->
<ol class=""breadcrumb float-xl-right"">
	<li class=""breadcrumb-item""><a href=""javascript:;"">Home</a></li>
	<li class=""breadcrumb-item""><a href=""javascript:;"">Form Stuff</a></li>
	<li class=""breadcrumb-item active"">Wizards</li>
</ol>
<!-- end breadcrumb -->
<!-- begin page-header -->
<h1 class=""page-header"">Wizards <small>header small text goes here...</small></h1>
<!-- end page-header -->

<hr class=""mb-4"" />

<!-- BEGIN row -->
<div class=""row"">
	<!-- BEGIN col-6 -->
	<div class=""col-xl-6"">
		<!-- BEGIN panel -->
		<div class=""panel panel-inverse"">
			<div class=""panel-heading ui-sortable-handle"">
				<h4 class=""panel-title"">Wizard layout 1</h4>
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa fa-expand""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a ");
            WriteLiteral(@"href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" data-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<div class=""panel-body"">
				<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
		
				<div class=""nav-wizards-container"">
					<nav class=""nav nav-wizards-1 mb-2"">
						<div class=""nav-item col"">
							<a class=""nav-link completed"" href=""#"">
								<div class=""nav-no"">1</div>
								<div class=""nav-text"">Completed step</div>
							</a>
						</div>
						<div class=""nav-item col"">
							<a class=""nav-link completed"" href=""#"">
								<div class=""nav-no"">2</div>
								<div class=""nav-text"">Second step</div>
							</a>
						</div>
						<div class=""nav-item col"">
							<a class=""nav-");
            WriteLiteral(@"link active"" href=""#"">
								<div class=""nav-no"">3</div>
								<div class=""nav-text"">Active step</div>
							</a>
						</div>
						<div class=""nav-item col"">
							<a class=""nav-link disabled"" href=""#"">
								<div class=""nav-no"">4</div>
								<div class=""nav-text"">Disabled step</div>
							</a>
						</div>
						<div class=""nav-item col"">
							<a class=""nav-link disabled"" href=""#"">
								<div class=""nav-no"">5</div>
								<div class=""nav-text"">Last step</div>
							</a>
						</div>
					</nav>
				</div>
				<div class=""card"">
					<div class=""card-body"">
						wizard content here
					</div>
				</div>
			</div>
			<div class=""hljs-wrapper"">
				<pre class=""html""><code>&lt;div class=""nav-wizards-container""&gt;
  &lt;nav class=""nav nav-wizards-1 mb-2""&gt;
    &lt;!-- completed --&gt;
    &lt;div class=""nav-item col""&gt;
      &lt;a class=""nav-link completed"" href=""#""&gt;
        &lt;div class=""nav-no""&gt;1&lt;/div&gt;
        &lt;div class=""nav-text""&gt;Com");
            WriteLiteral(@"pleted step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- active --&gt;
    &lt;div class=""nav-item col""&gt;
      &lt;a class=""nav-link active"" href=""#""&gt;
        &lt;div class=""nav-no""&gt;3&lt;/div&gt;
        &lt;div class=""nav-text""&gt;Active step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- disabled --&gt;
    &lt;div class=""nav-item col""&gt;
      &lt;a class=""nav-link disabled"" href=""#""&gt;
        &lt;div class=""nav-no""&gt;5&lt;/div&gt;
        &lt;div class=""nav-text""&gt;Last step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
&lt;/div&gt;

&lt;div class=""card""&gt;
  &lt;div class=""card-body""&gt;
    wizard content here
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
			</div>
		</div>
		<!-- END panel -->
	</div>
	<!-- END col-6 -->
	
	<!-- BEGIN col-6 -->
	<div class=""col-xl-6"">
		<!-- BEGIN panel -->
		<div class=""panel panel-inverse"">
			<div class=""panel-heading ui-sortable-handle"">
				<h4 class=""panel-title"">Wizard layou");
            WriteLiteral(@"t 2</h4>
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa fa-expand""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" data-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<div class=""panel-body"">
				<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
				
				<div class=""nav-wizards-container"">
					<nav class=""nav nav-wizards-2 mb-3"">
						<div class=""nav-item col"">
							<a class=""nav-link completed"" href=""#"">
								<div class=""nav-text"">1. ");
            WriteLiteral(@"Completed step</div>
							</a>
						</div>
						<div class=""nav-item col"">
							<a class=""nav-link active"" href=""#"">
								<div class=""nav-text"">2. Active step text</div>
							</a>
						</div>
						<div class=""nav-item col"">
							<a class=""nav-link disabled"" href=""#"">
								<div class=""nav-text"">3. Disabled step text</div>
							</a>
						</div>
					</nav>
				</div>
				<div class=""card"">
					<div class=""card-body"">
						wizard content here
					</div>
				</div>
			</div>
			<div class=""hljs-wrapper"">
				<pre class=""html""><code>&lt;div class=""nav-wizards-container""&gt;
  &lt;nav class=""nav nav-wizards-2 mb-3""&gt;
    &lt;!-- completed --&gt;
    &lt;div class=""nav-item col""&gt;
      &lt;a class=""nav-link completed"" href=""#""&gt;
        &lt;div class=""nav-text""&gt;1. Completed step text&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- active --&gt;
    &lt;div class=""nav-item col""&gt;
      &lt;a class=""nav-link active"" href=""#""&gt;
        &");
            WriteLiteral(@"lt;div class=""nav-text""&gt;2. Active step text&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- disabled --&gt;
    &lt;div class=""nav-item col""&gt;
      &lt;a class=""nav-link disabled"" href=""#""&gt;
        &lt;div class=""nav-text""&gt;3. Disabled step text&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
&lt;/div&gt;

&lt;div class=""card""&gt;
  &lt;div class=""card-body""&gt;
    wizard content here
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
			</div>
		</div>
		<!-- END panel -->
	</div>
	<!-- END col-6 -->
	
	<!-- BEGIN col-6 -->
	<div class=""col-xl-6"">
		<!-- BEGIN panel -->
		<div class=""panel panel-inverse"">
			<div class=""panel-heading ui-sortable-handle"">
				<h4 class=""panel-title"">Wizard layout 3</h4>
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa fa-expand""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" ");
            WriteLiteral(@"data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" data-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<div class=""panel-body"">
				<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
			
				<div class=""nav-wizards-container"">
					<nav class=""nav nav-wizards-3 mb-2"">
						<div class=""nav-item col"">
							<a class=""nav-link completed"" href=""#"">
								<div class=""nav-dot""></div>
								<div class=""nav-title"">Step 1</div>
								<div class=""nav-text"">Completed step</div>
							</a>
						</div>
						<div class=""nav-item col"">
							<a class=""nav-link completed"" href=""#"">
								<div class=""nav-dot""></div>
								<div class=");
            WriteLiteral(@"""nav-title"">Step 2</div>
								<div class=""nav-text"">Second step</div>
							</a>
						</div>
						<div class=""nav-item col"">
							<a class=""nav-link active"" href=""#"">
								<div class=""nav-dot""></div>
								<div class=""nav-title"">Step 3</div>
								<div class=""nav-text"">Active step</div>
							</a>
						</div>
						<div class=""nav-item col"">
							<a class=""nav-link disabled"" href=""#"">
								<div class=""nav-dot""></div>
								<div class=""nav-title"">Step 4</div>
								<div class=""nav-text"">Disabled step</div>
							</a>
						</div>
						<div class=""nav-item col"">
							<a class=""nav-link disabled"" href=""#"">
								<div class=""nav-dot""></div>
								<div class=""nav-title"">Step 5</div>
								<div class=""nav-text"">Last step</div>
							</a>
						</div>
					</nav>
				</div>
				<div class=""card"">
					<div class=""card-body"">
						wizard content here
					</div>
				</div>
			</div>
			<div class=""hljs-wrapper"">
				<pre class=""html""><code>&lt;di");
            WriteLiteral(@"v class=""nav-wizards-container""&gt;
  &lt;nav class=""nav nav-wizards-3 mb-2""&gt;
    &lt;!-- completed --&gt;
    &lt;div class=""nav-item col""&gt;
      &lt;a class=""nav-link completed"" href=""#""&gt;
        &lt;div class=""nav-dot""&gt;&lt;/div&gt;
        &lt;div class=""nav-no""&gt;Step 1&lt;/div&gt;
        &lt;div class=""nav-text""&gt;Completed step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- active --&gt;
    &lt;div class=""nav-item col""&gt;
      &lt;a class=""nav-link active"" href=""#""&gt;
        &lt;div class=""nav-dot""&gt;&lt;/div&gt;
        &lt;div class=""nav-no""&gt;Step 3&lt;/div&gt;
        &lt;div class=""nav-text""&gt;Active step&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- disabled --&gt;
    &lt;div class=""nav-item col""&gt;
      &lt;a class=""nav-link disabled"" href=""#""&gt;
        &lt;div class=""nav-dot""&gt;&lt;/div&gt;
        &lt;div class=""nav-no""&gt;Step 5&lt;/div&gt;
        &lt;div class=""nav-text""&gt;Last step&lt;/div&gt;
      &lt;/a&gt;");
            WriteLiteral(@"
    &lt;/div&gt;
  &lt;/nav&gt;
&lt;/div&gt;

&lt;div class=""card""&gt;
  &lt;div class=""card-body""&gt;
    wizard content here
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
			</div>
		</div>
		<!-- END panel -->
	</div>
	<!-- END col-6 -->
</div>
<!-- END row -->
");
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
