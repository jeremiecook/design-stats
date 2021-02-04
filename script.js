var Airtable = require('airtable');

const airtable_base = "appt60lhtZtqGytRF"
const airtable_api_key = "keybQLCgbSWWJqps8"
const airtable_views = {
    'startups': "viw4ThfhZr5RfJzWu"
};

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: airtable_api_key
});

const base = Airtable.base(airtable_base);


base('Startups d\'État').select({
    // Selecting the first 3 records in Startups:
    maxRecords: 3,
    view: "API - Vue d'ensemble"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Nom'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});





var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
       labels: ["2020 T1", "2020 T2" , "2020 T3", "2020 T4", "2021 T1", "2021 T2"],
        datasets: [{
            label: 'Startups accompagnées',
            pointRadius: 8,
            pointBorderWidth: 3,
            pointBackgroundColor: '#FFF',
            data: [8, 12, 17, 25, 36, 54],
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: '#3A55D1',
            borderWidth: 3
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Startups accompagnées',
            position: 'bottom'
        },
        scales: {
            xAxes: [{
                //display: false
            }],
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});




