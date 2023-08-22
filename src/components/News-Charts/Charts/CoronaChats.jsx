import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { coronaSeries } from '../data/corona';

const CoronaChats = () => {
	const options = {
		options: {
			chart: {
				height: 350,
				type: 'bar'
			},
			plotOptions: {
				bar: {
					horizontal: true
				}
			},
			colors: [ '#00E396' ],
			dataLabels: {
				formatter: function(val, opt) {
					const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

					if (goals && goals.length) {
						return `${val} / ${goals[0].value}`;
					}
					return val;
				}
			},
			legend: {
				show: true,
				showForSingleSeries: true,
				customLegendItems: [ 'Actual', 'Expected' ],
				markers: {
					fillColors: [ '#00E396', '#775DD0' ]
				}
			}
		}
	};
	return (
		<div>
			<ReactApexChart options={options} series={coronaSeries} type="bar" height={450} />
		</div>
	);
};

export default CoronaChats;
