function setCookie(e,t,n){var r=new Date;r.setDate(r.getDate()+n);var i=encodeURIComponent(t)+(null===n?"":"; expires="+r.toUTCString());document.cookie=e+"="+i}function getCookie(e){var t,n,r,i=document.cookie.split(";");for(t=0;t<i.length;t++)if(n=i[t].substr(0,i[t].indexOf("=")),r=i[t].substr(i[t].indexOf("=")+1),n=n.replace(/^\s+|\s+$/g,""),n==e)return decodeURIComponent(r)}function vc_toTitleCase(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function vc_convert_column_size(e){var t="vc_col-sm-",n=e?e.split("/"):[1,1],r=_.range(1,13),i=!_.isUndefined(n[0])&&_.indexOf(r,parseInt(n[0],10))>=0?parseInt(n[0],10):!1,a=!_.isUndefined(n[1])&&_.indexOf(r,parseInt(n[1],10))>=0?parseInt(n[1],10):!1;return i!==!1&&a!==!1?t+12*i/a:t+"12"}function vc_column_size(e){return vc_convert_column_size(e)}function vc_convert_column_span_size(e){return e=e.replace(/^vc_/,""),"span12"==e?"1/1":"span11"==e?"11/12":"span10"==e?"5/6":"span9"==e?"3/4":"span8"==e?"2/3":"span7"==e?"7/12":"span6"==e?"1/2":"span5"==e?"5/12":"span4"==e?"1/3":"span3"==e?"1/4":"span2"==e?"1/6":"span1"==e?"1/12":!1}function vc_get_column_mask(e){var t,n=e.split("_"),r=n.length,i=0;for(t in n)if(!isNaN(parseFloat(n[t]))&&isFinite(n[t])){var a=n[t].match(/(\d{1,2})(\d{1,2})/);i=_.reduce(a.slice(1),function(e,t){return e+parseInt(t,10)},i)}return r+""+i}function vc_guid(){return VCS4()+VCS4()+"-"+VCS4()}function VCS4(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function vc_globalHashCode(e){var t=0;if(0==e.length)return t;for(i=0;i<e.length;i++)char=e.charCodeAt(i),t=(t<<5)-t+char,t&=t;return t}function vcChartParamAfterAddCallback(e,t){if(("new"===t||"clone"===t)&&e.find(".vc_control.column_toggle").click(),"new"===t){var n,r,i,a,c,o;for(c=["white","black"],r=e.find("[name=values_color]"),i=r.find("option"),n=0;;){if(n++>100)break;if(a=Math.floor(Math.random()*i.length),-1===jQuery.inArray(i.eq(a).val(),c)){i.eq(a).prop("selected",!0),r.change();break}}o=["#5472d2","#00c1cf","#fe6c61","#8d6dc4","#4cadc9","#cec2ab","#50485b","#75d69c","#f7be68","#5aa1e3","#6dab3c","#f4524d","#f79468","#b97ebb","#ebebeb","#f7f7f7","#0088cc","#58b9da","#6ab165","#ff9900","#ff675b","#555555"],a=Math.floor(Math.random()*o.length),e.find("[name=values_custom_color]").val(o[a]).change()}}!function(e){e.expr[":"].containsi=function(e,t,n){return jQuery(e).text().toUpperCase().indexOf(n[3].toUpperCase())>=0},e("#vc_license-activation-close").click(function(t){t.preventDefault(),window.setCookie("vchideactivationmsg",1,14),e(this).parent().slideUp()}),window.Vc_postSettingsEditor=Backbone.View.extend({$editor:!1,sel:"wpb_csseditor",ace_enabled:!1,initialize:function(e){e&&e.length>0&&(this.sel=e),this.ace_enabled=!0},setTextarea:function(){this.ace_enabled=!1},setAce:function(){this.ace_enabled=!0},aceEnabled:function(){return this.ace_enabled&&window.ace&&window.ace.edit},setEditor:function(e){return this.aceEnabled()?this.setEditorAce(e):this.setEditorTextarea(e),this.$editor},focus:function(){if(this.aceEnabled()){this.$editor.focus();var e=this.$editor.session.getLength();this.$editor.gotoLine(e,this.$editor.session.getLine(e-1).length)}else this.$editor.focus()},setEditorAce:function(e){this.$editor||(this.$editor=ace.edit(this.sel),this.$editor.getSession().setMode("ace/mode/css"),this.$editor.setTheme("ace/theme/chrome")),this.$editor.setValue(e),this.$editor.clearSelection(),this.$editor.focus();var t=this.$editor.getSession().getLength();return this.$editor.gotoLine(t,this.$editor.getSession().getLine(t-1).length),this.$editor},setEditorTextarea:function(t){return this.$editor||(this.$editor=e("<textarea></textarea>").css({width:"100%",height:"100%",minHeight:"300px"}),e("#"+this.sel).html("").append(this.$editor).css({overflowLeft:"hidden",width:"100%",height:"100%"})),this.$editor.val(t),this.$editor.focus(),this.$editor.parent().css({overflow:"auto"}),this.$editor},setSize:function(){var t=e(window).height()-380;this.aceEnabled()?e("#"+this.sel).css({height:t,minHeight:t}):(this.$editor.parent().css({height:t,minHeight:t}),this.$editor.css({height:"98%",width:"98%"}))},getEditor:function(){return this.$editor},getValue:function(){return this.aceEnabled()?this.$editor.getValue():this.$editor.val()}})}(window.jQuery);var wpb_grid_post_types_for_taxonomies_handler=function(){var e=this.$content.find(".wpb_el_type_taxonomies label[data-post-type]"),t=jQuery;e.hide(),t(".grid_posttypes:checkbox",this.$content).change(function(){t(this).is(":checked")?e.filter("[data-post-type="+t(this).val()+"]").show():e.filter("[data-post-type="+t(this).val()+"]").hide()}).each(function(){t(this).is(":checked")&&e.filter("[data-post-type="+t(this).val()+"]").show()})},wpb_single_image_img_link_dependency_callback=function(){var e=(this.$content.find("#img_link_large-yes"),jQuery),t=this.$content.find("[name=img_link_target]").parents(".vc_shortcode-param:first"),n=this.model.get("params"),r="",i=e(".wpb-edit-form [name=link]");this.$content.find("#img_link_large-yes").change(function(){var n=e(this).is(":checked");n?t.show():i.val().length>0&&"http://"!==i.val()?t.show():t.hide()});var a=_.debounce(function(){var n=e(this).val();n.length>0&&"http://"!==n&&"https://"!==n?t.show():t.hide()},300);i.keyup(a).trigger("keyup"),this.$content.find("#img_link_large-yes").is(":checked")?t.show():i.length&&i.val().length>0?t.show():t.hide(),n.img_link&&n.img_link.length&&!n.link&&(r=n.img_link,r.match(/^https?\:\/\//)||(r="http://"+r),i.val(r)),vc.edit_form_callbacks.push(function(){this.params.img_link&&(this.params.img_link="")})},vc_button_param_target_callback=function(){var e=jQuery,t=this.$content.find("[name=target]").parents(".vc_shortcode-param:first"),n=e(".wpb-edit-form [name=href]"),r=_.debounce(function(){var n=e(this).val();n.length>0&&"http://"!==n&&"https://"!==n?t.show():t.hide()},300);n.keyup(r).trigger("keyup")},vc_cta_button_param_target_callback=function(){var e=jQuery,t=this.$content.find("[name=target]").parents(".vc_shortcode-param:first"),n=e(".wpb-edit-form [name=href]"),r=_.debounce(function(){var n=e(this).val();n.length>0&&"http://"!==n&&"https://"!==n?t.show():t.hide()},300);n.keyup(r).trigger("keyup")},vc_grid_exclude_dependency_callback=function(){var e=jQuery,t=e(".wpb_vc_param_value[name=exclude]",this.$content),n=t.data("object"),r=e('select.wpb_vc_param_value[name="post_type"]',this.$content),i=r.val();n.source_data=function(e){return{query:{query:i,term:e.term}}},n.source_data_val=i,r.change(function(){i=e(this).val(),n.source_data_val!=i&&(n.source_data=function(e){return{query:{query:i,term:e.term}}},n.$el.data("uiAutocomplete").destroy(),n.$sortable_wrapper.find(".vc_data").remove(),n.render(),n.source_data_val=i)})},vcGridFilterExcludeCallBack=function(){var e,t,n,r,i=jQuery;e=i(".wpb_vc_param_value[name=filter_source]",this.$content),r=e.val(),t=i(".wpb_vc_param_value[name=exclude_filter]",this.$content),n=t.data("object"),e.change(function(){var e=i(this);r!==e.val()&&n.clearValue(),n.source_data=function(){return{vc_filter_by:e.val()}}}).trigger("change")},vcChartCustomColorDependency=function(){var e,t,n;e=jQuery,t=e(".wpb_vc_param_value[name=style]",this.$content),n=this.$content,t.on("change",function(){var t;t=e(this).val(),n.toggleClass("vc_chart-edit-form-custom-color","custom"===t)}),t.trigger("change")},vc_wpnop=function(e){var t,n,r=!1,i=!1;return(-1!=e.indexOf("<pre")||-1!=e.indexOf("<script"))&&(r=!0,e=e.replace(/<(pre|script)[^>]*>[\s\S]+?<\/\1>/g,function(e){return e=e.replace(/<br ?\/?>(\r\n|\n)?/g,"<wp-temp-lb>"),e.replace(/<\/?p( [^>]*)?>(\r\n|\n)?/g,"<wp-temp-lb>")})),-1!=e.indexOf("[caption")&&(i=!0,e=e.replace(/\[caption[\s\S]+?\[\/caption\]/g,function(e){return e.replace(/<br([^>]*)>/g,"<wp-temp-br$1>").replace(/[\r\n\t]+/,"")})),t="blockquote|ul|ol|li|table|thead|tbody|tfoot|tr|th|td|div|h[1-6]|p|fieldset",e=e.replace(new RegExp("\\s*</("+t+")>\\s*","g"),"</$1>\n"),e=e.replace(new RegExp("\\s*<((?:"+t+")(?: [^>]*)?)>","g"),"\n<$1>"),e=e.replace(/(<p [^>]+>.*?)<\/p>/g,"$1</p#>"),e=e.replace(/<div( [^>]*)?>\s*<p>/gi,"<div$1>\n\n"),e=e.replace(/\s*<p>/gi,""),e=e.replace(/\s*<\/p>\s*/gi,"\n\n"),e=e.replace(/\n[\s\u00a0]+\n/g,"\n\n"),e=e.replace(/\s*<br ?\/?>\s*/gi,"\n"),e=e.replace(/\s*<div/g,"\n<div"),e=e.replace(/<\/div>\s*/g,"</div>\n"),e=e.replace(/\s*\[caption([^\[]+)\[\/caption\]\s*/gi,"\n\n[caption$1[/caption]\n\n"),e=e.replace(/caption\]\n\n+\[caption/g,"caption]\n\n[caption"),n="blockquote|ul|ol|li|table|thead|tbody|tfoot|tr|th|td|h[1-6]|pre|fieldset",e=e.replace(new RegExp("\\s*<((?:"+n+")(?: [^>]*)?)\\s*>","g"),"\n<$1>"),e=e.replace(new RegExp("\\s*</("+n+")>\\s*","g"),"</$1>\n"),e=e.replace(/<li([^>]*)>/g,"	<li$1>"),-1!=e.indexOf("<hr")&&(e=e.replace(/\s*<hr( [^>]*)?>\s*/g,"\n\n<hr$1>\n\n")),-1!=e.indexOf("<object")&&(e=e.replace(/<object[\s\S]+?<\/object>/g,function(e){return e.replace(/[\r\n]+/g,"")})),e=e.replace(/<\/p#>/g,"</p>\n"),e=e.replace(/\s*(<p [^>]+>[\s\S]*?<\/p>)/g,"\n$1"),e=e.replace(/^\s+/,""),e=e.replace(/[\s\u00a0]+$/,""),r&&(e=e.replace(/<wp-temp-lb>/g,"\n")),i&&(e=e.replace(/<wp-temp-br([^>]*)>/g,"<br$1>")),e},vc_wpautop=function(e){var t=!1,n=!1,r="table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|select|option|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|noscript|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary";return-1!=e.indexOf("<object")&&(e=e.replace(/<object[\s\S]+?<\/object>/g,function(e){return e.replace(/[\r\n]+/g,"")})),e=e.replace(/<[^<>]+>/g,function(e){return e.replace(/[\r\n]+/g," ")}),(-1!=e.indexOf("<pre")||-1!=e.indexOf("<script"))&&(t=!0,e=e.replace(/<(pre|script)[^>]*>[\s\S]+?<\/\1>/g,function(e){return e.replace(/(\r\n|\n)/g,"<wp-temp-lb>")})),-1!=e.indexOf("[caption")&&(n=!0,e=e.replace(/\[caption[\s\S]+?\[\/caption\]/g,function(e){return e=e.replace(/<br([^>]*)>/g,"<wp-temp-br$1>"),e=e.replace(/<[a-zA-Z0-9]+( [^<>]+)?>/g,function(e){return e.replace(/[\r\n\t]+/," ")}),e.replace(/\s*\n\s*/g,"<wp-temp-br />")})),e+="\n\n",e=e.replace(/<br \/>\s*<br \/>/gi,"\n\n"),e=e.replace(new RegExp("(<(?:"+r+")(?: [^>]*)?>)","gi"),"\n$1"),e=e.replace(new RegExp("(</(?:"+r+")>)","gi"),"$1\n\n"),e=e.replace(/<hr( [^>]*)?>/gi,"<hr$1>\n\n"),e=e.replace(/\r\n|\r/g,"\n"),e=e.replace(/\n\s*\n+/g,"\n\n"),e=e.replace(/([\s\S]+?)\n\n/g,"<p>$1</p>\n"),e=e.replace(/<p>\s*?<\/p>/gi,""),e=e.replace(new RegExp("<p>\\s*(</?(?:"+r+")(?: [^>]*)?>)\\s*</p>","gi"),"$1"),e=e.replace(/<p>(<li.+?)<\/p>/gi,"$1"),e=e.replace(/<p>\s*<blockquote([^>]*)>/gi,"<blockquote$1><p>"),e=e.replace(/<\/blockquote>\s*<\/p>/gi,"</p></blockquote>"),e=e.replace(new RegExp("<p>\\s*(</?(?:"+r+")(?: [^>]*)?>)","gi"),"$1"),e=e.replace(new RegExp("(</?(?:"+r+")(?: [^>]*)?>)\\s*</p>","gi"),"$1"),e=e.replace(/\s*\n/gi,"<br />\n"),e=e.replace(new RegExp("(</?(?:"+r+")[^>]*>)\\s*<br />","gi"),"$1"),e=e.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)>)/gi,"$1"),e=e.replace(/(?:<p>|<br ?\/?>)*\s*\[caption([^\[]+)\[\/caption\]\s*(?:<\/p>|<br ?\/?>)*/gi,"[caption$1[/caption]"),e=e.replace(/(<(?:div|th|td|form|fieldset|dd)[^>]*>)(.*?)<\/p>/g,function(e,t,n){return n.match(/<p( [^>]*)?>/)?e:t+"<p>"+n+"</p>"}),t&&(e=e.replace(/<wp-temp-lb>/g,"\n")),n&&(e=e.replace(/<wp-temp-br([^>]*)>/g,"<br$1>")),e},vc_regexp_shortcode=_.memoize(function(){return RegExp("\\[(\\[?)(\\w+\\b)(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)")}),vc_isCssIdValid=function(e){var t=/^[A-Za-z]+[\w\-\:\.]*$/;return t.test(e)},vcAddShortcodeDefaultParams=function(e){var t=e.get("params");t=_.extend({},vc.getDefaults(e.get("shortcode")),t),e.set({params:t},{silent:!0})};vc.memoizeWrapper=function(e,t){var n={};return function(){var r=t?t.apply(this,arguments):arguments[0];return _.hasOwnProperty.call(n,r)||(n[r]=e.apply(this,arguments)),_.isObject(n[r])?jQuery.fn.extend(!0,{},n[r]):n[r]}},vc.events.on("shortcodes:vc_row:add:param:name:parallax shortcodes:vc_row:update:param:name:parallax",function(e,t){if(t){var n=e.get("params");n&&n.css&&(n.css=n.css.replace(/(background(\-position)?\s*\:\s*[\S]+(\s*[^\!\s]+)?)[\s*\!important]*/g,"$1"),e.set("params",n,{silent:!0}))}});