// Data for Top Companies Chart
const topCompaniesData = {
    labels: ['TCS', 'Cognizant', 'Wipro', 'Oracle', 'Microsoft', 'Genpact'],
    datasets: [{
        label: 'Students Placed',
        data: [50, 40, 60, 30, 20, 25],
        backgroundColor: '#3498db',
        borderColor: '#2980b9',
        borderWidth: 1
    }]
};

// Chart for Top Companies
const ctxTopCompanies = document.getElementById('top-companies-chart').getContext('2d');
new Chart(ctxTopCompanies, {
    type: 'bar',
    data: topCompaniesData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Data for Department Placement Rates
const departmentData = {
    labels: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'],
    datasets: [{
        label: 'Placement Rate (%)',
        data: [85, 75, 70, 65],
        backgroundColor: '#2ecc71',
        borderColor: '#27ae60',
        borderWidth: 1
    }]
};

// Chart for Department Placement
const ctxDepartment = document.getElementById('department-chart').getContext('2d');
new Chart(ctxDepartment, {
    type: 'pie',
    data: departmentData,
    options: {
        responsive: true
    }
});

// Data for Packages Offered
const packageData = {
    labels: ['Less than 5 LPA', '5-10 LPA', '10-15 LPA', 'Above 15 LPA'],
    datasets: [{
        label: 'Packages Offered',
        data: [20, 30, 40, 10],
        backgroundColor: ['#f1c40f', '#e67e22', '#3498db', '#9b59b6'],
        borderColor: '#34495e',
        borderWidth: 1
    }]
};

// Chart for Packages Offered
const ctxPackages = document.getElementById('packages-chart').getContext('2d');
new Chart(ctxPackages, {
    type: 'doughnut',
    data: packageData,
    options: {
        responsive: true
    }
});
