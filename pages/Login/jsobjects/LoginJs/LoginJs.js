export default {
	Login(){
		const User={
			"email":EmailInput.text,
			"password":PwdInput.text
		}
		storeValue("User",User)
		LoginApi.run()
	}
}