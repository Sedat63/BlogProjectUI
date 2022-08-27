
export function login_api(_username, _password) {

    const user = {username:_username, password:_password};
    

fetch("https://localhost:44363/user/login",{
    method: "POST",
    body: JSON.stringify(user),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
	.then((response) => response.json()) //parse json data
	.then(function (result) {
		console.log(result)
	});

}