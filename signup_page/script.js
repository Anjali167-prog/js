document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to stay on the page

    let isValid = true;

    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(error => error.style.display = 'none');

    // Clear previous field values to avoid suggestions of incorrect data
    const inputFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
    inputFields.forEach(input => {
        input.classList.remove('invalid');  // Remove invalid styling (if you have added some CSS for invalid fields)
    });

    // Get form values
    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('Email').value.trim();
    const phoneNumber = document.getElementById('Phonenumber').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    // Validate First Name
    if (firstName === '') {
        document.getElementById('firstname-error').innerText = 'First name is required';
        document.getElementById('firstname-error').style.display = 'block';
        document.getElementById('firstname').classList.add('invalid'); // Add class to style invalid fields
        isValid = false;
    }

    // Validate Last Name
    if (lastName === '') {
        document.getElementById('lastname-error').innerText = 'Last name is required';
        document.getElementById('lastname-error').style.display = 'block';
        document.getElementById('lastname').classList.add('invalid');
        isValid = false;
    }

    // Validate Email
    if (email === '') {
        document.getElementById('email-error').innerText = 'Email is required';
        document.getElementById('email-error').style.display = 'block';
        document.getElementById('Email').classList.add('invalid');
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('email-error').innerText = 'Please enter a valid email address';
            document.getElementById('email-error').style.display = 'block';
            document.getElementById('Email').classList.add('invalid');
            isValid = false;
        }
    }

    // Validate Phone Number
    if (phoneNumber === '' || !/^[0-9]{10}$/.test(phoneNumber)) {
        document.getElementById('phonenumber-error').innerText = 'Phone number must be 10 digits';
        document.getElementById('phonenumber-error').style.display = 'block';
        document.getElementById('Phonenumber').classList.add('invalid');
        isValid = false;
    }

    // Validate Password
    if (password === '') {
        document.getElementById('password-error').innerText = 'Password is required';
        document.getElementById('password-error').style.display = 'block';
        document.getElementById('password').classList.add('invalid');
        isValid = false;
    } else {
        // Check for at least one uppercase letter and one special symbol
        const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/-]).+$/;
        if (!passwordPattern.test(password)) {
            document.getElementById('password-error').innerText = 'Password must contain at least one uppercase letter and one special symbol';
            document.getElementById('password-error').style.display = 'block';
            document.getElementById('password').classList.add('invalid');
            isValid = false;
        }
    }

    // Validate Confirm Password
    if (confirmPassword === '') {
        document.getElementById('confirmpassword-error').innerText = 'Confirm password is required';
        document.getElementById('confirmpassword-error').style.display = 'block';
        document.getElementById('confirmpassword').classList.add('invalid');
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmpassword-error').innerText = 'Passwords do not match';
        document.getElementById('confirmpassword-error').style.display = 'block';
        document.getElementById('confirmpassword').classList.add('invalid');
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        // Optionally, submit the form here using this.submit()
    }
});
