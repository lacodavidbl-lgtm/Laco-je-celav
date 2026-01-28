document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact-form");
    const message = document.querySelector("#form-message");
  
    if (!form || !message) {
      return;
    }
  
    const showMessage = (text, type) => {
      message.textContent = text;
      message.className = `form-message ${type}`;
    };
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const subject = form.querySelector("#subject");
      const details = form.querySelector("#details");
  
      if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !details.value.trim()) {
        showMessage("Please complete all required fields before submitting.", "error");
        return;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        showMessage("Please enter a valid email address.", "error");
        return;
      }
  
      showMessage("Thank you! Your message has been received by PowerHub.", "success");
      form.reset();
    });
  });
