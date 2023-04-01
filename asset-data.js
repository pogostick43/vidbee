function highlightMissingInput(assetId, missingFields) {
  var errorDiv = $('#error-message-' + assetId);
  errorDiv.css('display', 'block');
  var errorText = 'Asset ' + assetId + ' is missing the following parameters: ' + missingFields.join(', ');
  errorDiv.find('.error-text').text(errorText);
}

function clearMissingInput(assetId) {
  $('div[id="error-message-' + assetId + '"]').hide();
}


function getMissingAssetFields(input){
  // Validate input data for each asset
  if (input.type === 'Full-Video') {
    var requiredFields = ['category', 'length', 'delivery', 'channel', 'ratio', 'brief'];
    if (!input.uses_lang) {
      requiredFields.splice(requiredFields.indexOf('lang'), 1);
      input.lang = '';
    }
  } else if (input.type === 'Scene') {
    var requiredFields = ['category', 'ratio', brief'];
  } else {
    console.log('Invalid asset type: ' + input.type);
    return ['Type'];
  }

  var missingFields = requiredFields.filter(function(field) {
    return !(field in input);
  });

  if (missingFields.length > 0) {
    console.log('Missing required fields for asset');
    
    missingFields.forEach(function(field) {
      console.log(field + ' is missing');
    });
    return missingFields;
  }else{
    return [];
  }
}

function getAssetData() {
  var assetData = [];
  var assetDivs = $('#asset-holder div[id^="new-asset-"]');
  var isValid = true;

  assetDivs.each(function() {
    var assetId = $(this).attr('id').split('-')[2];
    var inputs = $(this).find('input:checked, input[type="checkbox"], input[type="text"], textarea');
    var inputData = {};

    inputs.each(function(i_idx, input) {
      var inputName = $(input).attr('name').replace(/-\d+$/, '');;
      var inputVal = $(input).val();

      if ($(input).is(':checkbox')) {
        inputVal = $(input).is(':checked');
      }

      inputData[inputName] = inputVal;
    });
    
    var missingFields = getMissingAssetFields(inputData);
    console.log("MF: "+missingFields);
    if (missingFields.length > 0) {
        console.log("gonna highlight: "+missingFields +"  id: "+assetId);
        highlightMissingInput(assetId, missingFields);
        isValid = false;
    }else{
      console.log("clearing "+assetId);
      clearMissingInput(assetId);
    }

    assetData.push(inputData);
  });

  return [assetData, isValid];
}


