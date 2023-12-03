document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".my-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const staffNo = document.getElementById("staffNo").value;
        const department = document.getElementById("department").value;
        const contactNo = document.getElementById("contactNo").value;
        const email = document.getElementById("email").value;
        const amount = document.getElementById("amount").value;
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;
        const participationType = document.querySelector('input[name="participationType"]:checked').value;
        const kulliyahName = document.getElementById("kulliyahName").value;

        // Display submitted data
        const result = document.getElementById("result");

        // Create a container div for submitted data
        const submittedDataContainer = document.createElement("div");
        submittedDataContainer.classList.add("submitted-data");

        // Construct the submitted data HTML
        const submittedDataHTML = `
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Staff No.:</strong> ${staffNo}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Contact No.:</strong> ${contactNo}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Amount to be Deducted RM:</strong> ${amount}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
            <p><strong>Participation Type:</strong> ${participationType}</p>
            ${participationType === "kulliyah" ? `<p><strong>Kulliyah Name:</strong> ${kulliyahName}</p>` : ''}
        `;

        // Set the constructed HTML inside the container div
        submittedDataContainer.innerHTML = submittedDataHTML;

        // Clear existing content in the result element
        result.innerHTML = '';

        // Append the container to the result element
        result.appendChild(submittedDataContainer);
    });
});
// To enable a specific input field
function enableKulliyah() {
    document.getElementById("kulliyahName").disabled = false;
}

function disableKulliyah() {
    document.getElementById("kulliyahName").disabled = true;
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the scroll to top button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
};