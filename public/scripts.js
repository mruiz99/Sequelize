async function getMeals() {

  const requestMeal = await fetch('/api/fullMeal');
  const dataMeal = await requestMeal.json();
  return dataMeal;
}
  
async function getChart(element) {
  
  const chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:{
      text: "Meals and their Macros"
    },
    axisX: {
    },
    axisY: {
    },
    toolTip: {
      shared: true
    },
    legend:{
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "stackedBar",
      name: element[0]['meal_name'],
      showInLegend: "true",
      //xValueFormatString: "DD, MMM",
      yValueFormatString: "#,##0",
      dataPoints: [
        { y: element[0]['calories'], label: "Calories"},
        { y: element[0]['serving_size'], label: "Serving Size" },
        { y: element[0]['cholesterol'], label: "Cholesterol" },
        { y: element[0]['sodium'], label: "Sodium" },
        { y: element[0]['carbs'], label: "Carbs" },
        { y: element[0]['protein'], label: "Protein" },
        { y: element[0]['fat'], label: "Fat" }
      ]
    },
    {
      type: "stackedBar",
      name: element[1]['meal_name'],
      showInLegend: "true",
      //xValueFormatString: "DD, MMM",
      yValueFormatString: "#,##0",
      dataPoints: [
        { y: element[1]['calories'], label: "Calories"},
        { y: element[1]['serving_size'], label: "Serving Size" },
        { y: element[1]['cholesterol'], label: "Cholesterol" },
        { y: element[1]['sodium'], label: "Sodium" },
        { y: element[1]['carbs'], label: "Carbs" },
        { y: element[1]['protein'], label: "Protein" },
        { y: element[1]['fat'], label: "Fat" }
      ]
    },
    {
      type: "stackedBar",
      name: element[2]['meal_name'],
      showInLegend: "true",
      //xValueFormatString: "DD, MMM",
      yValueFormatString: "#,##0",
      dataPoints: [
        { y: element[2]['calories'], label: "Calories"},
        { y: element[2]['serving_size'], label: "Serving Size" },
        { y: element[2]['cholesterol'], label: "Cholesterol" },
        { y: element[2]['sodium'], label: "Sodium" },
        { y: element[2]['carbs'], label: "Carbs" },
        { y: element[2]['protein'], label: "Protein" },
        { y: element[2]['fat'], label: "Fat" }
      ]
    },
    {
      type: "stackedBar",
      name: element[3]['meal_name'],
      showInLegend: "true",
      //xValueFormatString: "DD, MMM",
      yValueFormatString: "#,##0",
      dataPoints: [
        { y: element[3]['calories'], label: "Calories"},
        { y: element[3]['serving_size'], label: "Serving Size" },
        { y: element[3]['cholesterol'], label: "Cholesterol" },
        { y: element[3]['sodium'], label: "Sodium" },
        { y: element[3]['carbs'], label: "Carbs" },
        { y: element[3]['protein'], label: "Protein" },
        { y: element[3]['fat'], label: "Fat" }
      ]
    },
    {
      type: "stackedBar",
      name: element[4]['meal_name'],
      showInLegend: "true",
      //xValueFormatString: "DD, MMM",
      yValueFormatString: "#,##0",
      dataPoints: [
        { y: element[4]['calories'], label: "Calories"},
        { y: element[4]['serving_size'], label: "Serving Size" },
        { y: element[4]['cholesterol'], label: "Cholesterol" },
        { y: element[4]['sodium'], label: "Sodium" },
        { y: element[4]['carbs'], label: "Carbs" },
        { y: element[4]['protein'], label: "Protein" },
        { y: element[4]['fat'], label: "Fat" }
      ]
    },
    {
      type: "stackedBar",
      name: element[5]['meal_name'],
      showInLegend: "true",
      //xValueFormatString: "DD, MMM",
      yValueFormatString: "#,##0",
      dataPoints: [
        { y: element[5]['calories'], label: "Calories"},
        { y: element[5]['serving_size'], label: "Serving Size" },
        { y: element[5]['cholesterol'], label: "Cholesterol" },
        { y: element[5]['sodium'], label: "Sodium" },
        { y: element[5]['carbs'], label: "Carbs" },
        { y: element[5]['protein'], label: "Protein" },
        { y: element[5]['fat'], label: "Fat" }
      ]
    },
    {
      type: "stackedBar",
      name: element[6]['meal_name'],
      showInLegend: "true",
      //xValueFormatString: "DD, MMM",
      yValueFormatString: "#,##0",
      dataPoints: [
        { y: element[6]['calories'], label: "Calories"},
        { y: element[6]['serving_size'], label: "Serving Size" },
        { y: element[6]['cholesterol'], label: "Cholesterol" },
        { y: element[6]['sodium'], label: "Sodium" },
        { y: element[6]['carbs'], label: "Carbs" },
        { y: element[6]['protein'], label: "Protein" },
        { y: element[6]['fat'], label: "Fat" }
      ]
    },
    {
      type: "stackedBar",
      name: element[7]['meal_name'],
      showInLegend: "true",
      //xValueFormatString: "DD, MMM",
      yValueFormatString: "#,##0",
      dataPoints: [
        { y: element[7]['calories'], label: "Calories"},
        { y: element[7]['serving_size'], label: "Serving Size" },
        { y: element[7]['cholesterol'], label: "Cholesterol" },
        { y: element[7]['sodium'], label: "Sodium" },
        { y: element[7]['carbs'], label: "Carbs" },
        { y: element[7]['protein'], label: "Protein" },
        { y: element[7]['fat'], label: "Fat" }
      ]
    },
    {
      type: "stackedBar",
      name: element[8]['meal_name'],
      showInLegend: "true",
      //xValueFormatString: "DD, MMM",
      yValueFormatString: "#,##0",
      dataPoints: [
        { y: element[8]['calories'], label: "Calories"},
        { y: element[8]['serving_size'], label: "Serving Size" },
        { y: element[8]['cholesterol'], label: "Cholesterol" },
        { y: element[8]['sodium'], label: "Sodium" },
        { y: element[8]['carbs'], label: "Carbs" },
        { y: element[8]['protein'], label: "Protein" },
        { y: element[8]['fat'], label: "Fat" }
      ]
    },
    {
      type: "stackedBar",
      name: element[9]['meal_name'],
      showInLegend: "true",
      //xValueFormatString: "DD, MMM",
      yValueFormatString: "#,##0",
      dataPoints: [
        { y: element[9]['calories'], label: "Calories"},
        { y: element[9]['serving_size'], label: "Serving Size" },
        { y: element[9]['cholesterol'], label: "Cholesterol" },
        { y: element[9]['sodium'], label: "Sodium" },
        { y: element[9]['carbs'], label: "Carbs" },
        { y: element[9]['protein'], label: "Protein" },
        { y: element[9]['fat'], label: "Fat" }
      ]
    },

    ]
  
  });
  chart.render();
  
  function toggleDataSeries(e) {
    if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
  
}

