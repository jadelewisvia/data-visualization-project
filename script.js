const ctx = document.getElementById('myChart')

new Chart(ctx, {
    type:'bar',
    data: {
        labels: ['A', 'B', 'C', 'D', 'E']
        datasets: [{
            label: 'Example Data'
            data: {12, 19, 3, 5, 2}
            borderWidth: 1,
            backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0',]
          }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }