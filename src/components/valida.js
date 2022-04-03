

const valida = (values) => {
let errors={};

if(!values.fullname){
    errors.fullname ='Name is required';
}
if(!values.email){
    errors.email='email is requeried';
} else if (!/\S+@\S+\.\S+/.test(values.email)){
    errors.email ='email is invalid';

}
if(!values.password){
    errors.password = 'password is required'
}else if(values.password.length<5){
    errors.password= 'password must be tahan 5 five '
}
return errors;
  
}

export default valida;