import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UiState from '../redux/states/UiState';
import {setScreen, setButtons, setTabs, setUiState, setUser, showModal, hideModal} from '../redux/context';
import {logOn, logOff, registration} from '../requests/UserRequests';

export default function LoginModalForm(props) {
    const dispatch = useDispatch()
	const context = useSelector( (state) => state.context)
    console.log("X-X-X")

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container text-center" id="LoginModalForm">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">{props.name}</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" 
                onClick={ () => {pushXBtn(dispatch)}}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body mx-3">
                <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text"></i>
                <input type="email" id="defaultForm-email" className="form-control validate"
                onChange={event => setEmail(event.target.value)}/>
                <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
                </div>

                <div className="md-form mb-4">
                <i className="fas fa-lock prefix grey-text"></i>
                <input type="password" id="defaultForm-pass" className="form-control validate"
                onChange={event => setPassword(event.target.value)}/>
                <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                </div>

            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-default" 
                onClick={ () => {
                    pushConfirmBtn(
                        context, 
                        dispatch, 
                        {email: email, password: password}
                        )}}>
                    {props.name}
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}

function pushXBtn(dispatch) {
	dispatch(hideModal());
}

async function pushConfirmBtn(context, dispatch, form) {
    if (context.ui.loginModal == 1) {
         let token = await logOn(form.email, form.password);
         if (token) {
            localStorage.setItem("token",token)
            dispatch(setUiState({
                state: UiState.auth,
                loginModal: 0,
            }));
            localStorage.setItem("username",form.email)
            dispatch(setUser({name: form.email}))
         }
    } else if (context.ui.loginModal == 2) {
        if (await registration(form.email, form.password)) {
            dispatch(hideModal());
            alert(`User - ${form.email} was registred.`)
        }
    }
}
