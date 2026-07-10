/* Chart - Dashboard Home */
// Chart colors
var colors = ["#8274E8", "#C679D0", "#2e3d62"];

// Fetch data from localStorage
var questions = JSON.parse(localStorage.getItem("que")) || {};
var scores = JSON.parse(localStorage.getItem("sco")) || {};

function padArrayToSizeSeven(arr) {
  while (arr.length < 7) {
    arr.push(0);
  }
  return arr;
}
questions = padArrayToSizeSeven(questions);
scores = padArrayToSizeSeven(scores);

/* Spider (Radar) Chart */
var chRadar = document.getElementById("chRadar");
if (chRadar) {
  new Chart(chRadar, {
    type: "radar",
    data: {
      labels: [
        'Recent Test 1',
        'Recent Test 2',
        'Recent Test 3',
        'Recent Test 4',
        'Recent Test 5',
        'Recent Test 6',
        'Recent Test 7'
      ],
      datasets: [{
        label: 'Correct Answered',
        data: scores,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'Questions Attempted',
        data: questions,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      },
    });
}
