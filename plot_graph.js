    $( document ).ready(function() {

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line', // also try bar or other graph types

	data: {
labels: [["now - 0 days"], ["now - 1 days"], ["now - 2 days"], ["now - 3 days"], ["now - 4 days"]],
    datasets: [{
			label: "Elements",
			backgroundColor: 'lightblue',
			borderColor: 'royalblue',
data: ["32\n", "2150\n", "1744\n", "2359\n", "2440\n"]
		}]
	},
	options: {
		title: {
			display: true,
			text: 'History'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'count'
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Day'
				}
			}]
		}
	}
});


    });
