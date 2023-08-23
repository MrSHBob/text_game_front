import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import {newGame, continueGame, makingMove} from '../requests/GameRequests';
import { setScreen, setButtons } from "../redux/context";

export default function PlotButton(props) {
    const dispatch = useDispatch()
	const context = useSelector( (state) => state.context)

    const [hint, setHint] = useState(false)

    return (
        <div>
            <a 
                // id={idPrefix + props.button.id} 
                href="#" className="list-group-item list-group-item-action" aria-current="true"
                // onClick={() => props.feedback(this.props.button.id)}
                onClick={() => pushButton(props.button, context, dispatch)}
                onMouseMove={() => setHint(true)}
                onMouseLeave={() => setHint(false)}
            > 
                <p>{props.button.name}</p>
                <p className='hint'>{hint ? props.button.description : ''}</p>
            </a>
        </div>
    )
}

async function pushButton(button, context, dispatch) {
    if (context.screen.id == 0) {
        if (button.id == 1) {
            // new
            let a = await newGame(localStorage.getItem("token"))
            updateContext({gameState: a, message: "New Game Started"}, context, dispatch)
            console.log('a = ' + a.activeScreen)
        } else if (button.id == 2) {
            // continue
            let a = await continueGame(localStorage.getItem("token"))
            updateContext({gameState: a, message: "Last Progress loaded"}, context, dispatch)
            console.log('b = ' + a)
        }
    } else {
        // make move
        let a = await makingMove(button.id, localStorage.getItem("token"))
        updateContext(a, context, dispatch)
        console.log('c = ' + a)
    }
}

function updateContext(resp, context, dispatch) {
    // set screen
    dispatch(setScreen({
            id: resp.gameState.activeScreen.id,
            name: resp.gameState.activeScreen.name,
            picUrl: resp.gameState.activeScreen.illustrationLink,
            description: resp.gameState.activeScreen.description,
    }))

    // set buttons
    let btns = []
    resp.gameState.activeScreen.buttons.map(btn => {
        btns.push({
            id: btn.id,
			name: btn.name,
			description: btn.description,
        })
    });
    dispatch(setButtons(btns))

    // show message
    if (resp.message) {
        alert(resp.message)
    }
}