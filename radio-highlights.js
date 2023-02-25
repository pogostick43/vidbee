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
