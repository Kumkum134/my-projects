const monthInput = document.getElementById('month');
const scrollList = document.getElementById('scroll-list');
const okButton = document.getElementById('ok-button');
const cancelButton = document.getElementById('cancel-button');
const butten = document.getElementById('butten');
let selectedYear = '';
let selectedMonth = '';

monthInput.addEventListener('click', function () {
    scrollList.style.display = 'block';
});

document.querySelectorAll('.column:first-child .list-item').forEach(function (item) {
    item.addEventListener('click', function () {
        selectedYear = item.innerText;
        item.classList.add('highlighted');
        document.querySelectorAll('.column:first-child .list-item').forEach(i => {
            if (i !== item) i.classList.remove('highlighted');
        });
    });
});

document.querySelectorAll('.column:last-child .list-item').forEach(function (item) {
    item.addEventListener('click', function () {
        selectedMonth = item.innerText;
        item.classList.add('highlighted');
        document.querySelectorAll('.column:last-child .list-item').forEach(i => {
            if (i !== item) i.classList.remove('highlighted');
        });
    });
});

okButton.addEventListener('click', function () {
    if (selectedYear && selectedMonth) {
        monthInput.value = `${selectedYear} years ${selectedMonth} months`;
    }
    scrollList.style.display = 'none';
});

cancelButton.addEventListener('click', function () {
    scrollList.style.display = 'none';
});

document.addEventListener('click', function (e) {
    if (!scrollList.contains(e.target) && e.target !== monthInput) {
        scrollList.style.display = 'none';
    }
});

butten.addEventListener('click', function () {
    const principal = document.getElementById('ip1').value;
    const rate = document.getElementById('per').value;
    localStorage.setItem('selectedDuration', monthInput.value);
    localStorage.setItem('principal', principal);
    localStorage.setItem('rate', rate);
});
