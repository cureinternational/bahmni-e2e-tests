const gaugeHelper = require("../bahmni-e2e-common-flows/tests/util/gaugeHelper")

step("Pre test step", async function() {
	gaugeHelper.save("patientIdentifier",'ET55985')
	gaugeHelper.save("patientFirstName","Robin")
    gaugeHelper.save("patientLastName","Smith")
});