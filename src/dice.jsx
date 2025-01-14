export default function Dice(props) {
    return (
        <div
        onClick={() => props.action(props.id)}
        className={props.isHeld ? "dice-component-isHeld" : "dice-component"
        }>
            <span>{props.number}</span>
        </div>
    )
}