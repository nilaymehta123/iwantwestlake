var vcGridStylePagination=null;!function(t){vcGridStylePagination=function(i){this.grid=i,this.settings=i.settings,this.$el=!1,this.$content=!1,this.filterValue=null,this.isLoading=!1,this.htmlCache=!1,this.$loader=t('<div class="vc_grid-loading"></div>'),this.$firstSlideItems,this.init()},vcGridStylePagination.prototype.init=function(){_.bindAll(this,"addItems","initCarousel")},vcGridStylePagination.prototype.setIsLoading=function(){this.$loader.show(),this.isLoading=!0},vcGridStylePagination.prototype.unsetIsLoading=function(){this.isLoading=!1,this.$loader.hide()},vcGridStylePagination.prototype.render=function(){this.$el=this.grid.$el,this.$content=this.$el,this.$content.append(this.$loader),this.setIsLoading(),this.grid.ajax({},this.addItems)},vcGridStylePagination.prototype.filter=function(i){if(i=_.isUndefined(i)||"*"===i?"":i,this.filterValue==i)return!1;var n;this.$content.data("owl.vccarousel")&&(this.$content.off("initialized.owl.vccarousel"),this.$content.off("changed.owl.vccarousel"),this.$content.data("vcPagination")&&this.$content.data("vcPagination").twbsPagination("destroy"),this.$content.data("owl.vccarousel").destroy()),this.$content.html(""),n=t(".vc_grid-item",this.htmlCache),""!==i&&(n=n.filter(i)),this.filterValue=i,this.buildSlides(n.addClass("vc_visible-item"))},vcGridStylePagination.prototype.buildSlides=function(i){var n,s,e,a=parseInt(this.settings.items_per_page);for(n=0,s=i.length;s>n;n+=a)e=i.slice(n,n+a),t('<div class="vc_pageable-slide-wrapper">').append(t(e)).appendTo(this.$content);this.$content.find(".vc_pageable-slide-wrapper:first").imagesLoaded(this.initCarousel)},vcGridStylePagination.prototype.addItems=function(i){return this.unsetIsLoading(),t(i).appendTo(this.$el),this.htmlCache===!1&&(this.htmlCache=i),this.$content=this.$el.find('[data-vc-pageable-content="true"]'),this.$content.addClass("owl-carousel vc_grid-owl-theme"),this.grid.initFilter(),this.filter(),window.vc_prettyPhoto(),!1},vcGridStylePagination.prototype.initCarousel=function(){if(t.fn.vcOwlCarousel){var i,n=this;i=this.$content.data("owl.vccarousel"),i&&i.destroy(),this.$content.on("initialized.owl.vccarousel",function(i){if(n.settings.paging_design.indexOf("pagination")>-1){var s=i.relatedTarget,e=s.items().length,a=t("<div></div>").addClass("vc_grid-pagination").appendTo(n.$el);a.twbsPagination({totalPages:e,visiblePages:n.settings.visible_pages,onPageClick:function(t,i){s.to(i-1)},paginationClass:"vc_grid-pagination-list vc_grid-"+n.settings.paging_design+" vc_grid-pagination-color-"+n.settings.paging_color,nextClass:"vc_grid-next",first:e>20?" ":!1,last:e>20?" ":!1,prev:e>5?" ":!1,next:e>5?" ":!1,prevClass:"vc_grid-prev",lastClass:"vc_grid-last",loop:n.settings.loop,firstClass:"vc_grid-first",pageClass:"vc_grid-page",activeClass:"vc_grid-active",disabledClass:"vc_grid-disabled"}),t(this).data("vcPagination",a),n.$content.on("changed.owl.vccarousel",function(i){var n=t(this).data("vcPagination"),s=n.data("twbsPagination");s.render(s.getPages(1+i.page.index)),s.setupEvents()}),window.vc_prettyPhoto()}}).vcOwlCarousel({items:1,loop:this.settings.loop,margin:10,nav:!0,navText:["",""],navContainerClass:"vc_grid-owl-nav vc_grid-owl-nav-color-"+this.settings.arrows_color,dotClass:"vc_grid-owl-dot",dotsClass:"vc_grid-owl-dots vc_grid-"+this.settings.paging_design+" vc_grid-owl-dots-color-"+this.settings.paging_color,navClass:["vc_grid-owl-prev "+this.settings.arrows_design+" vc_grid-nav-prev-"+this.settings.arrows_position,"vc_grid-owl-next "+this.settings.arrows_design.replace("_left","_right")+" vc_grid-nav-next-"+this.settings.arrows_position],animateIn:"none"!=this.settings.animation_in?this.settings.animation_in:!1,animateOut:"none"!=this.settings.animation_out?this.settings.animation_out:!1,autoHeight:!0,autoplay:this.settings.auto_play===!0,autoplayTimeout:this.settings.speed,callbacks:!0,onTranslated:function(){setTimeout(function(){jQuery(window).trigger("grid:items:added",n.$el)},750)},onRefreshed:function(){setTimeout(function(){jQuery(window).trigger("grid:items:added",n.$el)},750)}})}}}(window.jQuery);