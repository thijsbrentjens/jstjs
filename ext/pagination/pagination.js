(function($, window) {
    /**
    * jQuery manager of Bootstrap pagination div.
    */
    $.fn.pagination = function(options)
	{
        var active=$();
        var links=new Array();
        var toBeShown=0; //!< equals the number of visible elements and is auto set in the initialisation
        var lastItemShown=null;
        var onItemClicked=options.onItemClicked;
        function toggle(i,shown)
        {
            var link=links[i];
            if (link.is(':visible'))
            {
                link.parent().hide();
            }
            else if (shown<toBeShown)
            {
                link.parent().show();
                lastItemShown=i;
                shown++;
            }
            return shown;
        }
		$(this.find("a")).each(function(i,e)
						{
                            links[i]=$(e);
                            var li=links[i].parent();
                            if (links[i].is(':visible') && !li.hasClass('prev') && !li.hasClass('next')) toBeShown++;
							$(this).click(function (event)
										  {
											event.preventDefault();
                                            var clicked=$(this).parent();
                                            if (clicked.hasClass("next"))
                                            {
                                                if (!clicked.hasClass("disabled"))
                                                {
                                                    var shown=0;
                                                    if (lastItemShown==null || lastItemShown==links.length-1) lastItemShown=toBeShown-1;
                                                    for (var i=lastItemShown-toBeShown+1;i<links.length;i++) shown=toggle(i,shown);
                                                }
                                            }
                                            else if (clicked.hasClass("prev"))
                                            {
                                                if (!clicked.hasClass("disabled"))
                                                {
                                                    var shown=0;
                                                    if (lastItemShown==null || lastItemShown==toBeShown-1) lastItemShown=links.length-1;
                                                    for (var i=lastItemShown;i>=0;i--) shown=toggle(i,shown);
                                                    lastItemShown=lastItemShown+toBeShown-1;
                                                }
                                            }
                                            else
                                            {
                                                active.removeClass("active");
                                                active=clicked;
                                                active.addClass("active");
                                                if (onItemClicked !== undefined)
                                                {
                                                    onItemClicked($(this).attr('id'));
                                                }
                                            }
										  });
						});
        links.shift();
        links.pop();
        if (links.length==toBeShown)
        {
            $(this.find(".next")).addClass("disabled");
            $(this.find(".prev")).addClass("disabled");
        }
	}
})(jQuery, window);