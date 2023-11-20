export default {
	Meth(){
		const user={
			"firtname":FnInput.text,
			"lastname":LnInput.text,
			"email":EmailInput.text,
			"phone":PhoneInput.text,
			"password":PwdInput.text
		}
		var UserList=appsmith.store.userList
		UserList.push(user)
		storeValue("UserSingUp",UserList)
		navigateTo("Login",{})
	}
}