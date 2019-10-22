$(".nav-item").click(function () {
    $(".nav-item").removeClass("active")
    $(".container.main").addClass("d-none")
    $(this).addClass("active");
    if (this.id == "about") {
        $("#profileDiv").removeClass("d-none");
    } else if (this.id == "portfolio") {
        $("#portfolioDiv").removeClass("d-none");
    } else if (this.id == "contact") {
        $("#contactDiv").removeClass("d-none");
    }
})

$("#overlayPortfolio").click(function () {
    if (event.target == event.currentTarget) {
        $("#overlayPortfolio").addClass("fadeOut");
        setTimeout(function() {
            $("#overlayPortfolio").removeClass("fadeOut");
            $("#overlayPortfolio").addClass("d-none");
        }, 300);
    }
})

$("button").click(function() {
    if (event.target.type == "submit") {
        return;
    }
    $("#overlayPortfolio").removeClass("d-none");
    $("#overlayPortfolio").addClass("fadeIn");
    setTimeout(function() {
        $("#overlayPortfolio").removeClass("fadeIn");
    }, 300);
    
})