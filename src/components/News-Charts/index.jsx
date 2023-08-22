import React from 'react';
import CoronaChats from './Charts/CoronaChats';
import { Container, Col, Row } from 'react-bootstrap';
import SideSlider from '../Navbars/Side-Slider/Side-Slider';

const ApexChart = () => {
	return (
		<Container>
			<Row>
				<Col lg={1}>
					<SideSlider />
				</Col>
				<Col>
					<CoronaChats />
				</Col>
			</Row>
		</Container>
	);
};

export default ApexChart;

// https://apexcharts.com/javascript-chart-demos/bar-charts/bar-with-markers/
