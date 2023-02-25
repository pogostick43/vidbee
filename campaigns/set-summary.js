//sets the summary for each asset.

function setSummary(sceneContainer){
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
          if (selectorInput.value === 'fullVideo')
          {
            detailsInvisible();
            fullVideoContainer.style.display = "block";
            assetDesc.style.display = "block";
            clearInput();
            isFullVideo = true;
          }
          else if (selectorInput.value === 'scene')
          {
            detailsInvisible();
            extraAssetContainer.style.display = "block";
            assetDesc.style.display = "block";
            clearInput();
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
