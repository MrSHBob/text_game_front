
export default function ScreenTab(props) {
    return (
        <li>
            <a className="dropdown-item" href="#">
                {props.tab.name}
            </a>
        </li>
    )
}