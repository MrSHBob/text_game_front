import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import UiState from './redux/states/UiState';
import { useDispatch, useSelector } from 'react-redux';
import {setScreen, setButtons, setTabs, setUi, setUser} from './redux/context';
// import contextActions from ('./redux/context').contextActions;
import LoginModalForm from './components/LoginModalForm';

function App() {
    const dispatch = useDispatch()
	const context = useSelector( (state) => state.context)
	
	localStorage.setItem("BASE_URL","http://localhost:8080")

	console.log(context)
	// localStorage.setItem("token","tokenValue1")
	
	// context.screen.id == 0 ? dispatch(setScreen({ id: 555, name: "THE SCREEN", picUrl: 'www.leningrad', description: '.' })) : console.log("qqq");
	// dispatch(setUi({ type : "SET_STATE", payload : UiState.unAuth, }))

	return (
		<div className="App">
			<header className='header'>
				<Header />
				<Content />
				<LoginModalElement context={context}/>
			</header>
		</div>
	);
}

function LoginModalElement(props) {
	if (props.context.ui.loginModal == 1) {
		return <LoginModalForm name={"Sign In"}/>;
	} else if (props.context.ui.loginModal == 2) {
		return <LoginModalForm name={"Registration"}/>;
	} else {
		return "";
	}
}

export default App;
