// GLOBAL VARIABLES
let id; // HTML ELEMENT (TEXT)
let fname; // HTML ELEMENT (TEXT)
let ext; // HTML ELEMENT (TEXT)
let email; // HTML ELEMENT (TEXT)
let department; // HTML ELEMENT (TEXT)
let submit; // HTML ELEMENT (BUTTON)
let output; // HTML ELEMENT (OUTPUT)

// HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (i) => document.getElementById(i);

// GET DOM ELEMENTS
id = $("id");
fname = $("fname");
ext = $("ext");
email = $("email");
department = $("department");
submit = $("submit");
output = $("output");

// CONSOLE LOG OR PUT IN PAGE USING innerHTML AND RETURN THE RESULT
function employeeDetail(id, fname, ext, email, department) {
  console.log(`ID: ${id}`);
  console.log(`Full Name: ${fname} `);
  console.log(`Extension: ${ext}`);
  console.log(`Email: ${email}`);
  console.log(`Department: ${department}`);
  output.innerHTML = `ID: ${id} <br> Full Name: ${fname} <br> Extension: ${ext} <br> Email: ${email} <br> Department: ${department}`;
  return;
}

// GET FORM VALUES ,LOG AND  DISPLAY RESULTS
submit.addEventListener("click", () => {
  id = id.value;
  fname = fname.value;
  ext = ext.value;
  email = email.value;
  department = department.value;
  employeeDetail(id, fname, ext, email, department);
});
