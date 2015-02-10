Template.highchart.created = function() {
  this.rendered = new ReactiveVar(false);
};

Template.highchart.rendered = function() {
  var self = this;
  var context = self.data;
  if (context.autorun && _.isFunction(context.autorun)) {
    self.autorun(context.autorun.bind(self));
    self.chart = new Highcharts.Chart(context.options);
  }
  self.rendered.set(true);
};

Template.highchart.helpers({
  init: function() {
    var tpl = Template.instance();
    if (!this.autorun && tpl.rendered.get()) {
      tpl.chart && tpl.chart.destroy();
      tpl.chart = new Highcharts.Chart(this.options);
    }
  },
  atts: function () {
    return _.omit(this, 'options', 'autorun');
  }
});