export default {
	Meth(){
		const user={
			"firtname":FnInput.text,
			"lastname":LnInput.text,
			"email":EmailInput.text,
			"phone":PhoneInput.text,
			"password":PwdInput.text
		}
		storeValue("UserSingUp",user)
		
	}
}