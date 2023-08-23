import axios from 'axios';

async function logOn(email, password) {

	let url = localStorage.getItem("BASE_URL");
	let full = url + "/api/auth/authenticate";

	let req = axios({
		method: 'post',
		url: full,
		headers: {}, 
		data: {
			email: email,
			password: password,
		}
	  });

	return await req.then((resp) => {
		return resp.data;
    }, (err) => {
		alert(err)
    })
}

function logOff() {
    // erase user credentials and Token
	console.log("TODO - terminate session on server")
}

async function registration(email, password) {

	let url = localStorage.getItem("BASE_URL");
	let full = url + "/api/auth/registration";
    
	let req = axios({
		method: 'post',
		url: full,
		headers: {}, 
		data: {
			email: email,
			password: password,
		}
	  });

	return await req.then((resp) => {
		return true;
    }, (err) => {
		alert(err)
    })
}

export {logOn, logOff, registration};