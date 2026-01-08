fetch('data/your-data.csv')
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\n').slice(1);
      const labels = [];
      const values = [];

      rows.forEach(row => {
        const cols = row .split(',');
        labels.push(cols[0]);
        values.push(parsefloat(cols[1]));
      });
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
        labels: ['A', 'B', 'C', 'D', 'E']
        datasets: [{
            label: 'Chocolate Sales'
            data: {12, 19, 3, 5, 2}
            borderWidth: 1,
            backgroundColor: ['#ff6384', '#25a5faff', '#ffcd56', '#4bc0c0',]
          }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
              }
            }
         });

         