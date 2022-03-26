$(window).on("load", function (event) {
  $("body").removeClass("preloading");
  // $('.load').delay(1000).fadeOut('fast');
  $(".loader").delay(500).fadeOut("fast");
});


$("#formRegister").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
    firstName: {
      required: true,
      minlength: 3,
    },
    lastName: {
      required: true,
      minlength: 3,
    },
    phone: {
      phone: true,
      required: true,
    },
    password: {
      password: true,
      required: true,
    },
  },
  messages: {
    email: {
      required: "Email không được để rỗng",
      email: "Không đúng định dạng email",
    },
    firstName: {
      required: "First Name Không được để rỗng",
      minlength: "Tối thiểu 3 ký tự",
    },
    lastName: {
      required: "Last Name Không được để rỗng",
      minlength: "Tối thiểu 3 ký tự",
    },
    phone: {
      required: "Số điện thoại Không được để rỗng",
      phone: "Không đúng định dạng phone",
    },
    password: {
      required: "Password không được để rỗng",
      minlength: "Tối thiểu 3 ký tự",
    },
  },
});
$.validator.methods.phone = function (value, element) {
  return (
    this.optional(element) ||
    /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value)
  );
};