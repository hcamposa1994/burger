$(function() {
    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function() {
                console.log("Burger eaten with id: " + id);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var name = $("#burger-name").val().trim();
        if(name.length > 0) {
            $.ajax("/api/burgers", {
                type: "POST",
                data: {
                    burger_name: name
                }
            }).then(
                function() {
                    console.log("Added "+ name + " to burger list!");
                    location.reload();
                }
            );
        }
    });
});