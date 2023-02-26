function getAssetData(){
  var assetData = {};
  var assetDivs = $('#asset-holder div[id^="new-asset-"]');
  
  assetDivs.each(function() {
    var assetId = $(this).attr('id').split('-')[2];
    var inputs = $(this).find('input:checked, input[type="checkbox"], input[type="text"], textarea');
    var inputData = {};
    
    inputs.each(function(i_idx, input) {
      var inputName = $(input).attr('name').replace('-' + assetId, '');
      var inputVal = $(input).val();
      
      if ($(input).is(':checkbox')) {
        inputVal = $(input).is(':checked');
      }
      
      inputData[inputName] = inputVal;
    });
    
    assetData['asset-' + assetId] = inputData;
  });

  return assetData;
}
