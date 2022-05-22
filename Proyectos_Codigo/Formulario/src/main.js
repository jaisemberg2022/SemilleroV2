var e = document.getElementById("title");
a.assert.isNotNull(e, 'There should be an element with id="title" '), a.assert.strictEqual(e.tagName, "H1", "#title should be in H1 sized text "), a.assert.isAbove(e.innerText.length, 0, "#title should contain some text ")

var e = document.getElementById("description");
a.assert.isNotNull(e, 'There should be an element with id="description" '), a.assert.strictEqual(e.tagName, "P", "#description should be in P sized text "), a.assert.isAbove(e.innerText.length, 0, "#description should contain some text ")
var e = document.getElementById("survey-form");
a.assert.isNotNull(e, 'There should be an element with id="survey-form" '), a.assert.strictEqual(e.tagName, "FORM", "#survey-form should be a <form>-element ")

var e = document.getElementById("name");
a.assert.isNotNull(e, 'There should be an input text field with id="name" '), a.assert.strictEqual(e.type, "text", 'input field with id="name" should be a text field '), a.assert.isOk(e.required, "Name input field should be required "), a.assert.isAbove(document.querySelectorAll("#survey-form #name").length, 0, 'The field with id="name" is not inside the form element ')
var e = document.getElementById("email");
a.assert.isNotNull(e, 'There should be an input text field with id="email" '), a.assert.isOk(e.required, "Email input field should be required "), a.assert.isAbove(document.querySelectorAll("#survey-form #email").length, 0, 'The field with id="email" is not inside the form element ')
var e = document.getElementById("email");
a.assert.strictEqual(e.type, "email", "Email field should be HTML5 validated ")
var e = document.getElementById("number");
a.assert.isNotNull(e, 'There should be an input text field with id="number" '), a.assert.isAbove(document.querySelectorAll("#survey-form #number").length, 0, 'The field with id="number" is not inside the form element ')
var e = document.getElementById("number");
a.assert.strictEqual(e.type, "number", "Number field should be HTML5 validated ")
var e = document.getElementById("number");
a.assert.isNotNaN(parseInt(e.min, 10), "Minimum number should be defined "), a.assert.isNotNaN(parseInt(e.max, 10), "Maximum number should be defined ")
var e = document.getElementById("name-label"),
    t = document.getElementById("email-label"),
    r = document.getElementById("number-label");
a.assert.isNotNull(e, "#name-label is not defined "), a.assert.strictEqual(e.nodeName, "LABEL", "#name-label should be a <label> element "), a.assert.isAbove(e.innerText.length, 0, "#name-label should contain some text "), a.assert.isNotNull(t, "#email-label is not defined "), a.assert.strictEqual(t.nodeName, "LABEL", "#email-label should be a <label> element "), a.assert.isAbove(t.innerText.length, 0, "#email-label should contain some text "), a.assert.isNotNull(r, "#number-label is not defined "), a.assert.strictEqual(r.nodeName, "LABEL", "#number-label should be a <label> element "), a.assert.isAbove(r.innerText.length, 0, "#number-label should contain some text "), a.assert.isAbove(document.querySelectorAll("#survey-form #name-label").length, 0, 'The label with id="name-label" is not inside the form element '), a.assert.isAbove(document.querySelectorAll("#survey-form #email-label").length, 0, 'The label with id="email-label" is not inside the form element '), a.assert.isAbove(document.querySelectorAll("#survey-form #number-label").length, 0, 'The label with id="number-label" is not inside the form element ')
a.assert.strictEqual(document.getElementById("name").hasAttribute("placeholder"), !0, "The name input field should have a placeholder attribute "), a.assert.isAbove(document.getElementById("name").placeholder.length, 0, "The name input field's placeholder attribute should have some text for its value"), a.assert.strictEqual(document.getElementById("email").hasAttribute("placeholder"), !0, "The email input field should have a placeholder attribute "), a.assert.isAbove(document.getElementById("email").placeholder.length, 0, "The email input field's placeholder attribute should have some text for its value"), a.assert.strictEqual(document.getElementById("number").hasAttribute("placeholder"), !0, "The number input field should have a placeholder attribute "), a.assert.isAbove(document.getElementById("number").placeholder.length, 0, "The number input field's placeholder attribute should have some text for its value ")