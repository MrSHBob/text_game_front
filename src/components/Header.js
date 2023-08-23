import { useDispatch, useSelector } from 'react-redux';
import UiState from './../redux/states/UiState';
import {setScreen, setButtons, setTabs, setUiState, setUser, showLoginModal, showRegistrationModal, hideModal} from './../redux/context';
import { logOff } from '../requests/UserRequests';

export default function Header(props) {
    const dispatch = useDispatch()
	const context = useSelector( (state) => state.context)

    return (
        <div className='header-top py-1'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-6 col-sm-4'>
								<h4>TextGame</h4>
							</div>
							<div className='col-sm-4 d-none d-sm-block'>
								<ul className='social-icons d-flex justify-content-center'>
									<li>
										<a href='https://www.linkedin.com/in/vladimirtrufiakov/'>
											<i className="fa-brands fa-linkedin-in"></i>
										</a>
									</li>
									<li>
										<a href='https://github.com/MrSHBob'>
											<i className="fa-brands fa-git"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className='col-6 col-sm-4'>
								<div className='d-flex justify-content-end'>
									<div className="btn-group">
										<div className="dropdown">
											<button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
												{ context.user.name ? context.user.name : "Account"}
											</button>
											<ul className="dropdown-menu">
												<LogOnBtn state = {context.ui.state} dispatcher = {dispatch} />
												<LogOffBtn state = {context.ui.state} dispatcher = {dispatch} />
												<RegistrationBtn state = {context.ui.state} dispatcher = {dispatch} />
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
    )
}

function LogOnBtn(props) {
	if (props.state == UiState.unAuth) { 
		return <li><a className="dropdown-item" href="#" onClick={ () => logOnClick(props.dispatcher)}>Log On</a></li>
	}
}

function LogOffBtn(props) {
	if (props.state == UiState.auth) { 
		return <li><a className="dropdown-item" href="#" onClick={ () => logOffClick(props.dispatcher)}>Log Off</a></li>
	}
}

function RegistrationBtn(props) {
	if (props.state == UiState.unAuth) { 
		return <li><a className="dropdown-item" href="#" onClick={ () => RegistrationClick(props.dispatcher)}>Registrate</a></li>
	}
}

function logOnClick(dispatch) {
	console.log("login --> open LoginModalForm")
	dispatch(showLoginModal());
	// dispatch(setScreen({ id: 555, name: "THE SCREEN", picUrl: 'www.leningrad', description: '.' }, "qwe"));
}

function logOffClick(dispatch) {
	console.log("logoff --> clear token")
	logOff()
	localStorage.removeItem("token")
	localStorage.removeItem("username")
	dispatch(setUiState({
		state: UiState.unAuth,
		loginModal: 0,
	}));
	dispatch(setUser({ username: null}))
}

function RegistrationClick(dispatch) {
	console.log("rega open loginModalForm for registration")
	dispatch(showRegistrationModal());
}
