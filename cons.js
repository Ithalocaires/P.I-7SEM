//Dados fictícios de consumo de água
const dailyData = [20, 40, 30, 50, 10, 15, 25];
const monthlyData = [400, 700, 600, 800, 300, 450, 500, 550, 900, 750, 650, 850];

// Configuração do gráfico diário
const dailyConfig = {
  type: 'line',
  data: {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [{
      label: 'Consumo de Água Diário',
      data: dailyData,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {}
};

// Configuração do gráfico mensal
const monthlyConfig = {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
      label: 'Consumo de Água Mensal',
      data: monthlyData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1
    }]
  },
  options: {}
};

// Criação dos gráficos
const dailyChart = new Chart(document.getElementById('daily-chart'), dailyConfig);
const monthlyChart = new Chart(document.getElementById('monthly-chart'), monthlyConfig);