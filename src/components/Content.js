import PlotButton from './PlotButton';
import ScreenTab from './ScreenTab';
import GameScreen from './mainScreens/GameScreen';
import { useDispatch, useSelector } from 'react-redux';
import UiState from '../redux/states/UiState';

export default function Content(props) {
    const dispatch = useDispatch()
	const context = useSelector( (state) => state.context)


    return (
        <div className='header-middle bg-white py-2'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2 d-flex flex-column'>
                        <div className='row'>
                            <div className="list-group">
                                <PlotBtns context={context} />
                            </div>
                        </div>
                        <div className='row h-100'>
                            <div className='d-flex flex-column-reverse my-1'>
                                <div className="btn-group dropup w-100">
                                    <button type="button" className="btn">Main Game Screen</button>
                                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" 
                                    id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" 
                                    data-bs-reference="parent">
                                        <span className="visually-hidden">Переключатель выпадающего списка</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuReference">
                                        {context.tabs.map((e) =>(
                                            <ScreenTab tab={e} key={e.id}/>
                                        ))}
                                    </ul>
                                </div>	
                            </div>                  
                        </div>
                    </div>
                    <GameScreen screen={context.screen} key={context.screen.id}/>  
                </div>
            </div>
        </div>
    )
}

function PlotBtns(props) {
    if (props.context.ui.state != UiState.unAuth) {
        return props.context.buttons.map((e) =>(
            <PlotButton button={e} key={e.id}/>
        ))
    }
}