async function fetchHalls() {
  const table = document.querySelector('.table');
  
  const request = await fetch('/api/dining');
  const data = await request.json();
  const halls = [];

  halls.push(data['data']);
  console.log(halls[0][1]['hall_id']);
  //console.log(halls);
  function addTable () {
    const rows = `<thead>
            <tr>
                <th>HallID</th>
                <th>Name</th>
                <th>Address</th>
                <tbody>
                    <tr>
                    <th>${halls[0][0]['hall_id']}</th>
                    <td>${halls[0][0]['hall_name']}</td>
                    <td>${halls[0][0]['hall_address']}</td>
                    </tr>
                    <tr>
                    <th>${halls[0][1]['hall_id']}</th>
                    <td>${halls[0][1]['hall_name']}</td>
                    <td>${halls[0][1]['hall_address']}</td>
                    </tr>
                    <tr>
                    <th>${halls[0][2]['hall_id']}</th>
                    <td>${halls[0][2]['hall_name']}</td>
                    <td>${halls[0][2]['hall_address']}</td>
                    </tr>
            </tr>
        </thead>`;
    table.innerHTML = rows;
    
  }

  addTable();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

async function windowActions() {
  fetchHalls();
  const results = await getMeals();
  const meals = results.data;
  const numArray = [1,2,3,4,5,6,7,8,9,10];
  const selectedMeals = numArray.map((element) => {
    const random = getRandomIntInclusive(0, meals.length-1);
    return meals[random];
  });
  getChart(selectedMeals);
  console.table(selectedMeals);

}
  
window.onload = windowActions;