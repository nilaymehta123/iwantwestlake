!function(t){"use strict";vc.events.on("app.render",function(){vcPointer&&vcPointer.pointers&&vcPointer.pointers.length&&_.each(vcPointer.pointers,function(t){new vcPointersController(t,vcPointer.texts)},this)}),vc.events.on("vcPointer:show",function(){vc.app.disableFixedNav=!0}),vc.events.on("vcPointer:close",function(){vc.app.disableFixedNav=!1}),window.vcPointersEditorsTourEvents=function(){var t;return t=this.pointer.domCloseBtn(),t.bind("click.vcPointer",this.clickEventClose),this.dismissMessages(),t},window.vcPointersShowOnContentElementControls=function(){this.pointer&&t(this.pointer.target).length?(t(this.pointer.target).parent().addClass("vc-with-vc-pointer-controls"),this.show(),t("#wpb_visual_composer").one("click",function(){t(".vc-with-vc-pointer-controls").removeClass("vc-with-vc-pointer-controls")})):vc.events.once("shortcodes:add",vcPointersShowOnContentElementControls,this)},window.vcPointersSetInIFrame=function(){this.pointerData&&vc.frame_window.jQuery(this.pointerData.target).length?(this.pointer=new vc.frame_window.vcPointerMessage(this.pointerData.target,this.buildOptions(this.pointerData.options),this._texts),this.show(),this.pointer.$pointer.closest(".vc_controls").addClass("vc-with-vc-pointer-controls")):vc.events.once("shortcodeView:ready",vcPointersSetInIFrame,this)},window.vcPointersCloseInIFrame=function(){var t,n;t=this,n=vc.frame_window.jQuery,n("body").one("click",function(){n(".vc-with-vc-pointer-controls").removeClass("vc-with-vc-pointer-controls"),t.nextOnEvent()})}}(window.jQuery);