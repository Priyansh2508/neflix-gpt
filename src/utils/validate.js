export const checkValidateData =(email, password)=>{
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) {
        return "Invalid email format";
    }
    if (!isPasswordValid) {
        return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number";
    }
    return null; // No errors
}