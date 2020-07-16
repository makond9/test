$(document).ready(function () {

    // Custom method to validate username
    $.validator.addMethod("usernameRegex", function(value, element) {
       return this.optional(element) || regex_first_last_name.test(value);
    }, "Nazwa musi mieć więcej niż 2 znaki, bez specjalnych symboli i spacji");

    $.validator.addMethod("lastusernameRegex", function(value, element) {
        return this.optional(element) || regex_first_last_name.test(value);
    }, "Nazwisko musi mieć więcej niż 2 znaki, bez specjalnych symboli i spacji");

    $.validator.addMethod("passwordRegex", function(value, element) {
        return this.optional(element) || /[a-z]/.test(value) && /[0-9]/.test(value) && /[A-Z]/.test(value) && /^[0-9A-Za-z]+$/.test(value);
    }, 'Hasło musi być pomiędzy 8-12 znaków, w tym litery (AZ, az) i cyfr (0-9). Bez specjalnych symboli (^@()_#*+/\"?!=.{}~`&) I spacji');

    $.validator.addMethod("phoneRegex", function(value, element) {
        return this.optional(element) || /^(\d[- ]?){7,11}$/.test(value);
    }, "Telefon musi składać się z od 7 do 11 znaków, bez znaków specjalnych");



    $(function () {
        var form = $("#myform")
        form.validate({
            onfocusout: function (element) {
                if(this.currentElements.length != 0 && this.currentElements[0].name == "email"){
                    rebuidEmail($(this.currentElements[0]))
                }
                this.element(element);
                $(element).valid()
            },
            onkeyup: function (element) {
                $(element).valid()
                $('[name="' + element.name + '"]').val(element.value);
                if($(".password").valid()){
                 $('.valid-pass-label').fadeOut(500)
                }
            },

            rules: {
                first_name: {
                    required: true,
                    usernameRegex: true,
                    minlength: 2,
                    maxlength: 60,
                },
                last_name:{
                    required: true,
                    lastusernameRegex: true,
                    minlength: 2,
                    maxlength: 60,
                },
                password : {
                    required: true,
                    passwordRegex: true,
                    minlength: 8,
                    maxlength: 12,
                },
                email: {
                    required: true,
                    email: true,

                },
                phone:{
                    phoneRegex: true,
                    required: true,
                }



            },
            messages: {
                first_name: {
                    required: "Pole imienia jest wymagane",
                    minlength: "Imię musi wynosić co najmniej 2 znaków",
                    maxlength: "Imię może mieć maksymalnie 25 znaków",
                },
                last_name: {
                    required: "Pole nazwiska jest wymagane",
                    minlength: "Nazwisko musi mieć co najmniej 2 znaków",
                    maxlength: "Nazwisko może mieć maksymalnie 25 znaków",
                },
                password: {
                    required: "Pole hasła jest wymagane",
                    minlength: "Hasło musi mieć co najmniej 8 znaków",
                    maxlength: "Hasło nie może być dłuższe niż 12 znaków",
                },
                email: {
                    required: "Pole e-mail jest wymagane",
                    email: "Adres e-mail musi być prawidłowym adresem",
                },
                phone: {
                    required: "Pole numeru telefonu jest wymagane",
                },

            },
            submitHandler: function (form, event) {
                event.preventDefault();
                $("input[name='first_name']").each(function(){
                    $(this).val($(this).val().substr(0,60).replace(/[.-]/g, ' ').replace(/\s\s+/g, ' '))
                });
                $("input[name='last_name']").each(function(){
                    $(this).val($(this).val().substr(0,60).replace(/[.-]/g, ' ').replace(/\s\s+/g, ' '))
                });
                var msg = $(form).serialize();
                var linkAdress = makeSendAdress();
                console.log('linkAdress= ' + linkAdress);
                $('.preloader').show();
                // console.log('data= ' + msg);
                form.submit();
var domainForPixel = $.urlParam('domain');
if(domainForPixel != null){
        $('body').prepend('<iframe width="1" height="1" alt="" style="display:none" src="https://' + decodeURIComponent(domainForPixel) + '"></iframe>');
}

            }
        });
    });

    $(function () {
        var form = $("#myform2")
        form.validate({
            onfocusout: function (element) {
                if(this.currentElements.length != 0 && this.currentElements[0].name == "email"){
                    rebuidEmail($(this.currentElements[0]))
                }
                this.element(element);
            },
            onkeyup: function (element) {
                $(element).valid();
                $('[name="' + element.name + '"]').val(element.value);
                if($(".password").valid()){
                 $('.valid-pass-label').fadeOut(500)
                }
            },

            rules: {
                first_name: {
                    required: true,
                    usernameRegex: true,
                    minlength: 2,
                    maxlength: 60,
                },
                last_name:{
                    required: true,
                    lastusernameRegex: true,
                    minlength: 2,
                    maxlength: 60,
                },
                password : {
                    required: true,
                    passwordRegex: true,
                    minlength: 8,
                    maxlength: 12,
                },
                email: {
                    required: true,
                    email: true,

                },
                phone:{
                    phoneRegex: true,
                    required: true,
                }



            },
            messages: {
                first_name: {
                    required: "Pole imienia jest wymagane",
                    minlength: "Imię musi wynosić co najmniej 2 znaków",
                    maxlength: "Imię może mieć maksymalnie 25 znaków",
                },
                last_name: {
                    required: "Pole nazwiska jest wymagane",
                    minlength: "Nazwisko musi mieć co najmniej 2 znaków",
                    maxlength: "Nazwisko może mieć maksymalnie 25 znaków",
                },
                password: {
                    required: "Pole hasła jest wymagane",
                    minlength: "Hasło musi mieć co najmniej 8 znaków",
                    maxlength: "Hasło nie może być dłuższe niż 12 znaków",
                },
                email: {
                    required: "Pole e-mail jest wymagane",
                    email: "Adres e-mail musi być prawidłowym adresem",
                },
                phone: {
                    required: "Pole numeru telefonu jest wymagane",
                },

            },
            submitHandler: function (form, event) {
                event.preventDefault();
                $("input[name='first_name']").each(function(){
                    $(this).val($(this).val().substr(0,60).replace(/[.-]/g, ' ').replace(/\s\s+/g, ' '))
                });
                $("input[name='last_name']").each(function(){
                    $(this).val($(this).val().substr(0,60).replace(/[.-]/g, ' ').replace(/\s\s+/g, ' '))
                });
                var msg = $(form).serialize();
                var linkAdress = makeSendAdress();
                console.log('linkAdress= ' + linkAdress);
                $('.preloader').show();
                // console.log('data= ' + msg);
                form.submit();
var domainForPixel = $.urlParam('domain');
if(domainForPixel != null){
        $('body').prepend('<iframe width="1" height="1" alt="" style="display:none" src="https://' + decodeURIComponent(domainForPixel) + '"></iframe>');
}

            }
        });
    });
    $(function () {
        var form = $("#myform3")
        form.validate({
            onfocusout: function (element) {
                if(this.currentElements.length != 0 && this.currentElements[0].name == "email"){
                    rebuidEmail($(this.currentElements[0]))
                }
                this.element(element);
            },
            onkeyup: function (element) {
                $(element).valid();
                $('[name="' + element.name + '"]').val(element.value);
                if($(".password").valid()){
                 $('.valid-pass-label').fadeOut(500)
                }
            },

            rules: {
                first_name: {
                    required: true,
                    usernameRegex: true,
                    minlength: 2,
                    maxlength: 60,
                },
                last_name:{
                    required: true,
                    lastusernameRegex: true,
                    minlength: 2,
                    maxlength: 60,
                },
                password : {
                    required: true,
                    passwordRegex: true,
                    minlength: 8,
                    maxlength: 12,
                },
                email: {
                    required: true,
                    email: true,

                },
                phone:{
                    phoneRegex: true,
                    required: true,
                }



            },
            messages: {
                first_name: {
                    required: "Pole imienia jest wymagane",
                    minlength: "Imię musi wynosić co najmniej 2 znaków",
                    maxlength: "Imię może mieć maksymalnie 25 znaków",
                },
                last_name: {
                    required: "Pole nazwiska jest wymagane",
                    minlength: "Nazwisko musi mieć co najmniej 2 znaków",
                    maxlength: "Nazwisko może mieć maksymalnie 25 znaków",
                },
                password: {
                    required: "Pole hasła jest wymagane",
                    minlength: "Hasło musi mieć co najmniej 8 znaków",
                    maxlength: "Hasło nie może być dłuższe niż 12 znaków",
                },
                email: {
                    required: "Pole e-mail jest wymagane",
                    email: "Adres e-mail musi być prawidłowym adresem",
                },
                phone: {
                    required: "Pole numeru telefonu jest wymagane",
                },

            },
            submitHandler: function (form, event) {
                event.preventDefault();
                $("input[name='first_name']").each(function(){
                    $(this).val($(this).val().substr(0,60).replace(/[.-]/g, ' ').replace(/\s\s+/g, ' '))
                });
                $("input[name='last_name']").each(function(){
                    $(this).val($(this).val().substr(0,60).replace(/[.-]/g, ' ').replace(/\s\s+/g, ' '))
                });
                var msg = $(form).serialize();
                var linkAdress = makeSendAdress();
                console.log('linkAdress= ' + linkAdress);
                $('.preloader').show();
                // console.log('data= ' + msg);
                form.submit();
var domainForPixel = $.urlParam('domain');
if(domainForPixel != null){
        $('body').prepend('<iframe width="1" height="1" alt="" style="display:none" src="https://' + decodeURIComponent(domainForPixel) + '"></iframe>');
}

            }
        });
    });
});




// function makeSendAdress() {
//     var protocol = location.protocol;
//     var tmp = location.hostname.replace(/[a-z]{2}\./, '');
//     tmp = protocol + '//cabinet.' + tmp + '/api/register';
//     return tmp;
// }

