function submitPaymnetData() {
    let loginForm = document.getElementById("checkOutForm");
    console.log("loginForm", loginForm);
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let fname = document.getElementById("fname");
        let adr = document.getElementById("adr");
        let email = document.getElementById("email");
        let city = document.getElementById("city");
        let state = document.getElementById("state");
        let pinCode = document.getElementById("pinCode");
        let cname = document.getElementById("cname");
        let expyear = document.getElementById("expyear");
        let cvv = document.getElementById("cvv");

        if (fname.value == "" || adr.value == "" || email.value == '' || city.value == '' || state.value == '' || pinCode.value == '' ||
            cname.value == '' || expyear.value == '' || cvv.value == '') {
            alert("Ensure you input a value in both fields!");
        } else {
            alert("This form has been successfully submitted!");
            let paymentDetails = Object.fromEntries(new FormData(document.querySelector('form')).entries());
            console.log("paymentDetails", paymentDetails);
            var paymentDetailsData = JSON.stringify(paymentDetails);
            sessionStorage.setItem('paymentDetails', paymentDetailsData);
            // Construct message for the modal
            var message = "Thank you for submitting the form, ";
            window.location.href = 'success-error.html'
           
        };

    })


}

submitPaymnetData()



