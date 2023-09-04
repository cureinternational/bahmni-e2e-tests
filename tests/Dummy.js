const gaugeHelper = require("../bahmni-e2e-common-flows/tests/util/gaugeHelper")

step("Pre test step", async function() {
	gaugeHelper.save("patientIdentifier",'ET203165')
	gaugeHelper.save("patientFirstName","Chapala")
    gaugeHelper.save("patientLastName","Mehrotra")

});