import axios from 'axios';
// import { setScreen, setButtons, setTabs } from './redux/context';

async function newGame(token) {
    let url = localStorage.getItem("BASE_URL");
	let full = url + "/api/game/loadNew";

	let req = axios({
		method: 'post',
		url: full,
		headers: {
			'Authorization': 'Bearer ' + token,
		},
        data: {},
	  });
	  
	return await req.then((resp) => {
		return resp.data;
    }, (err) => {
		alert(err)
    })
}

async function continueGame(token) {
    let url = localStorage.getItem("BASE_URL");
	let full = url + "/api/game/loadSave";

	let req = axios({
		method: 'post',
		url: full,
		headers: {
			'Authorization': 'Bearer ' + token
		},
        data: {},
	  });

	return await req.then((resp) => {
		return resp.data;
    }, (err) => {
		alert(err)
    })
}

async function makingMove(btnId, token) {
    let url = localStorage.getItem("BASE_URL");
	let full = url + "/api/game/makingMove";

	let req = axios({
		method: 'post',
		url: full,
		headers: {
			'Authorization': 'Bearer ' + token
		}, 
		data: {
			id: btnId,
		},
	  });

	return await req.then((resp) => {
		return resp.data;
    }, (err) => {
		alert(err)
    })

    // TODO Feedback AND save GameState
}

export {newGame, continueGame, makingMove};