function transition() {
//page transition
    $(document).ready(function () {
        var body = $("body");
        body.css("display", "flex");
        body.fadeIn(700);

        $("a.transition").click(function (event) {
            event.preventDefault();
            linkLocation = this.href;
            body.fadeOut(500, redirectPage);
        });

        function redirectPage() {
            window.location = linkLocation;
        }

    });
}

function getFilesFromDirectory(directoryName){
    var result = [];

    return result;
}