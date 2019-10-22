function writeToOverlay(object) {
    $("#pfTitle").text(object.title);
    $("#pfDesc").text(object.desc);
    $("#pfGit").attr("href", object.pageUrl);
    $("#pfRepo").attr("href", object.hubUrl);
}

function closeOverlay(event) {
    if (event.target == event.currentTarget) {
        $("#overlayPortfolio").addClass("fadeOut");
        setTimeout(function() {
            $("#overlayPortfolio").removeClass("fadeOut");
            $("#overlayPortfolio").addClass("d-none");
        }, 300);
    }
}

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
    closeOverlay(event);
})

$(".closeBox").click(function () {
    closeOverlay(event);
})

$("button").click(function() {
    if (event.target.type == "submit") {
        return;
    }
    if ($(this).attr("id") == "pwGen") {
        writeToOverlay(projectsArr.pwGen);
    } else if ($(this).attr("id") == "jsQuiz") {
        writeToOverlay(projectsArr.jsQuiz);
    } else if ($(this).attr("id") == "weathDash") {
        writeToOverlay(projectsArr.weathDash);
    } else {
        return;
    };
    $("#overlayPortfolio").removeClass("d-none");
    $("#overlayPortfolio").addClass("fadeIn");
    setTimeout(function() {
        $("#overlayPortfolio").removeClass("fadeIn");
    }, 300);
    
})