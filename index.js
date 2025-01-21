var typed = new Typed(".text",{
    strings:["Frontend Developer","Java Developer","Full Stack Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});



(function () {
    emailjs.init('Ct_Aq0BWDpV0ugHWQ');
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = this.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    alert("Your response will be recorded!");

    emailjs.sendForm('service_ud3vt2d', 'template_ll30uyh', this)
        .then(function (response) {
            alert("Message sent successfully!");
        }, function (error) {
            alert("Failed to send message. Please try again.");
        });
});
