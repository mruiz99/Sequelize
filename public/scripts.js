async function fetchHalls() {
    const table = document.querySelector('.table');
  
    const request = await fetch('/api/dining');
    const data = await request.json();
    const halls = [];

    halls.push(data['data']);
    console.log(halls[0][1]['hall_id']);

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

async function windowActions() {
    fetchHalls();
  }
  
window.onload = windowActions;