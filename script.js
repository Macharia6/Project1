const jobData = [
  { title: "Motorsport Mechanization", company: "World Class Motorsport.", location: "Dubai", description: "Seeking a skilled,flexible person..." },
  { title: "Web Developer", company: "Hk", location: "United States Of America", description: "Join our unbeatable  team..." },
   { title : "Graphic   Designer", company: "World Wide Graphic Designers", location: "Kenya", description: "Join in our creative team..." },
   { title : " Civil  Engineer", company: "Power and Knowledge", location: "Alaska", description: "Join in our Hardworking team..." },
   { title : "Electrical Engineer", company: "crucial ", location: "South Africa", description: "Searching for hardworking ,fast and reliable people..." },
    { title : "Software Engineer", company: " Tech Solvers", location: "United Kingdom", description: "Flexible and Mentally Focused" },
    { title : "Data Analyst", company: "Tech Informers", location: "Kabete", description: "Flexible,Mentally Focused and hardworking" },
    { title : "Software Engineer", company: "Tech Solvers", location: "United State of America", description: "Flexible and Mentally Focused" },
    { title : "Education Consultant", company: "TSC", location: "Jamaica", description:"One must have a degree in teaching and atleast 5 years of experience" },
    { title : "Government Analyst", company: "High Power", location: "Nairobi", description:"One must have no criminal records ,Degree needed and 3 years of experience" },
    { title : "Business Entrepreneur", company: "overthinkers", location: "New York", description:"one must have an experience of business"}
    
    
];
function displayJobListings(jobs) {
  const jobListings = document.getElementById('jobListings');
  jobListings.innerHTML = '';

  jobs.forEach(job => {
      const jobItem = document.createElement('div');
      jobItem.className = 'jobItem';
      jobItem.innerHTML = `
          <h2>${job.title}</h2>
          <p><strong>Company:</strong> ${job.company}</p>
          <p><strong>Location:</strong> ${job.location}</p>
          <p>${job.description}</p>
          <button onclick="viewJobDetails('${job.title}')">View Details</button>
      `;
      jobListings.appendChild(jobItem);
  });
}

function searchJobs() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filteredJobs = jobData.filter(job =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm)
  );
  displayJobListings(filteredJobs);
}

function viewJobDetails(jobTitle) {
  const selectedJob = jobData.find(job => job.title === jobTitle);
  if (selectedJob) {
      alert(`Job Title: ${selectedJob.title}\nCompany: ${selectedJob.company}\nLocation: ${selectedJob.location}\nDescription: ${selectedJob.description}`);
  }
}

// Initially display all jobs
displayJobListings(jobData);
