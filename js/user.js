$(document).ready(function () {
    var userListBody = $('.userList tbody');
    var userNumber = 1;

    $('.needs-validation').submit(function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        userNumber++;
        var username = $('#username').val();
        userListBody.append('<tr><td>' + userNumber + '</td><td>' + username + '</td><td><button type="button" class="btn btn-secondary btn-danger deleteTrigger" title="Löschen"><i class="fa fa-trash"></i></button></td>');
        $('.needs-validation').trigger("reset");
        return false;
    });


    $('.deleteTrigger').click(function () {
        if (confirm("wirklich Löschen?")) {
            $(this).parents("tr").remove();
            userNumber--;
        } else {
            console.log("abgebrochen");
        }
    });
});