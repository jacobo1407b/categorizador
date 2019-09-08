var ctx = document.getElementById('eso').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Comisiones bancarias', 'Impuestos', 'Nominas', 'Proveedores', 'Traspaso a terceros'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#d8d8d8','#60a5f9','#bad5f5','#51d1f6','#00aae4'],
            borderColor: '#00000',
            data: [1250, 2356, 1890, 12850, 4500]
        }]
    },

    // Configuration options go here
    options: {}
});