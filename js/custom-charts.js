
// Set up the chart
const chart1 = new Highcharts.Chart({
    chart: {
        renderTo: 'container-3d',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: 'Количество наших пользователей'
    },
    subtitle: {
        text: 'По данным собственных исследований'
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
});

function showValues() {
    document.getElementById('alpha-value').innerHTML = chart1.options.chart.options3d.alpha;
    document.getElementById('beta-value').innerHTML = chart1.options.chart.options3d.beta;
    document.getElementById('depth-value').innerHTML = chart1.options.chart.options3d.depth;
}

// Activate the sliders
document.querySelectorAll('#sliders input').forEach(input => input.addEventListener('input', e => {
    chart1.options.chart.options3d[e.target.id] = parseFloat(e.target.value);
    showValues();
    chart1.redraw(false);
}));

showValues();




//pie chart
var clrs = Highcharts.getOptions().colors;
var pieColors = [clrs[2], clrs[0], clrs[3], clrs[1], clrs[4]];

// Get a default pattern, but using the pieColors above.
// The i-argument refers to which default pattern to use
function getPattern(i) {
    return {
        pattern: Highcharts.merge(Highcharts.patterns[i], {
            color: pieColors[i]
        })
    };
}

// Get 5 patterns
var patterns = [0, 1, 2, 3, 4].map(getPattern);

var chart = Highcharts.chart('pie-container', {
    chart: {
        type: 'pie'
    },

    title: {
        text: 'Primary desktop/laptop screen readers'
    },

    subtitle: {
        text: 'Source: WebAIM. Click on point to visit official website'
    },

    colors: patterns,

    tooltip: {
        valueSuffix: '%',
        borderColor: '#8ae'
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                connectorColor: '#777',
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            point: {
                events: {
                    click: function () {
                        window.location.href = this.website;
                    }
                }
            },
            cursor: 'pointer',
            borderWidth: 3
        }
    },

    series: [{
        name: 'Screen reader usage',
        data: [{
            name: 'NVDA',
            y: 40.6,
            website: 'https://www.nvaccess.org',
            accessibility: {
                description: 'This is the most used desktop screen reader'
            }
        }, {
            name: 'JAWS',
            y: 40.1,
            website: 'https://www.freedomscientific.com/Products/Blindness/JAWS'
        }, {
            name: 'VoiceOver',
            y: 12.9,
            website: 'http://www.apple.com/accessibility/osx/voiceover'
        }, {
            name: 'ZoomText',
            y: 2,
            website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader'
        }, {
            name: 'Other',
            y: 4.4,
            website: 'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php'
        }]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                plotOptions: {
                    series: {
                        dataLabels: {
                            format: '<b>{point.name}</b>'
                        }
                    }
                }
            }
        }]
    }
});

// Toggle patterns enabled
var clrs = Highcharts.getOptions().colors;
var pieColors = [clrs[2], clrs[0], clrs[3], clrs[1], clrs[4]];

// Get a default pattern, but using the pieColors above.
// The i-argument refers to which default pattern to use
function getPattern(i) {
    return {
        pattern: Highcharts.merge(Highcharts.patterns[i], {
            color: pieColors[i]
        })
    };
}

// Get 5 patterns
var patterns = [0, 1, 2, 3, 4].map(getPattern);

var chart = Highcharts.chart('pie-container', {
    chart: {
        type: 'pie'
    },

    title: {
        text: 'Покупка подписки'
    },

    subtitle: {
        text: 'Источник: Собственное исследование'
    },

    colors: patterns,

    tooltip: {
        valueSuffix: '%',
        borderColor: '#8ae'
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                connectorColor: '#777',
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            point: {
                events: {
                    click: function () {
                        window.location.href = this.website;
                    }
                }
            },
            cursor: 'pointer',
            borderWidth: 3
        }
    },

    series: [{
        name: 'Screen reader usage',
        data: [{
            name: 'Покупают тариф СТАНДАРТ, а затем переходят на РАСШИРЕННЫЙ',
            y: 40.6,
            accessibility: {
                description: 'This is the most used desktop screen reader'
            }
        }, {
            name: 'Покупают тариф СТАНДАРТ, а затем переходят на ПРО',
            y: 40.1
        }, {
            name: 'Покупают РАСШИРЕННЫЙ тариф',
            y: 12.9
        }, {
            name: 'Не покупают подписку',
            y: 2
        }, {
            name: 'Сразу покупают тариф ПРО',
            y: 4.4
        }]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                plotOptions: {
                    series: {
                        dataLabels: {
                            format: '<b>{point.name}</b>'
                        }
                    }
                }
            }
        }]
    }
});

// Toggle patterns enabled
document.getElementById('patterns-enabled').onclick = function () {
    chart.update({
        colors: this.checked ? patterns : pieColors
    });
};
