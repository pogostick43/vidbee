//This file exists to set up the new-tasks in the inital state and support with functionality for buttons etc

//Set up age range once. Hide it.
const allAgesCheckbox = document.getElementById('All-ages-accepted');
// Get the age range field div with the id "age-range-field"
const ageRangeField = document.getElementById('age-range-field');
// Add a change event listener to the checkbox
allAgesCheckbox.addEventListener('change', function()
{
    // If the checkbox is checked, hide the age range field div; otherwise, show it
    if (allAgesCheckbox.checked){
        ageRangeField.style.display = 'none';
    }
    else{
        ageRangeField.style.display = 'flex';
    }
});

//Show "Warning/upsell-prompt" if less than 3 creators
function showHideCreatorWarning(){
  if(numberOfCreators < 3){
   creatorWarning.style.display = "inline-block";
  }else{
   creatorWarning.style.display = "none";
  }
}

//num creators button functionality
const subtractCreatorButton = document.getElementById("subtract-creator");
const addCreatorButton = document.getElementById("add-creator");
const creatorWarning = document.getElementById("number-of-creators-warning");
const numberOfCreatorsInput = document.getElementById("numberOfCreators");
const summaryNumberCreators = document.getElementById("summary-number-creators");

numberOfCreatorsInput.value = numberOfCreators; //Is defined in webflow new-tasks embedded code

subtractCreatorButton.addEventListener("click", () => {
  if (numberOfCreators > 1) {
    numberOfCreators--;
    numberOfCreatorsInput.value = numberOfCreators;
    summaryNumberCreators.innerHTML = numberOfCreators;
    updatePrice();

    // trigger input event
    const event = new InputEvent('input');
    numberOfCreatorsInput.dispatchEvent(event);
  }
  showHideCreatorWarning();
});

//Add & subtract creator buttons
addCreatorButton.addEventListener("click", () => {
  numberOfCreators++;
  numberOfCreatorsInput.value = numberOfCreators;
  summaryNumberCreators.innerHTML = numberOfCreators;
  updatePrice();
  showHideCreatorWarning();

  // trigger input event
  const event = new InputEvent('input');
  numberOfCreatorsInput.dispatchEvent(event);
});

//Also listen for input of if the number of creators is "manually" changed
numberOfCreatorsInput.addEventListener("input", () => {
  numberOfCreators = parseInt(numberOfCreatorsInput.value);
  summaryNumberCreators.innerHTML = numberOfCreators;
  updatePrice();
  showHideCreatorWarning();
});
