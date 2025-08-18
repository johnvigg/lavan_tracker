function showTab(tabId, event) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

document.getElementById('year').textContent = new Date().getFullYear();
