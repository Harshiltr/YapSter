// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero-content h1", {
    duration: 1.2,
    y: 60,
    opacity: 0,
    ease: "power3.out"
});
gsap.from(".hero-content p", {
    duration: 1.2,
    y: 40,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out"
});
gsap.from(".cta-container .btn", {
    duration: 1,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    delay: 0.6,
    ease: "back.out(1.7)"
});

// Features Animation
gsap.from(".feature-card", {
    scrollTrigger: {
        trigger: ".features-section",
        start: "top 75%",
        toggleActions: "play none none none"
    },
    duration: 1,
    y: 80,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

// Modal Functionality (Signup)
const signupLink = document.getElementById("signup-link");
const signupModal = document.getElementById("signup-modal");
const closeSignupModal = document.getElementById("close-signup-modal");
const signupForm = document.getElementById("signup-form");
const signupSubmitBtn = document.getElementById("signup-submit-btn");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const togglePassword = document.getElementById("toggle-password");
const toggleConfirmPassword = document.getElementById("toggle-confirm-password");
const passwordError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");

// Modal Functionality (Login)
const loginLink = document.getElementById("login-link");
const loginModal = document.getElementById("login-modal");
const closeLoginModal = document.getElementById("close-login-modal");
const loginForm = document.getElementById("login-form");
const loginSubmitBtn = document.getElementById("login-submit-btn");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const toggleLoginPassword = document.getElementById("toggle-login-password");
const loginError = document.getElementById("login-error");

// Open Signup Modal
signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupModal.style.display = "flex";

    gsap.set("#signup-modal .modal-content", { y: 0, opacity: 1 });
    gsap.set("#signup-form .input-group", { y: 0, opacity: 1 });

    gsap.fromTo(
        signupModal,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
    gsap.from("#signup-modal .modal-content", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
    gsap.from("#signup-form .input-group", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3
    });
});

// Close Signup Modal
closeSignupModal.addEventListener("click", () => {
    gsap.to("#signup-modal .modal-content", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
            signupModal.style.display = "none";
            signupForm.reset();
            signupSubmitBtn.style.display = "none";
            passwordError.style.display = "none";
            confirmError.style.display = "none";
            password.classList.remove("invalid");
            confirmPassword.classList.remove("invalid");
        }
    });
});

signupModal.addEventListener("click", (e) => {
    if (e.target === signupModal) {
        gsap.to("#signup-modal .modal-content", {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                signupModal.style.display = "none";
                signupForm.reset();
                signupSubmitBtn.style.display = "none";
                passwordError.style.display = "none";
                confirmError.style.display = "none";
                password.classList.remove("invalid");
                confirmPassword.classList.remove("invalid");
            }
        });
    }
});

// Open Login Modal
loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "flex";

    gsap.set("#login-modal .modal-content", { y: 0, opacity: 1 });
    gsap.set("#login-form .input-group", { y: 0, opacity: 1 });

    gsap.fromTo(
        loginModal,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
    gsap.from("#login-modal .modal-content", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
    gsap.from("#login-form .input-group", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3
    });
});

// Close Login Modal
closeLoginModal.addEventListener("click", () => {
    gsap.to("#login-modal .modal-content", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
            loginModal.style.display = "none";
            loginForm.reset();
            loginSubmitBtn.style.display = "none";
            loginError.style.display = "none";
            loginPassword.classList.remove("invalid");
        }
    });
});

loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        gsap.to("#login-modal .modal-content", {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                loginModal.style.display = "none";
                loginForm.reset();
                loginSubmitBtn.style.display = "none";
                loginError.style.display = "none";
                loginPassword.classList.remove("invalid");
            }
        });
    }
});

// Toggle Password Visibility (Signup)
togglePassword.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

toggleConfirmPassword.addEventListener("click", () => {
    const type = confirmPassword.type === "password" ? "text" : "password";
    confirmPassword.type = type;
    toggleConfirmPassword.textContent = type === "password" ? "👁️" : "🙈";
});

// Toggle Password Visibility (Login)
toggleLoginPassword.addEventListener("click", () => {
    const type = loginPassword.type === "password" ? "text" : "password";
    loginPassword.type = type;
    toggleLoginPassword.textContent = type === "password" ? "👁️" : "🙈";
});

// Signup Form Validation
function validateSignupForm() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!usernameValue || !emailValue || !passwordValue || !confirmValue) {
        isValid = false;
    }

    if (!emailRegex.test(emailValue)) {
        isValid = false;
    }

    if (!passwordRegex.test(passwordValue)) {
        passwordError.textContent = "Password must be 8+ characters, include 1 capital letter and 1 special character.";
        passwordError.style.display = "block";
        password.classList.add("invalid");
        isValid = false;
    } else {
        passwordError.style.display = "none";
        password.classList.remove("invalid");
    }

    if (passwordValue !== confirmValue) {
        confirmError.textContent = "Passwords do not match.";
        confirmError.style.display = "block";
        confirmPassword.classList.add("invalid");
        isValid = false;
    } else {
        confirmError.style.display = "none";
        confirmPassword.classList.remove("invalid");
    }

    signupSubmitBtn.style.display = isValid ? "block" : "none";

    if (isValid) {
        gsap.from("#signup-submit-btn", {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        });
    }

    return isValid;
}

[username, email, password, confirmPassword].forEach(input => {
    input.addEventListener("input", validateSignupForm);
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateSignupForm()) {
        alert("Signup successful! (Demo—connect to backend.)");
        signupForm.reset();
        signupSubmitBtn.style.display = "none";
        gsap.to("#signup-modal .modal-content", {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                signupModal.style.display = "none";
            }
        });
    }
});

// Login Form Validation
function validateLoginForm() {
    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!emailValue || !passwordValue) {
        isValid = false;
    }

    if (!emailRegex.test(emailValue)) {
        isValid = false;
        loginError.textContent = "Please enter a valid email.";
        loginError.style.display = "block";
    } else {
        loginError.style.display = "none";
    }

    loginSubmitBtn.style.display = isValid ? "block" : "none";

    if (isValid) {
        gsap.from("#login-submit-btn", {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        });
    }

    return isValid;
}

[loginEmail, loginPassword].forEach(input => {
    input.addEventListener("input", validateLoginForm);
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
        alert("Login successful! (Demo—connect to backend.)");
        loginForm.reset();
        loginSubmitBtn.style.display = "none";
        gsap.to("#login-modal .modal-content", {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                loginModal.style.display = "none";
            }
        });
    }
});