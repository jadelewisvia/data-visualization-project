const ctx = document.getElementById('myChart')

new Chart(ctx, {
    type:'bar',
    data: {
        labels: ['A', 'B', 'C', 'D', 'E']
        datasets: [{
            label: 'Example Data'
            data: 