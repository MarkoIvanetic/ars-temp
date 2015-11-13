$(document).ready(function() {

    $('a[href^="#"]').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

    function isHighDensity() {
        return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
    }

    function isRetina() {
        return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)')
            .matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2));
    }

    // Appends @2x to image url on retiran or high resolution device 
    if (isRetina() || isHighDensity()) {
        $('.retina-friendly').each(function() {
            var newSrc = $(this).attr('src');
            var extension = newSrc.substr(newSrc.length - 4);
            var result = newSrc.substring(0, newSrc.length - 4) + "@2x" + extension;
            $(this).attr("src", result);
            // $('img[src="' + oldSrc + '"]').attr('src', newSrc);
        });
    }
    //Hide loading image when the page loads
    $(window).load(function() {
        $('#loading').fadeOut(600);
    });
});
