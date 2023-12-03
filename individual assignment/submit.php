<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // To retrieve form data
    $name = $_POST["name"];
    $staffNo = $_POST["staffNo"];
    $department = $_POST["department"];
    $contactNo = $_POST["contactNo"];
    $email = $_POST["email"];
    $amount = $_POST["amount"];
    $startDate = $_POST["startDate"];
    $endDate = $_POST["endDate"];
    $participationType = $_POST["participationType"];
    $kulliyahName = $_POST["kulliyahName"]; 

 
    if (empty($name) || empty($staffNo) || empty($department) || empty($contactNo) || empty($email) || empty($amount) || empty($startDate)) {
        echo "Please fill in all required fields.";
    } else {

   
        echo "Form submitted successfully!";
    }
} else {
    echo "Error: Invalid request.";
}
?>