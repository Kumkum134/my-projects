document.addEventListener('DOMContentLoaded', function () {
    const monInput = document.getElementById('mon');
    const selectedDuration = localStorage.getItem('selectedDuration');
    const principalInput = document.getElementById('ip1');
    const rateInput = document.getElementById('per');
    const totalDisplayInput = document.getElementById('tex3');
    const totalPrincipalInput = document.getElementById('tex4');
    const totalInterestInput = document.getElementById('tex5');
    const emiInput = document.getElementById('orn');
    const rangeInput = document.getElementById('range');

    if (selectedDuration) {
        monInput.value = selectedDuration;
    }

    const principalValue = parseFloat(localStorage.getItem('principal')) || 0;
    const rateValue = parseFloat(localStorage.getItem('rate')) || 0;

    const [years, months] = selectedDuration.match(/\d+/g).map(Number);
    const totalMonths = (years * 12) + months;

    function calculateTotal() {
        const monthlyRate = (rateValue / 100) / 12;
        const emi = (principalValue * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

        const totalPayment = emi * totalMonths;
        const totalInterest = totalPayment - principalValue;

        emiInput.value = emi.toFixed(2);
        totalDisplayInput.value = totalPayment.toFixed(2);
        totalPrincipalInput.value = principalValue.toFixed(2);
        totalInterestInput.value = totalInterest.toFixed(2);

        const principalPercentage = (principalValue / totalPayment) * 100;
        const interestPercentage = 100 - principalPercentage;

        rangeInput.style.background = `linear-gradient(to right, aqua ${principalPercentage}%, orange ${principalPercentage}%)`;

        localStorage.setItem('emi', emi.toFixed(2));
        localStorage.setItem('totalPayment', totalPayment.toFixed(2));
        localStorage.setItem('totalPrincipal', principalValue.toFixed(2));
        localStorage.setItem('totalInterest', totalInterest.toFixed(2));
    }

    calculateTotal();
});
