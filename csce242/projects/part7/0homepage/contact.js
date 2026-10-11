const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('button[type="submit"]');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "a3c2be76-3950-4140-99a7-edfca4af95a8");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        
            formMessage.textContent = "Success! Your message has been sent.";
            formMessage.className = "success-message";
            form.reset();
        } 
        else {
            await new Promise(resolve => setTimeout(resolve, 1000));

            formMessage.textContent = "Something went wrong. Please try again.";
            formMessage.className = "error-message";
        }
        } 
        catch (error) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        formMessage.textContent = "Something went wrong. Please try again.";
        formMessage.className = "error-message";
        } 
        finally{
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});