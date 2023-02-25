updatePrice();
//set initial value, number of creators
document.getElementById('numberOfCreators').value = numberOfCreators;
//update number of creators in summart
const numberOfCreatorsInput = document.getElementById('numberOfCreators');
const summaryNumberCreators = document.getElementById('summary-number-creators');
numberOfCreatorsInput.addEventListener('input', function(event)
{
    numberOfCreators = event.target.value;
    summaryNumberCreators.innerHTML = numberOfCreators;
});
document.getElementById('numberOfCreators').addEventListener('input', function()
{
    updatePrice();
});
//CODE TO SUBMIT FORM
const form = document.getElementById("campaign-form");
form.addEventListener("submit", function(event)
{
    event.preventDefault();
    getAssetData();
});
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const fileInputButton = document.getElementById('file-input-button');
const previewField = document.getElementById('image-preview');
//const imagePrompt = document.getElementById('image-preview');
let uploadedImage = null;
dropZone.addEventListener('dragover', (e) =>
{
    e.preventDefault();
    if (!uploadedImage)
    {
        dropZone.classList.add('active');
    }
});
dropZone.addEventListener('dragleave', () =>
{
    if (!uploadedImage)
    {
        dropZone.classList.remove('active');
    }
});
dropZone.addEventListener('drop', (e) =>
{
    e.preventDefault();
    console.log("image dropped");
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith('image/') && !file.name.endsWith('.webp'))
    {
        fileInput.files = e.dataTransfer.files;
        const event = new Event('change');
        fileInput.dispatchEvent(event);
    }
    else
    {
        const imgPrompt = document.getElementById('img-prompt');
        imgPrompt.textContent = 'Only image files are accepted';
    }
});
fileInputButton.addEventListener('click', () =>
{
    fileInput.click();
});
fileInput.addEventListener('change', () =>
{
    console.log("CHANGE");
    if (fileInput.files.length > 0)
    {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = (e) =>
        {
            const imagePreview = document.createElement('img');
            imagePreview.src = e.target.result;
            imagePreview.style.maxWidth = '100%';
            previewField.innerHTML = '';
            //imagePrompt.remove();
            previewField.appendChild(imagePreview);
        };
        reader.readAsDataURL(file);
    }
});

function radioHighlights()
{
    //change colour when radio is selected
    $('#campaign-form input:radio').change(function()
    {
        $(this).closest('.selector-one').find('.highlight').removeClass('highlight');
        $(this).closest('.row').addClass('highlight');
    });
}
const addAssetBtn = document.getElementById("add-asset");
addAssetBtn.addEventListener("click", () =>
{
    radioHighlights();
});
$(document).ready(function()
{
    radioHighlights();
});
$('#campaign-form input:radio').change(function()
{
    $(this).closest('.selector-one').find('.highlight').removeClass('highlight');
    $(this).closest('.row').addClass('highlight');
});
//hide age range field
// Get the checkbox with the id "All-ages-accepted"
const allAgesCheckbox = document.getElementById('All-ages-accepted');
// Get the age range field div with the id "age-range-field"
const ageRangeField = document.getElementById('age-range-field');
// Add a change event listener to the checkbox
allAgesCheckbox.addEventListener('change', function()
{
    // If the checkbox is checked, hide the age range field div; otherwise, show it
    if (allAgesCheckbox.checked)
    {
        ageRangeField.style.display = 'none';
    }
    else
    {
        ageRangeField.style.display = 'flex';
    }
});

