function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueStrung = element.innerText;
    const elementValue = parseFloat(elementValueStrung);
    return elementValue;
}

function setTextElementById(textElementId, newValue) {
    const textElement = document.getElementById(textElementId);
    textElement.innerText = newValue;
}