document.getElementById("bookingForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const issue = document.getElementById("issue").value;

    const subject = `New Booking Request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Date: ${date}\nPreferred Time: ${time}\nIssue: ${issue}`;

    window.location.href = `mailto:it-heroes@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});