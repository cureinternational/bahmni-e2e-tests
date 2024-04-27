# In Patient Visit

tags: ui

## Nurse create nursing tasks and administering the medication

tags: ipd

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an IPD
* Open "Clinical" app
* Search and select patient
* Admit the patient in "General Ward"
* Logout and Login to Bahmni as a "doctor"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Add Nutrional values
* Doctor clicks consultation
* Doctor notes the diagnosis and conditions "consultation/diagnosis/diagnosis_condition"
* Doctor prescribes medications "consultation/medications/paracetamol"
* Goto patient clinical dashboard
* Goto to active visit
* Nurse saves the system tasks "ipd/systemNonMedication"
* Click on IPD home button
* Open "InPatient" module
* Verify the patient is present in "General Ward"
* Log out if still logged in



## Nurse should be able to admit and discharge a patient based on doctor's disposition

tags: hospital, ipmodule, regression

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the "cure" patient and starts an IPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Doctor issues an Admit disposition
* Click on home page
* Logout and Login to Bahmni location "General Ward" as a "nurse"
* Nurse admits the patient to available bed
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Enter vitals "consultation/observations/Vitals"
* Doctor prescribes lab test "consultation/orders/Platelets"
* Doctor issues an Discharge disposition
* Click on home page
* Logout and Login to Bahmni location "General Ward" as a "labtechnician"
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Save the report
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "nurse"
* Nurse discharges the patient
* Click back button
* Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk

## Nurse uses Bed management to admit and discharge a patient based on doctor's disposition

tags: hospital, bedmanagement, regression

* Login to Bahmni location "General Ward" as a "receptionist"
* Receptionist creates the "cure" patient and starts an IPD
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Doctor issues an Admit disposition
* Click on home page
* Logout and Login to Bahmni location "General Ward" as a "nurse"
* Admit a patient to general ward bed
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "doctor"
* Open clinical tab
* Enter vitals "consultation/observations/Vitals"
* Doctor prescribes lab test "consultation/orders/Platelets"
* Doctor prescribes medications "consultation/medications/paracetamol"
* Doctor issues an Discharge disposition
* Click on home page
* Logout and Login to Bahmni location "General Ward" as a "labtechnician"
* Open "Patient Documents" module
* Choose newly created patient
* Add a report "labReport1" to "Patient Documents"
* Save the report
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "nurse"
* Discharge the patient from allocated bed
* Click back button
* Logout and Login to Bahmni location "General Ward" as a "receptionist"
* visit is closed at the front desk
