
function saveThought() {
    const thought = document.getElementById('thought').value;
    if (thought.trim() === "") {
        alert("Please write something before saving!");
        return;
    }
    let dreams = JSON.parse(localStorage.getItem('dreams')) || [];
    dreams.push(thought);
    localStorage.setItem('dreams', JSON.stringify(dreams));
    alert("Your thought is saved!");
    document.getElementById('thought').value = ""; 
}


function loadDreams() {
    const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
    const dreamsList = document.getElementById('dreams-list');
    dreamsList.innerHTML = dreams.length
        ? dreams
              .map((dream, index) => `
                  <div class="dream-item">
                      <p>${dream}</p>
                      <button onclick="deleteDream(${index})">X</button>
                  </div>
              `)
              .join('')
        : "<p>No thoughts saved yet. Start creating!</p>";
}


function deleteDream(index) {
    let dreams = JSON.parse(localStorage.getItem('dreams')) || [];
    dreams.splice(index, 1);
    localStorage.setItem('dreams', JSON.stringify(dreams));
    loadDreams(); 
}


if (window.location.pathname.endsWith('dreams.html')) {
    loadDreams();
}
