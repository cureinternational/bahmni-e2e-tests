# FrontDesk

tags: ui, frontdesk

## A receptionist view the registration location, specialties and providers list in login,appointments and visits

tags: hospital, clinic, regression, cure

* Login to Bahmni as a "receptionist"
* Verify the visit locations
* Open "Appointment scheduling" module
* View all appointments
* Open calender at time "10am"
* Verify the appointment locations
* Verify the appointment specialitis list
* Verify if all the providers are present
* Click on home page
* Log out if still logged in

## A receptionist view the list of appointments in the summary page

tags: regression, cure

* Login to Bahmni as a "receptionist"
* Open "Appointment scheduling" module
* Verify the appointments in grid view

## A receptionist admits a patient and do search the patient in the inPatient module

tags: cure, regression, devtest

* Login to Bahmni as a "nurse"
* Receptionist creates the "cure" patient and starts an OPD
* Open "Clinical" app
* Search and select patient
* Admit the patient in "General Ward"
* Open "InPatient" module
* Verify the patient is present in "General Ward"
* visit is closed at the front desk
* Log out if still logged in

## A receptionist starts an opd visit and views the ipd dashboard

tags: regression, cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "pre" patient
* Click on home page
* Verify the patient is not present in clinical module
* Click on home page
* Receptionist updates the newly created patient as "cure" patient and starts an OPD
* Open "Clinical" app
* Verify the queue table "tables/clinicalQueue"
* Search and select patient
* Verify the IPD dashboard
* visit is closed at the front desk
* Log out if still logged in

## A receptionist creates a patient, add and edit a relationship

tags: regression, cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient adds a relation and starts an OPD
* Receptionist search the patient by phone number
* Verify the patient is returned in the search results
* Click on home page
* visit is closed at the front desk
* Log out if still logged in

## A nurse captures drug details for a patient

tags: regression, cure

* Login to Bahmni as a "receptionist"
* Receptionist creates the "cure" patient and starts an OPD
* Logout and Login to Bahmni as a "doctor"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Doctor clicks consultation
* Doctor prescribes medications "consultation/medications/Diazepam"
* Goto patient dashboard
* Verify medical prescription in patient clinical dashboard
* Click on active patients list
* Click on home page
* Logout and Login to Bahmni as a "nurse"
* Open "Clinical" module
* Goto All sections and search the newly created patient
* Nurse saves the medication "consultation/medications/Diazepam" timing
* Verify if the medication "consultation/medications/Diazepam" is present in drug chart modal
* Click on active patients list
* Click on home page
* Logout and Login to Bahmni as a "receptionist"
* visit is closed at the front desk
