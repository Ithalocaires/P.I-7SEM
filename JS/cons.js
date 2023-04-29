
//Dados fictícios de consumo de água
const dados = [
  { data: '2023-04-23', consumo: 10 },
  { data: '2023-04-24', consumo: 20 },
  { data: '2023-04-25', consumo: 15 },
  { data: '2023-04-26', consumo: 5 },
  { data: '2023-04-27', consumo: 25 },
  { data: '2023-04-28', consumo: 12 },
  { data: '2023-04-29', consumo: 18 },
  { data: '2023-04-30', consumo: 8 },
  { data: '2023-05-01', consumo: 22 },
  { data: '2023-05-02', consumo: 17 },
  { data: '2023-05-03', consumo: 14 },
  { data: '2023-05-04', consumo: 6 },
  { data: '2023-05-05', consumo: 24 },
  { data: '2023-05-06', consumo: 13 },
  { data: '2023-05-07', consumo: 19 },
  { data: '2023-05-08', consumo: 9 },
  { data: '2023-05-09', consumo: 23 },
  { data: '2023-05-10', consumo: 16 },
  { data: '2023-05-11', consumo: 11 },
  { data: '2023-05-12', consumo: 7 },
  { data: '2023-05-13', consumo: 21 },
  { data: '2023-05-14', consumo: 14 },
  { data: '2023-05-15', consumo: 20 }
];

// Cria o gráfico com os dados iniciais
let ctx = document.getElementById('chart').getContext('2d');
let chart = new Chart(ctx, config);

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
	type: 'bar',
	data: {
		labels: [],
		datasets: [{
			label: 'Consumo de água',
			data: [],
			fill: false,
			borderColor: 'blue',
			tension: 0.1
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
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
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Consumo (litros)'
				}
			}]	
		}
	}
};



