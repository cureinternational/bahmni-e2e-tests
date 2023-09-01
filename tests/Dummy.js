const gaugeHelper = require("../bahmni-e2e-common-flows/tests/util/gaugeHelper")

step("Pre test step", async function() {
	gaugeHelper.save('patientFirstName','Chakor')
	gaugeHelper.save("patientIdentifier",'ET203014')
	gaugeHelper.save("patientFullName",'Chakor Gray Jangid')
	gaugeHelper.save('appointmentStartDate','Sun Sep 11 2023 00:00:00 GMT+0530 (India Standard Time)')
	
});