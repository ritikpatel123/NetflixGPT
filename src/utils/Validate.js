const validateFormData=(email,password)=>{

    const validemail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const validPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if (!validemail ) return "email is not correct";
    if (!validPassword ) return "password is not correct";
    return null;
 }

 export  {
    validateFormData
 };