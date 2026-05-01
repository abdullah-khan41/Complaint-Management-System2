const API = 'https://complaint-management-system2-production.up.railway.app/complaints';

async function loadData() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById('list');
  list.innerHTML = '';

  data.forEach(c => {
    const li = document.createElement('li');

    li.innerHTML = `
      ${c.user_name} - ${c.issue} 
      [${c.status}]
      <button onclick="updateStatus(${c.id}, 'closed')">Close</button>
    `;

    list.appendChild(li);
  });
}

async function addComplaint() {
  const name = document.getElementById('name').value;
  const issue = document.getElementById('issue').value;

  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_name: name,
      issue: issue,
      status: status
    })
  });

  loadData();
}

async function updateStatus(id, status) {
  await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status })
  });

  loadData();
}

loadData();