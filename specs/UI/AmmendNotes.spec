# Appointments

tags: ui

## Nurse amend a note and nurse admin acknowlede the same-E2E

tags: ammend_note

 * Login to Bahmni as a "nurseManager"
* Receptionist creates the "cure" patient and starts an IPD
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Search and select patient
* Admit the patient in "General Ward"
* Logout and Login to Bahmni as a "nurse"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Search and select patient
* Goto to active visit
* Administer medication "Paracetamol 500mg"
* Amend the note as nurse
* Navigate to home page
* Logout and Login to Bahmni as a "nurseManager"
 * Open "Clinical" module
 * Goto All sections and search the newly created patient
 * Search and select patient 
* Goto to active visit
 *Acknowledge note as nurseadmin
*Validate the history of amended note
* Navigate to home page
* Log out if still logged in