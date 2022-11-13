$(document).ready(function () {
    $("#request-form").submit(function (e) {
        e.preventDefault();
        let fd = new FormData();
        let data = $(this).serializeArray();
        data.forEach(function (v, k) {
            fd.append(v.name, v.value);
        });
        console.log(data);
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/ajax/request/",
            data: fd,
            processData: false,
            contentType: false,
            cache: false,
        }).done(function (res) {
            if (res) {
                $(this).find('.btn[type="submit"]').prop('disabled', 'disabled');
                window.location.href = 'https://innoagency.ru/novator/application';
            } else {
                $("#ModalAnswerLabel").html('При регистрации возникла ошибка, повторите попытку позже.');
                $('#request').modal('hide');
                $('#ModalAnswer').modal('show');
            }
        });
    })
})
