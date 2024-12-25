document.addEventListener('DOMContentLoaded', function () {
    const emiValue = parseFloat(localStorage.getItem('emi'));
    const totalPrincipal = parseFloat(localStorage.getItem('totalPrincipal'));
    const totalInterest = parseFloat(localStorage.getItem('totalInterest'));
    const selectedDuration = localStorage.getItem('selectedDuration');
    
    const [years, months] = selectedDuration.match(/\d+/g).map(Number);
    const totalMonths = (years * 12) + months;

    const monthlyDataContainer = document.getElementById('monthlyData');
    const yearlyDataContainer = document.getElementById('yearlyData');

    const monthlyBtn = document.getElementById('monthlyBtn');
    const yearlyBtn = document.getElementById('yearlyBtn');

    let remainingPrincipal = totalPrincipal;
    const monthlyPrincipal = (totalPrincipal / totalMonths).toFixed(2);
    const monthlyInterest = (totalInterest / totalMonths).toFixed(2);
    const yearlyPrincipal = (totalPrincipal / years).toFixed(2);
    const yearlyInterest = (totalInterest / years).toFixed(2);

    const currentYear = new Date().getFullYear();
    const startMonth = 1;
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let monthlyDataHtml = '<p><strong>Monthly Data:</strong></p>';

    for (let year = 1; year <= years; year++) {
        monthlyDataHtml += `<h3>Year ${currentYear + year - 1}</h3>`;
        monthlyDataHtml += `
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>EMI</th>
                        <th>Principal</th>
                        <th>Interest</th>
                        <th>Remaining Principal</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let month = 1; month <= 12; month++) {
            const currentMonthIndex = ((year - 1) * 12) + month;
            if (currentMonthIndex > totalMonths) break;

            if (currentMonthIndex >= startMonth || year > 1) {
                remainingPrincipal -= monthlyPrincipal;
                const displayMonthIndex = (startMonth + month - 2) % 12;
                monthlyDataHtml += `
                    <tr>
                        <td>${monthNames[displayMonthIndex]}</td>
                        <td>${emiValue.toFixed(2)}</td>
                        <td>${monthlyPrincipal}</td>
                        <td>${monthlyInterest}</td>
                        <td>${remainingPrincipal.toFixed(2)}</td>
                    </tr>
                `;
            }
        }
        monthlyDataHtml += `
                </tbody>
            </table>
            <br>
        `;
    }
    monthlyDataContainer.innerHTML = monthlyDataHtml;

    remainingPrincipal = totalPrincipal;
    let yearlyDataHtml = `
        <p><strong>Yearly Data:</strong></p>
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total EMI</th>
                    <th>Principal</th>
                    <th>Interest</th>
                    <th>Remaining Principal</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (let year = 1; year <= years; year++) {
        const yearLabel = currentYear + year - 1;
        remainingPrincipal -= yearlyPrincipal;

        const yearStyle = yearLabel === 2024 ? 'style="color: white;"' : '';

        yearlyDataHtml += `
            <tr>
                <td ${yearStyle}>${yearLabel}</td>
                <td>${(emiValue * 12).toFixed(2)}</td>
                <td>${yearlyPrincipal}</td>
                <td>${yearlyInterest}</td>
                <td>${remainingPrincipal.toFixed(2)}</td>
            </tr>
        `;
    }
    yearlyDataHtml += `
            </tbody>
        </table>
    `;
    yearlyDataContainer.innerHTML = yearlyDataHtml;

    monthlyDataContainer.style.display = 'none';
    yearlyDataContainer.style.display = 'none';

    monthlyBtn.addEventListener('click', function () {
        monthlyDataContainer.style.display = 'block';
        yearlyDataContainer.style.display = 'none';
    });

    yearlyBtn.addEventListener('click', function () {
        yearlyDataContainer.style.display = 'block';
        monthlyDataContainer.style.display = 'none';
    });
});
