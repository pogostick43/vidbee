//Set the states for the asset summary field
function setSummary(sceneContainer){
    
    const fullVideoContainer = sceneContainer.getElementsByClassName("full-video-spec")[0];
    const extraAssetContainer = sceneContainer.getElementsByClassName("extra-scene-spec")[0];
    const assetDesc = sceneContainer.getElementsByClassName("brief-spec")[0];

    //set initialized state invisible
    fullVideoContainer.style.display = "none";
    extraAssetContainer.style.display = "none";
    assetDesc.style.display = "none";

    const summaryType = sceneContainer.querySelector('.summary-text');
    const summaryCategory = sceneContainer.querySelector('.summary-category');
    const summaryFormat = sceneContainer.querySelector('.summary-format');
    const summaryLength = sceneContainer.querySelector('.summary-length');
    let isFullVideo = false;
    let selectorOnes = sceneContainer.getElementsByClassName("selector-one");
    for (let sc_i = 0; sc_i < selectorOnes.length; sc_i++)
    {
        let selectorLabels = selectorOnes[sc_i].getElementsByTagName('label');
        for (let i_i = 0; i_i < selectorLabels.length; i_i++)
        {
            let selectorInput = selectorLabels[i_i].getElementsByTagName("input")[0];
            let displayText = selectorLabels[i_i].getElementsByTagName("span")[0].innerHTML;
            //TYPE
            if (selectorInput.name.startsWith('type'))
            {
                console.log("set eventlist");
                selectorInput.addEventListener("click", function()
                {
                    summaryType.innerHTML = displayText;
                    //set visible
                    if (selectorInput.value === 'Full-Video')
                    {
                        extraAssetContainer.style.display = "none";
                        fullVideoContainer.style.display = "block";
                        assetDesc.style.display = "block";
                        isFullVideo = true;
                    }
                    else if (selectorInput.value === 'Scene')
                    {
                        fullVideoContainer.style.display = "none";
                        extraAssetContainer.style.display = "block";
                        assetDesc.style.display = "block";
                        isFullVideo = false;
                        summaryFormat.innerHTML = "";
                        summaryLength.innerHTML = "";
                    }
                })
            }
            //CATEGORY
            else if (selectorInput.name.startsWith('category'))
            {
                selectorInput.addEventListener("click", function()
                {
                    if (isFullVideo)
                    {
                        summaryCategory.innerHTML = displayText;
                    }
                })
            }
            //Format
            else if (selectorInput.name.startsWith('delivery'))
            {
                selectorInput.addEventListener("click", function()
                {
                    if (isFullVideo)
                    {
                        summaryFormat.innerHTML = displayText;
                    }
                })
            }
            //length
            else if (selectorInput.name.startsWith('length'))
            {
                selectorInput.addEventListener("click", function()
                {
                    if (isFullVideo)
                    {
                        summaryLength.innerHTML = displayText;
                    }
                })
            }
            //scene type
            else if (selectorInput.name.startsWith('scene'))
            {
                selectorInput.addEventListener("click", function()
                {
                    if (!isFullVideo)
                    {
                        summaryCategory.innerHTML = displayText;
                    }
                })
            }
        }
    }
}

//Set the actions for the asset summary buttons
function setSummaryActions(sceneContainer){
    const summarySection = sceneContainer.querySelector('.summary');
    summarySection.style.display = "none";
    //SAVE - MINIMIZE
    const saveBtn = sceneContainer.querySelector('.save-btn');
    const newAssetSecion = sceneContainer.querySelector('.new-asset-section');
    saveBtn.addEventListener("click", function()
    {
        newAssetSecion.style.display = "none";
        summarySection.style.display = "flex";

        //Send data to wized. This will also display and clear any errors.
        Wized.data.setVariable("assetdata", getAssetData()[0]);

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
}

//Set and display the price for a single asset
function setAssetPrice(sceneContainer){
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
    });
}
