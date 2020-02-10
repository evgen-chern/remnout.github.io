$("#sendMail").on("click", function () {
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var email = $("#email").val().trim();
    var comment = $("#comment").val().trim();

    if (name == "") {
        $("#errorMess").text("Введите Имя");
        return false;
    } else if(phone == "") {
        $("#errorMess").text("Введите Телефон");
        return false;
    } else if(email == "") {
        $("#errorMess").text("Введите Email");
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
       url: 'ajax/mail.php',
       type: 'POST',
       cache: false,
       data: { 'name': name, 'phone': phone, 'email': email, 'comment': comment },
        dataType: 'html',
        beforeSend: function() {
          $("#sendMail").prop("disabled",true);
        },
        success: function (data) {
            if(!data)
                alert("Ошибка отправки");
            else
                $("#mailForm").trigger("reset");
            $("#sendMail").prop("disabled",false);
        }
    });

});