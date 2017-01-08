var assert = {
  isTrue: function(assertionToCheck, nameOfAssertion) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + nameOfAssertion + " is not truthy");
    }
    else {
      console.log(nameOfAssertion + " passes");
    }
  }
};
