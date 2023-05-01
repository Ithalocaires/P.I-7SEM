<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>;

const dados = [
  { data: '23-04-2023', consumo: 10 },
  { data: '24-04-2023', consumo: 20 },
  { data: '25-04-2023', consumo: 15 },
  { data: '26-04-2023', consumo: 5 },
  { data: '27-04-2023', consumo: 25 },
  { data: '28-04-2023', consumo: 12 },
  { data: '29-04-2023', consumo: 18 },
  { data: '30-04-2023', consumo: 8 },
  { data: '01-05-2023', consumo: 22 },
  { data: '02-05-2023', consumo: 17 },
  { data: '03-05-2023', consumo: 14 },
  { data: '04-05-2023', consumo: 6 },
  { data: '05-05-2023', consumo: 24 },
  { data: '06-05-2023', consumo: 13 },
  { data: '07-05-2023', consumo: 19 },
  { data: '08-05-2023', consumo: 9 },
  { data: '09-05-2023', consumo: 23 },
  { data: '10-05-2023', consumo: 16 },
  { data: '11-05-2023', consumo: 11 },
  { data: '12-05-2023', consumo: 7 },
  { data: '13-05-2023', consumo: 21 },
  { data: '14-05-2023', consumo: 14 },
  { data: '15-05-2023', consumo: 20 }
];

// Função para filtrar os dados
function filtrarDados() {
	const filtro = document.getElementById('filtro').value;
	let dadosFiltrados = [];

	switch(filtro) {
		case 'dia':
			dadosFiltrados = dados.filter(dado => moment(dado.data).isSame(moment(), 'day'));
			break;
		case 'semana':
			dadosFiltrados = dados.filter(dado => moment(dado.data).isSame(moment(), 'week'));
			break;
		case 'mes':
			dadosFiltrados = dados.filter(dado => moment(dado.data).isSame(moment(), 'month'));
			break;
	}

	config.data.labels = dadosFiltrados.map(dado => dado.data);
	config.data.datasets[0].data = dadosFiltrados.map(dado => dado.consumo);

  // Atualiza o gráfico com os dados filtrados
  chart.update(); 
}

// Adiciona o evento de mudança do filtro
document.getElementById('filtro').addEventListener('change', filtrarDados);

const config = {
	type: 'line',
	data: {
		labels: [],
		datasets: [{
			label: 'Consumo de água',
			data: [dados],
			fill: false,
			borderColor: 'blue',
			tension: 0.1
		}]
	},
	options: {
		legend:{
			display: true,
			position: 'bottom',
			fontSize: 15,
		},
		title:{
			display: true,
			text: 'Litros de água utilizados',
		},
		tooltips:{
			enable: true,
			intersect: true,
		},
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxis: [{
				type: 'time',
				time: {
					unit: 'day',
					displayFormats: {
						day: 'DD/MM/YYYY',
						week: 'DD/MM/YYYY',
						month: 'MM/YYYY'
					},
					tooltipFormat: 'DD/MM/YYYY',
					min: moment().subtract(6, 'day'),
					max: moment()
				},
				gridLines: {
					display: false
				},
				ticks: {
					maxRotation: 0,
					autoSkip: true,
					maxTicksLimit: 7,
					unit: 'day',
					display: true,
					source: 'auto',
					precision: 0,
					min: moment().subtract(6, 'day'),
					max: moment(),
					minUnit: 'day',
					parser: 'DD/MM/YYYY',
					tooltipFormat: 'DD/MM/YYYY',
					stepSize: 1,
					unitStepSize: 1,
					minor: {
						unit: 'day'
					},
					major: {
						unit: 'week'
					},
					scaleLabel: {
						display: true,
						labelString: 'Data'
					}
				}
			}],
			yAxis: [{
				scaleLabel: {
					display: true,
					labelString: 'Consumo (litros)'
				}
			}]	
		}
	}
};

// Cria o gráfico com os dados iniciais
let ctx = document.getElementById('chart').getContext('2d');
let chart = new Chart(ctx, config);




