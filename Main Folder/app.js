let patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert (patientList);
const command = prompt('Hello! What would you like to do with the ER Triage list?  Choose one: add, update, delete, reorder');
function choice () {
  //Adding a name to the list//
  if (command == 'add') {

    let Patient = prompt('Patient Name?');
    patientList.push(Patient);
    alert(patientList);
  }

//Updating list//
  if (command == 'update') {
    let Patient = prompt('Patient Name?');
    for (let i = 0; i < patientList.length; i++) {
      if (Patient == patientList[i]) {
        let NewPatient = prompt('New Patient Name?');
        patientList.splice(i, 1, NewPatient);
        alert(patientList);
      }
    }
  }
}

//Deleting a name from list//
if (command == 'delete') {
  let Patient = prompt('Patient Name you want to delete?');
  for (let i = 0; i < patientList.length; i++) {
    if (Patient == patientList[i]) {
      patientList.splice(i,1);
      alert(patientList);
    }
  }
}

//Reordering list//
if (command === 'reorder') {
  let Patient = prompt('Patient Name?');
  let otherPatient = prompt('Other Patient Name?');
  index1 = patientList.indexOf(Patient);
  index2 = patientList.indexOf(otherPatient);
  patientList[index1] = otherPatient;
  patientList[index2] = Patient;
  alert(patientList);
  }
  
choice ();













