(function($) {
	$.extend({
    tableMatch: function(selector1) {
			var table1 = $(selector1);
			var heightArray = new Array();

			table1.each(function (i, v) {
					$(this).find('tr').each(function (index, value) {
							var _this = $(this);
							if (!heightArray[index]) {
									heightArray[index] = _this.height();
							} else {
									if (heightArray[index] < _this.height()) {
											heightArray[index] = _this.height();
									}
							}
					});
			});

			table1.each(function (i, v) {
					$(this).find('tr').each(function (index, value) {
							$(this).css('height', heightArray[index] + 'px');
					});
			});
    }
  });
})(jQuery);
