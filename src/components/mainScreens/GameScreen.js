
export default function GameScreen(props) {
    return (
        <div id='ImageHolder' className='col-md-10' 
            style={{
                // position: 'relative',
                boxShadow: '-3px -3px 15px rgba(0, 0, 0, .4)',
            }}
        >
            <img 
            src={props.screen.picUrl}
            className="m-2" 
            alt=""/>
            <p className='bottom-left mx-3'>{props.screen.description}</p>
        </div>
    )
}