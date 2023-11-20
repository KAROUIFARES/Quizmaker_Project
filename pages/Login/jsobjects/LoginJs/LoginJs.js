export default {
	Login(){
		var nbtest=appsmith.store.nbtest
		const User={
			"email":EmailInput.text,
			"password":PwdInput.text
		}
		const UserList=appsmith.store.UserSingUp

		const user=UserList.find(item=>item.email===User.email&&item.password===User.password)


		if(user!=null)
		{
			navigateTo("QuizList",{})
		}
		else{
			if(nbtest<3)
			{
				showAlert("Check your Data","warning")
				nbtest++
				storeValue("nbtest",nbtest)
			}
			else{
				showAlert("try again later","error")
				navigateTo("Home",{})
				storeValue("nbtest",0)
			}
		}
		storeValue("user",user)
	}
}