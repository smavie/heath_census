//Defining variables

const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const patients = [];

/*
    This function captures user-entered data from the HTML form elements: name, gender, age, and medical condition.
    It ensures that all fields have valid inputs.
*/

function addPatient() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    if (name && gender && age && condition) {
      patients.push({ name, gender: gender.value, age, condition });
      resetForm();
      generateReport();
    }
  }
//Create a function to reset form values
function resetForm() {
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
  }

//Create the function that generates the report
