
//Set up for every asset. Hide lang box
function setupInputs(sceneContainer){
	const langCheckbox = $(sceneContainer).find('input[name="uses_lang"]')[0];
	const langField = sceneContainer.getElementsByClassName('lang-selector')[0];
	const langInputs = $(langField).find('input[type="radio"]');
	console.log("set list");
	// Add a change event listener to the checkbox
	langCheckbox.addEventListener('change', function()
	{
	    //clean the inputs
	    langInputs.each(function()
	    {
	        $(this).prop('checked', false);
	        $(this).parent().removeClass('highlight');
	    });
	    // If the checkbox is checked, hide the age range field div; otherwise, show it
	    if (langCheckbox.checked)
	    {
	        langField.style.display = 'flex';
	    }
	    else
	    {
	        langField.style.display = 'none';
	    }
	});
	//Fix text area new row
	$(document).ready(function()
	{
	    $('#assetBrief').on('keydown', function(e)
	    {
	        if (e.keyCode === 13)
	        {
	            e.preventDefault();
	            var content = $(this).val();
	            $(this).val(content + '\n');
	        }
	    });
	});
}

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
