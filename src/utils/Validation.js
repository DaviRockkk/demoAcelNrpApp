export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};


// o copilot escreveu isso tudo sozinho
export const validatePassword = (password) => {
    // A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
};  