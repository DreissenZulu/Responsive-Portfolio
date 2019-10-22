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
        $("#overlayPortfolio").addClass("d-none")
    }
})

$("button").click(function() {
    $("#overlayPortfolio").removeClass("d-none")
})