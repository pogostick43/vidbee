function updatePrice(){
    var totalPrice = 0;
    $(document).find('input[type="radio"][price]:checked').each(function()
    {
        var itemPrice = this.getAttribute('price');
        if (itemPrice)
        {
            totalPrice += parseInt(itemPrice);
        } // add price of checked input to total
    });
    //Set number of assets
    document.getElementById("summary-number-assets").innerHTML = document.querySelectorAll("input[name^='type']:checked").length;
    document.getElementById("summary-asset-price").innerHTML = "€" + totalPrice;
    document.getElementById("summary-total-price").innerHTML = "€" + totalPrice * numberOfCreators;
}
