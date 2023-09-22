(function($) {
    // Use a class selector for selectedVariantPrice and variantSelect
    var selectedVariantPrice = $('.selected-variant-price');
    var variantSelect = $('.variant-select');

    if (variantSelect.length) {
        variantSelect.on('change', function() {
            // Find the selected option within the current block
            var selectedOption = $(this).find(":selected");
            var price = selectedOption.attr("data-price");

            // Format the price using Shopify.formatMoney
            var formattedPrice = Shopify.formatMoney(price, '{{ shop.money_format }}');

            // Update the price within the current block
            var currentSelectedVariantPrice = $(this).closest('.fidi-form').find('.selected-variant-price');
            currentSelectedVariantPrice.html(formattedPrice);
        });
    }
})(jQuery);
