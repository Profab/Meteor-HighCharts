## Meteor Wrapper for HighCharts with a helper

Add to your Meteor app

```
meteor add maazalik:highcharts
```

## Instructions

The plugin comes with a helper that can be used to quickly generate charts

```
// myTemplate.html
{{> highchart style="width:100%;height:100%" class="whatever" id="test" options=topGenresChart}}
```

You can put any attribute on the ```{{> highchart}}``` as if it was an HTML tag, however, an ```id``` (string) attribute and ```options``` (object) attribute is _REQUIRED_, if not, a ```console.log``` will complain at you.

The `chartObject` basically takes the object that you would normally define using highCharts, example below:

```
// myTemplate.js
Template.myTemplate.topGenresChart = function() {
	return {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: "Bob's top genres"
		},
		tooltip: {
			pointFormat: '<b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					},
					connectorColor: 'silver'
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'genre',
			data: [
				['Adventure',   45.0],
				['Action',       26.8],
				['Ecchi',   12.8],
				['Comedy',    8.5],
				['Yuri',     6.2]
			]
		}]
	};
};


```

## Examples
A set of running examples can be found [here](http://highcharts-demo.meteor.com/) and the source can be found [here](https://github.com/jhuenges/highcharts-demo).

## License (Highcharts)

Highcharts is free for personal and non-profit projects. For other purposes click [here](http://shop.highsoft.com/highcharts.html).


Compatible with Meteor V0.9 and above!
