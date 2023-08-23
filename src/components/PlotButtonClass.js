import React from 'react';

export default class PlotButtonClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hintShown: false,
        }
    }

    render() {
        return (
            <a 
                // id={idPrefix + props.button.id} 
                href="#" className="list-group-item list-group-item-action" aria-current="true"
                // onClick={() => props.feedback(this.props.button.id)}
                onClick={()=>{ console.log(this.state.hintShown) }}
                onMouseMove={() => this.setState({hintShown: true})}
                onMouseLeave={() => this.setState({hintShown: false})}
            > {this.props.button.name}
                {/* {hintShown ? <p>{props.button.description}</p> : ''} */}
                {/* <p>{hintShown.toString}</p> */}
                <div className='hint'>
                    <p>
                        {this.state.hintShown ? this.props.button.description : ''}
                    </p>
                </div>
            </a>
        )
    }
}