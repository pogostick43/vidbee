//Replace assetCount with the actual asset count. Workaround because of webflow limitations	
const assets = sceneContainer.querySelectorAll('[name$="-assetCount"]');
assets.forEach(asset =>
{
    const name = asset.getAttribute('name');
    const newName = name.replace(/-assetCount$/, '-' + assetCount);
    asset.setAttribute('name', newName);
});
const div_assets = sceneContainer.querySelectorAll('div[id$="new-asset-assetCount"]');
div_assets.forEach(div_asset =>
{
    const name = div_asset.getAttribute('id');
    const newID = name.replace(/-assetCount$/, '-' + assetCount);
    div_asset.setAttribute('id', newID);
});
scenesDiv.appendChild(sceneContainer);
const summarySection = sceneContainer.querySelector('.summary');
summarySection.style.display = "none";
//SAVE - MINIMIZE
const saveBtn = sceneContainer.querySelector('.save-btn');
const newAssetSecion = sceneContainer.querySelector('.new-asset-section');
saveBtn.addEventListener("click", function()
{
    newAssetSecion.style.display = "none";
    summarySection.style.display = "flex";
});
//EDIT - ENLARGE
const editBtn = sceneContainer.querySelector('.edit-btn');
editBtn.addEventListener("click", function()
{
    newAssetSecion.style.display = "block";
    summarySection.style.display = "none";
});
//DELETE SUMMARY
const delBtn_summary = sceneContainer.querySelector('.trash-summary');
delBtn_summary.addEventListener("click", function()
{
    sceneContainer.remove();
    updatePrice();
});
//DELETE ASSET PAGE
const delBtn_asset = sceneContainer.querySelector('.trash-asset');
delBtn_asset.addEventListener("click", function()
{
    sceneContainer.remove();
    updatePrice();
});
//SET RELEVANT OPTIONS VISIBLE AND RESET
const fullVideoContainer = sceneContainer.getElementsByClassName("full-video-spec")[0];
const extraAssetContainer = sceneContainer.getElementsByClassName("extra-scene-spec")[0];
const assetDesc = sceneContainer.getElementsByClassName("brief-spec")[0];

function detailsInvisible()
{
    fullVideoContainer.style.display = "none";
    extraAssetContainer.style.display = "none";
    assetDesc.style.display = "none";
}
detailsInvisible();

function clearInput()
{
    //Remove all highlights
    const highlights = sceneContainer.getElementsByClassName("highlight");
    for (let h_i = 0; h_i < highlights.length; h_i++)
    {
        let input = highlights[h_i].getElementsByTagName("input")[0]
        if (!input.name.startsWith('type'))
        {
            highlights[h_i].classList.remove("highlight");
        }
    }
    //Remove all checked, do not include type
    const checkedBoxes = sceneContainer.getElementsByClassName("row");
    for (let h_i = 1; h_i < checkedBoxes.length; h_i++)
    {
        let input = checkedBoxes[h_i].getElementsByTagName("input")[0];
        if (!input.name.startsWith('type'))
        {
            input.checked = false;
        }
    }
    //Clear asset brief
    sceneContainer.getElementsByClassName("textarea")[0].value = "";
}
//Set lang invisible initially
const langCheckbox = $(sceneContainer).find('input[name="uses-lang"]')[0];
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
//Set event listners to all elements that contain a price id
// Initialize total price to 0
//let assetPrice = 0;
//let priceItems = {} //Holds all addons affecting the price
// Set event listener to all elements with the attribute 'price'
$('input[type="radio"][price]').on('change', function()
        {
            //sum up all "price" in scene container where input is checked
            var assetPrice = 0; // initialize total price to zero
            $(sceneContainer).find('input[type="radio"][price]:checked').each(function()
            {
                var itemPrice = this.getAttribute('price');
                if (itemPrice)
                {
                    assetPrice += parseInt(itemPrice);
                } // add price of checked input to total}
            });
            sceneContainer.querySelector('.price-summary').innerHTML = "€" + assetPrice;
            updatePrice();
            /* 
	  const $this = $(this);
	  console.log($this[0]);
	  let name = $this.attr('name');
	  console.log(name);
  
	  if (name.startsWith('type')) {
	    priceItems = {}
	  }

	  if ($this.is(':checked')) {
	    const price = parseFloat($this.attr('price'));
	    var priceName = $(this).attr('name').split('-')[0];
	    priceItems[priceName] = price;

	  }

	  let assetPrice = 0;
	  for (const key in priceItems) {
		  if (typeof priceItems[key] === 'number') {
		    assetPrice += priceItems[key];
		  }
		}

		allAssetsPrice[assetCount] = assetPrice;

		//set the asset price in summary
		*/
