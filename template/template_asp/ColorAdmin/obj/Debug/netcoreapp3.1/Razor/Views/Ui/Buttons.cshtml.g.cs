#pragma checksum "/Users/ngunguoksiong/color-admin/admin/template/template_asp/ColorAdmin/Views/Ui/Buttons.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "43b365e7b91dc3f63bf0b0d9b2d46bc192b7cb76"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Ui_Buttons), @"mvc.1.0.view", @"/Views/Ui/Buttons.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"43b365e7b91dc3f63bf0b0d9b2d46bc192b7cb76", @"/Views/Ui/Buttons.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"17bd241ee090bd8b39c0cf55b12cb73c6c44cc0b", @"/Views/_ViewImports.cshtml")]
    public class Views_Ui_Buttons : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
#line 1 "/Users/ngunguoksiong/color-admin/admin/template/template_asp/ColorAdmin/Views/Ui/Buttons.cshtml"
  
  ViewData["Title"] = "Buttons";

#line default
#line hidden
#nullable disable
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n\t");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "43b365e7b91dc3f63bf0b0d9b2d46bc192b7cb764082", async() => {
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
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "43b365e7b91dc3f63bf0b0d9b2d46bc192b7cb765165", async() => {
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
	<li class=""breadcrumb-item""><a href=""javascript:;"">UI Elements</a></li>
	<li class=""breadcrumb-item active"">Buttons</li>
</ol>
<!-- end breadcrumb -->
<!-- begin page-header -->
<h1 class=""page-header"">Buttons <small>header small text goes here...</small></h1>
<!-- end page-header -->

<!-- begin row -->
<div class=""row"">
	<!-- begin col-6 -->
	<div class=""col-xl-6"">
		<!-- begin panel -->
		<div class=""panel panel-inverse"" data-sortable-id=""ui-buttons-1"">
			<!-- begin panel-heading -->
			<div class=""panel-heading"">
				<h4 class=""panel-title"">Buttons <span class=""label label-success ml-1"">NEW</span></h4>
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa fa-expand""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" ");
            WriteLiteral(@"data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" data-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class=""panel-body"">
				<button type=""button"" class=""btn btn-white m-r-5 m-b-5"">White</button>
				<button type=""button"" class=""btn btn-default m-r-5 m-b-5"">Default</button>
				<button type=""button"" class=""btn btn-grey m-r-5 m-b-5"">Grey</button>
				<button type=""button"" class=""btn btn-purple m-r-5 m-b-5"">Purple</button>
				<button type=""button"" class=""btn btn-indigo m-r-5 m-b-5"">Indigo</button>
				<button type=""button"" class=""btn btn-primary m-r-5 m-b-5"">Primary</button>
				<button type=""button"" class=""btn btn-info m-r-5 m-b-5"">Info</button>
				<button type=""button"" class=""btn");
            WriteLiteral(@" btn-yellow m-r-5 m-b-5"">Yellow</button>
				<button type=""button"" class=""btn btn-warning m-r-5 m-b-5"">Warning</button>
				<button type=""button"" class=""btn btn-pink m-r-5 m-b-5"">Pink</button>
				<button type=""button"" class=""btn btn-danger m-r-5 m-b-5"">Danger</button>
				<button type=""button"" class=""btn btn-success m-r-5 m-b-5"">Success</button>
				<button type=""button"" class=""btn btn-green m-r-5 m-b-5"">Green</button>
				<button type=""button"" class=""btn btn-lime m-r-5 m-b-5"">Lime</button>
				<button type=""button"" class=""btn btn-inverse m-r-5 m-b-5"">Inverse</button>
				<button type=""button"" class=""btn btn-link m-b-5"">Link</button>
			</div>
			<!-- end panel-body -->
			<!-- bgine hljs-wrapper -->
			<div class=""hljs-wrapper"">
				<pre><code class=""html"">&lt;button type=""button"" class=""btn btn-default""&gt;Default&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-grey""&gt;Grey&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-purple""&gt;Purple&lt;/button&gt;
&lt;button type=""butto");
            WriteLiteral(@"n"" class=""btn btn-indigo""&gt;Indigo&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-primary""&gt;Primary&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-info""&gt;Info&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-yellow""&gt;Yellow&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-warning""&gt;Warning&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-pink""&gt;Pink&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-danger""&gt;Danger&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-success""&gt;Success&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-green""&gt;Green&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-lime""&gt;Lime&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-inverse""&gt;Inverse&lt;/button&gt;
&lt;button type=""button"" class=""btn btn-link""&gt;Link&lt;/button&gt;</code></pre>
			</div>
			<!-- end hljs-wrapper -->
		</div>
		<!-- end panel -->
	</div>
	<!-- end col-6 -->
	<!-- begin col-6 -->
	<div class=""col-xl-6"">
		<!");
            WriteLiteral(@"-- begin panel -->
		<div class=""panel panel-inverse"" data-sortable-id=""ui-buttons-2"">
			<!-- begin panel-heading -->
			<div class=""panel-heading"">
				<h4 class=""panel-title"">Button Dropdowns</h4>
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa fa-expand""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" data-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class=""panel-body"">
				<div class=""btn-group m-r-5 m-b-5"">
					<a href=""javascript:;"" class=""btn btn-default"">Dropdown</a>
					<a h");
            WriteLiteral(@"ref=""#"" data-toggle=""dropdown"" class=""btn btn-default dropdown-toggle""><b class=""caret""></b></a>
					<div class=""dropdown-menu dropdown-menu-right"">
						<a href=""javascript:;"" class=""dropdown-item"">Action 1</a>
						<a href=""javascript:;"" class=""dropdown-item"">Action 2</a>
						<a href=""javascript:;"" class=""dropdown-item"">Action 3</a>
						<div class=""dropdown-divider""></div>
						<a href=""javascript:;"" class=""dropdown-item"">Action 4</a>
					</div>
				</div>
				<div class=""btn-group dropup m-r-5 m-b-5"">
					<a href=""javascript:;"" class=""btn btn-primary"">Dropup</a>
					<a href=""#"" data-toggle=""dropdown"" class=""btn btn-primary dropdown-toggle""><b class=""caret""></b></a>
					<div class=""dropdown-menu dropdown-menu-right"">
						<a href=""javascript:;"" class=""dropdown-item"">Action 1</a>
						<a href=""javascript:;"" class=""dropdown-item"">Action 2</a>
						<a href=""javascript:;"" class=""dropdown-item"">Action 3</a>
						<div class=""dropdown-divider""></div>
						<a href=""javascript:;"" cl");
            WriteLiteral(@"ass=""dropdown-item"">Action 4</a>
					</div>
				</div>
			</div>
			<!-- end panel-body -->
			<!-- bgine hljs-wrapper -->
			<div class=""hljs-wrapper"">
				<pre><code class=""html"">&lt;!-- dropdown --&gt;
&lt;div class=""btn-group""&gt;
  &lt;a href=""#"" class=""btn btn-default""&gt;Dropdown&lt;/a&gt;
  &lt;a href=""#"" class=""btn btn-default dropdown-toggle""
    data-toggle=""dropdown""&gt;&lt;/a&gt;
  &lt;ul class=""dropdown-menu pull-right""&gt;
    ...
  &lt;/ul&gt;
&lt;/div&gt;

&lt;!-- dropup --&gt;
&lt;div class=""btn-group dropup""&gt;
  &lt;a href=""#"" class=""btn btn-default""&gt;Dropdown&lt;/a&gt;
  &lt;a href=""#"" class=""btn btn-default dropdown-toggle""
    data-toggle=""dropdown""&gt;&lt;/a&gt;
  &lt;ul class=""dropdown-menu pull-right""&gt;
    ...
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
			</div>
			<!-- end hljs-wrapper -->
		</div>
		<!-- end panel -->
	</div>
	<!-- end col-6 -->
</div>
<!-- end row -->
<!-- begin row -->
<div class=""row"">
	<!-- begin col-6 -->
	<div class=""c");
            WriteLiteral(@"ol-xl-6"">
		<!-- begin panel -->
		<div class=""panel panel-inverse"" data-sortable-id=""ui-buttons-3"">
			<!-- begin panel-heading -->
			<div class=""panel-heading"">
				<h4 class=""panel-title"">Button Sizes</h4>
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa fa-expand""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" data-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class=""panel-body"">
				<a href=""javascript:;"" class=""btn btn-primary btn-lg m-r-5 m-b-5"">Large Button</a>
				<a href=""java");
            WriteLiteral(@"script:;"" class=""btn btn-primary m-r-5 m-b-5"">Default Button</a>
				<a href=""javascript:;"" class=""btn btn-default btn-sm m-r-5 m-b-5"">Small Button</a>
				<a href=""javascript:;"" class=""btn btn-default btn-xs m-r-5 m-b-5"">Extra Small</a>
			</div>
			<!-- end panel-body -->
			<!-- bgine hljs-wrapper -->
			<div class=""hljs-wrapper"">
				<pre><code class=""html"">&lt;a href=""#"" class=""btn btn-primary btn-lg""&gt;Large Button&lt;/a&gt;
&lt;a href=""#"" class=""btn btn-primary""&gt;Default Button&lt;/a&gt;
&lt;a href=""#"" class=""btn btn-primary btn-sm""&gt;Small Button&lt;/a&gt;
&lt;a href=""#"" class=""btn btn-primary btn-xs""&gt;Extra Small&lt;/a&gt;</code></pre>
			</div>
			<!-- end hljs-wrapper -->
		</div>
		<!-- end panel -->
	</div>
	<!-- end col-6 -->
	<!-- begin col-6 -->
	<div class=""col-xl-6"">
		<!-- begin panel -->
		<div class=""panel panel-inverse"" data-sortable-id=""ui-buttons-4"">
			<!-- begin panel-heading -->
			<div class=""panel-heading"">
				<h4 class=""panel-title"">Button State</h4>");
            WriteLiteral(@"
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa fa-expand""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" data-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class=""panel-body"">
				<div class=""row"">
					<div class=""col-md-6"">
						<a href=""javascript:;"" class=""btn btn-default disabled m-r-5 m-b-5"">Disabled Button</a>
						<a href=""javascript:;"" class=""btn btn-default active m-r-5 m-b-5"">Active Button</a>
					</div>
					<div class=""col-md-6"">
						<a href=""javascript:;"" class=""btn");
            WriteLiteral(@" btn-primary btn-block m-b-5"">Block Button</a>
					</div>
				</div>
			</div>
			<!-- end panel-body -->
			<!-- bgine hljs-wrapper -->
			<div class=""hljs-wrapper"">
				<pre><code class=""html"">&lt;a href=""#"" class=""btn btn-default disabled""&gt;Disabled Button&lt;/a&gt;
&lt;a href=""#"" class=""btn btn-default active""&gt;Active Button&lt;/a&gt;
&lt;a href=""#"" class=""btn btn-primary btn-block""&gt;Block Button&lt;/a&gt;</code></pre>
			</div>
			<!-- end hljs-wrapper -->
		</div>
		<!-- end panel -->
	</div>
	<!-- end col-6 -->
</div>
<!-- end row -->
<!-- begin row -->
<div class=""row"">
	<!-- begin col-6 -->
	<div class=""col-xl-6"">
		<!-- begin panel -->
		<div class=""panel panel-inverse"" data-sortable-id=""ui-buttons-5"">
			<!-- begin panel-heading -->
			<div class=""panel-heading"">
				<h4 class=""panel-title"">Button with Icon</h4>
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa ");
            WriteLiteral(@"fa-expand""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" data-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class=""panel-body"">
				<div class=""row text-center"">
					<div class=""col-md-6"">
						<div class=""mb-2"">
							<a href=""javascript:;"" class=""btn btn-lg btn-primary"">
								<span class=""d-flex align-items-center text-left"">
									<i class=""fab fa-twitter fa-3x mr-3 text-black""></i>
									<span>
										<span class=""d-block mb-n1""><b>Twitter Bootstrap</b></span>
										<span class=""f-s-12 f-w-600 text-white-transparent-7"">Version 4.0</span>
									</span>
								</");
            WriteLiteral(@"span>
							</a>
						</div>
					</div>
					<div class=""col-md-6"">
						<p>
							<a href=""javascript:;"" class=""btn btn-default m-r-5""><i class=""fa fa-comment""></i> Comment</a>
							<a href=""javascript:;"" class=""btn btn-default m-r-5""><i class=""fa fa-cogs""></i> Setting</a>
							<a href=""javascript:;"" class=""btn btn-default""><i class=""fa fa-cog""></i></a>
						</p>
						<p>
							<a href=""javascript:;"" class=""btn btn-default btn-block""><i class=""fa fa-list pull-right""></i> Button block with icon</a>
						</p>
					</div>
				</div>
			</div>
			<!-- end panel-body -->
			<!-- bgine hljs-wrapper -->
			<div class=""hljs-wrapper"">
				<pre><code class=""html"">&lt;a href=""#"" class=""btn btn-lg btn-primary""&gt;
  &lt;span class=""d-flex align-items-center text-left""&gt;
    &lt;i class=""fab fa-twitter fa-3x mr-3 text-black""&gt;&lt;/i&gt;
    &lt;span&gt;
      &lt;span class=""d-block mb-n1""&gt;&lt;b&gt;Twitter Bootstrap&lt;/b&gt;&lt;/span&gt;
      &lt;span class=""f-s-12 f-w-600 te");
            WriteLiteral(@"xt-white-transparent-7""&gt;Version 4.0&lt;/span&gt;
    &lt;/span&gt;
  &lt;/span&gt;
&lt;/a&gt;</code></pre>
			</div>
			<!-- end hljs-wrapper -->
		</div>
		<!-- end panel -->
	</div>
	<!-- end col-6 -->
	<!-- begin col-6 -->
	<div class=""col-xl-6"">
		<!-- begin panel -->
		<div class=""panel panel-inverse"" data-sortable-id=""ui-buttons-6"">
			<!-- begin panel-heading -->
			<div class=""panel-heading"">
				<h4 class=""panel-title"">Button Group Vertical & Justified</h4>
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa fa-expand""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" da");
            WriteLiteral(@"ta-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class=""panel-body"">
				<div class=""row"">
					<div class=""col-md-6"">
						<div class=""btn-group"">
							<button class=""btn btn-white"">Left</button>
							<button class=""btn btn-white active"">Middle</button>
							<button class=""btn btn-white"">Right</button>
						</div>
						<p></p>
						<div class=""btn-group"">
							<a class=""btn btn-white"" href=""javascript:;""><i class=""fa fa-align-left""></i></a>
							<a class=""btn btn-white active"" href=""javascript:;""><i class=""fa fa-align-center""></i></a>
							<a class=""btn btn-white"" href=""javascript:;""><i class=""fa fa-align-right""></i></a>
							<a class=""btn btn-white"" href=""javascript:;""><i class=""fa fa-align-justify""></i></a>
						</div>
						<p></p>
					</div>
					<div class=""col-md-6"">
						<div class=""btn-group"">
							<button type=""button"" class=""btn btn-white"">1</button>
							");
            WriteLiteral(@"<button type=""button"" class=""btn btn-white active"">2</button>
							<button type=""button"" class=""btn btn-white"">3</button>
						</div>
						<div class=""btn-group"">
							<button type=""button"" class=""btn btn-white"">4</button>
							<button type=""button"" class=""btn btn-white"">5</button>
							<button type=""button"" class=""btn btn-white"">6</button>
						</div>
						<div class=""btn-group"">
							<button type=""button"" class=""btn btn-white"">7</button>
						</div>
						<p></p>
						<div class=""btn-group"">
							<a class=""btn btn-inverse"" href=""javascript:;""><i class=""fa fa-backward""></i></a>
							<a class=""btn btn-inverse"" href=""javascript:;""><i class=""fa fa-fast-backward""></i></a>
							<a class=""btn btn-inverse"" href=""javascript:;""><i class=""fa fa-pause""></i></a>
							<a class=""btn btn-inverse active"" href=""javascript:;""><i class=""fa fa-play""></i></a>
							<a class=""btn btn-inverse"" href=""javascript:;""><i class=""fa fa-forward""></i></a>
							<a class=""btn btn-inverse"" href=""ja");
            WriteLiteral(@"vascript:;""><i class=""fa fa-fast-forward""></i></a>
						</div>
					</div>
				</div>
			</div>
			<!-- end panel-body -->
			<!-- bgine hljs-wrapper -->
			<div class=""hljs-wrapper"">
				<pre><code class=""html"">&lt;div class=""btn-group""&gt;
  &lt;button class=""btn btn-white""&gt;Left&lt;/button&gt;
  &lt;button class=""btn btn-white active""&gt;Middle&lt;/button&gt;
  &lt;button class=""btn btn-white""&gt;Right&lt;/button&gt;
&lt;/div&gt;</code></pre>
			</div>
			<!-- end hljs-wrapper -->
		</div>
		<!-- end panel -->
	</div>
	<!-- end col-6 -->
	<!-- begin col-6 -->
	<div class=""col-xl-6"">
		<!-- begin panel -->
		<div class=""panel panel-inverse"" data-sortable-id=""ui-buttons-7"">
			<!-- begin panel-heading -->
			<div class=""panel-heading"">
				<h4 class=""panel-title"">Button Toolbars</h4>
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa fa-expand""></i></a>
					<a href=""javascrip");
            WriteLiteral(@"t:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" data-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class=""panel-body"">
				<div class=""row"">
					<div class=""col-md-4"">
						<div class=""btn-group-vertical m-r-5"">
							<button type=""button"" class=""btn btn-purple""><i class=""fa fa-cog""></i> Button</button>
							<button type=""button"" class=""btn btn-purple active""><i class=""fa fa-cog""></i> Button</button>
							<button type=""button"" class=""btn btn-purple""><i class=""fa fa-cog""></i> Button</button>
						</div>
					</div>
					<div class=""col-md-8"">
						<div class=""btn-group btn-group-justified"">
							<a class=""btn bt");
            WriteLiteral(@"n-default"">Left</a>
							<a class=""btn btn-default active"">Middle</a>
							<a class=""btn btn-default"">Right</a>
						</div>
					</div>
				</div>
			</div>
			<!-- end panel-body -->
			<!-- bgine hljs-wrapper -->
			<div class=""hljs-wrapper"">
				<pre><code class=""html"">&lt;div class=""btn-group""&gt;
  &lt;button class=""btn btn-purple""&gt;Button&lt;/button&gt;
  &lt;button class=""btn btn-purple active""&gt;Button&lt;/button&gt;
  &lt;button class=""btn btn-purple""&gt;Button&lt;/button&gt;
&lt;/div&gt;

&lt;div class=""btn-group btn-group-justified""&gt;
  &lt;a class=""btn btn-default""&gt;Left&lt;/a&gt;
  &lt;a class=""btn btn-default active""&gt;Middle&lt;/a&gt;
  &lt;a class=""btn btn-default""&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
			</div>
			<!-- end hljs-wrapper -->
		</div>
		<!-- end panel -->
	</div>
	<!-- end col-6 -->
	<!-- begin col-6 -->
	<div class=""col-xl-6"">
		<!-- begin panel -->
		<div class=""panel panel-inverse"" data-sortable-id=""ui-buttons-8"">
			<!-- beg");
            WriteLiteral(@"in panel-heading -->
			<div class=""panel-heading"">
				<h4 class=""panel-title"">Button Icon & Sizes</h4>
				<div class=""panel-heading-btn"">
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-default"" data-click=""panel-expand""><i class=""fa fa-expand""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-success"" data-click=""panel-reload""><i class=""fa fa-redo""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-warning"" data-click=""panel-collapse""><i class=""fa fa-minus""></i></a>
					<a href=""javascript:;"" class=""btn btn-xs btn-icon btn-circle btn-danger"" data-click=""panel-remove""><i class=""fa fa-times""></i></a>
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class=""panel-body"">
				<div class=""row"">
					<div class=""col-md-6"">
						<p>
							<a href=""javascript:;"" class=""btn btn-default btn-icon btn-circle btn-lg""><i class=""fa fa-expand""></i></a>
							<a href=""javascript:;"" class");
            WriteLiteral(@"=""btn btn-success btn-icon btn-circle btn-lg""><i class=""fa fa-redo""></i></a>
							<a href=""javascript:;"" class=""btn btn-warning btn-icon btn-circle btn-lg""><i class=""fa fa-minus""></i></a>
							<a href=""javascript:;"" class=""btn btn-danger btn-icon btn-circle btn-lg""><i class=""fa fa-times""></i></a>
							<a href=""javascript:;"" class=""btn btn-primary btn-icon btn-circle btn-lg""><i class=""fab fa-facebook-f""></i></a>
							<a href=""javascript:;"" class=""btn btn-info btn-icon btn-circle btn-lg""><i class=""fab fa-twitter""></i></a>
							<a href=""javascript:;"" class=""btn btn-inverse btn-icon btn-circle btn-lg""><i class=""fab fa-stack-overflow""></i></a>
						</p>
						<p>
							<a href=""javascript:;"" class=""btn btn-default btn-icon btn-circle btn-sm""><i class=""fa fa-expand""></i></a>
							<a href=""javascript:;"" class=""btn btn-success btn-icon btn-circle btn-sm""><i class=""fa fa-redo""></i></a>
							<a href=""javascript:;"" class=""btn btn-warning btn-icon btn-circle btn-sm""><i class=""fa fa-minus""></i></");
            WriteLiteral(@"a>
							<a href=""javascript:;"" class=""btn btn-danger btn-icon btn-circle btn-sm""><i class=""fa fa-times""></i></a>
							<a href=""javascript:;"" class=""btn btn-primary btn-icon btn-circle btn-sm""><i class=""fab fa-facebook-f""></i></a>
							<a href=""javascript:;"" class=""btn btn-info btn-icon btn-circle btn-sm""><i class=""fab fa-twitter""></i></a>
							<a href=""javascript:;"" class=""btn btn-inverse btn-icon btn-circle btn-sm""><i class=""fab fa-stack-overflow""></i></a>
						</p>
					</div>
					<div class=""col-md-6"">
						<p>
							<a href=""javascript:;"" class=""btn btn-default btn-icon btn-circle""><i class=""fa fa-expand""></i></a>
							<a href=""javascript:;"" class=""btn btn-success btn-icon btn-circle""><i class=""fa fa-redo""></i></a>
							<a href=""javascript:;"" class=""btn btn-warning btn-icon btn-circle""><i class=""fa fa-minus""></i></a>
							<a href=""javascript:;"" class=""btn btn-danger btn-icon btn-circle""><i class=""fa fa-times""></i></a>
							<a href=""javascript:;"" class=""btn btn-primary btn-");
            WriteLiteral(@"icon btn-circle""><i class=""fab fa-facebook-f""></i></a>
							<a href=""javascript:;"" class=""btn btn-info btn-icon btn-circle""><i class=""fab fa-twitter""></i></a>
							<a href=""javascript:;"" class=""btn btn-inverse btn-icon btn-circle""><i class=""fab fa-stack-overflow""></i></a>
						</p>
						<p>
							<a href=""javascript:;"" class=""btn btn-default btn-icon btn-circle btn-xs""><i class=""fa fa-expand""></i></a>
							<a href=""javascript:;"" class=""btn btn-success btn-icon btn-circle btn-xs""><i class=""fa fa-redo""></i></a>
							<a href=""javascript:;"" class=""btn btn-warning btn-icon btn-circle btn-xs""><i class=""fa fa-minus""></i></a>
							<a href=""javascript:;"" class=""btn btn-danger btn-icon btn-circle btn-xs""><i class=""fa fa-times""></i></a>
							<a href=""javascript:;"" class=""btn btn-primary btn-icon btn-circle btn-xs""><i class=""fab fa-facebook-f""></i></a>
							<a href=""javascript:;"" class=""btn btn-info btn-icon btn-circle btn-xs""><i class=""fab fa-twitter""></i></a>
							<a href=""javascript:;"" cl");
            WriteLiteral(@"ass=""btn btn-inverse btn-icon btn-circle btn-xs""><i class=""fab fa-stack-overflow""></i></a>
						</p>
					</div>
				</div>
			</div>
			<!-- end panel-body -->
			<!-- bgine hljs-wrapper -->
			<div class=""hljs-wrapper"">
				<pre><code class=""html"">&lt;a href=""#"" class=""btn btn-default btn-icon btn-circle btn-lg""&gt;
  &lt;i class=""fa fa-expand""&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;a href=""#"" class=""btn btn-default btn-icon btn-circle""&gt;
  &lt;i class=""fa fa-expand""&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;a href=""#"" class=""btn btn-default btn-icon btn-circle btn-sm""&gt;
  &lt;i class=""fa fa-expand""&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;a href=""#"" class=""btn btn-default btn-icon btn-circle btn-xs""&gt;
  &lt;i class=""fa fa-expand""&gt;&lt;/i&gt;
&lt;/a&gt;</code></pre>
			</div>
			<!-- end hljs-wrapper -->
		</div>
		<!-- end panel -->
	</div>
	<!-- end col-6 -->
</div>
<!-- end row -->
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
