Template.highchart.rendered = function() {
	var self = this;
	var context = self.data;
	if (context.id) {
		var options = context.options;
		if (!_.isEmpty(options) && _.isObject(options)) {
			$('#' + context.id).highcharts(options);
		} else {
			console.log('Highcharts did not find a valid options object in your data context: ', context);
		}
	} else {
		console.log('Highcharts did not find id attribute in your data context: ', context);
	}
};

Template.highchart.helpers({
	atts: function () {
		var self = this;
		return _.omit(this, 'options');
	}
});