$(".nav-item").click( function() {
    $(".nav-item").removeClass("active")
    $(".container.main").addClass("d-none")
    $(this).addClass("active");
    if (this.id == "about"){
        $("#profileDiv").removeClass("d-none");
    } else if (this.id == "portfolio") {
        $("#portfolioDiv").removeClass("d-none");
    } else if (this.id == "contact") {
        $("#contactDiv").removeClass("d-none");
    }
})