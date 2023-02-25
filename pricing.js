function updatePrice(){
    console.log("PRICE UPDATE");
    //console.log(getAssetData());
    //function that returns prices for each asset and total price
    // post to campaigns. Set status to draft
    var totalPrice = 0;
    $(document).find('input[type="radio"][price]:checked').each(function()
    {
        var itemPrice = this.getAttribute('price');
        if (itemPrice)
        {
            console.log(this)
            totalPrice += parseInt(itemPrice);
        } // add price of checked input to total}
    });
    //Set number of assets
    document.getElementById("summary-number-assets").innerHTML = document.querySelectorAll("input[name^='type']:checked").length;
    console.log(allAssetsPrice);
    document.getElementById("summary-asset-price").innerHTML = "€" + totalPrice;
    document.getElementById("summary-total-price").innerHTML = "€" + totalPrice * numberOfCreators;
}

//update number of creators in summary. Set up listener
const numberOfCreatorsInput = document.getElementById('numberOfCreators');
const summaryNumberCreators = document.getElementById('summary-number-creators');
numberOfCreatorsInput.addEventListener('input', function(event)
{
    numberOfCreators = event.target.value;
    summaryNumberCreators.innerHTML = numberOfCreators;
});
document.getElementById('numberOfCreators').addEventListener('input', function(){
    updatePrice();
});
