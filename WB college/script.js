// JavaScript to populate college list and interact with the map
// You can use libraries like Leaflet.js for the interactive map

// Sample data for demonstration
const colleges = [
    { name: "College A", location: "Location A", details: "Details about College A" },
    { name: "College B", location: "Location B", details: "Details about College B" },
    { name: "College B", location: "Location B", details: "Details about College B" },
    { name: "College B", location: "Location B", details: "Details about College B" },
    { name: "College B", location: "Location B", details: "Details about College B" },
    // Add more colleges
];

const collegesList = document.getElementById('colleges-list');

// Populate colleges list
colleges.forEach(college => {
    const collegeItem = document.createElement('li');
    collegeItem.innerHTML = `
        <h3>${college.name}</h3>
        <p><strong>Location:</strong> ${college.location}</p>
        <p>${college.details}</p>
    `;
    collegesList.appendChild(collegeItem);
});
