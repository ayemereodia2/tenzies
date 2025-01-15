export default function Pip(props) {
    const styles = [{
        backgroundColor: "#FFFFFF"
    }, {
        backgroundColor: "#FFFFFF"
    },{
        backgroundColor: "#FFFFFF"
    },{
        backgroundColor: "#FFFFFF"
    },{
        backgroundColor: "#FFFFFF"
    },{
        backgroundColor: "#FFFFFF"
    },{
        backgroundColor: "#FFFFFF"
    },{
        backgroundColor: "#FFFFFF"
    },{
        backgroundColor: "#FFFFFF"
    }]

    if(props.props.number === 1){
        styles[4].backgroundColor = "#5035FF"
    } else if(props.props.number === 2){
        styles[3].backgroundColor = "#5035FF"
        styles[5].backgroundColor = "#5035FF"
    } else if(props.props.number === 3){
        styles[3].backgroundColor = "#5035FF"
        styles[4].backgroundColor = "#5035FF"
        styles[5].backgroundColor = "#5035FF"
    }
    else if(props.props.number === 4){
        styles[0].backgroundColor = "#5035FF"
        styles[2].backgroundColor = "#5035FF"
        styles[6].backgroundColor = "#5035FF"
        styles[8].backgroundColor = "#5035FF"
    } else if(props.props.number === 5){
        styles[0].backgroundColor = "#5035FF"
        styles[2].backgroundColor = "#5035FF"
        styles[4].backgroundColor = "#5035FF"
        styles[6].backgroundColor = "#5035FF"
        styles[8].backgroundColor = "#5035FF"
    }else if(props.props.number === 6){
        styles[0].backgroundColor = "#5035FF"
        styles[1].backgroundColor = "#5035FF"
        styles[2].backgroundColor = "#5035FF"
        styles[6].backgroundColor = "#5035FF"
        styles[7].backgroundColor = "#5035FF"
        styles[8].backgroundColor = "#5035FF"
    }


    return (
        <button
        onClick={() => props.props.action(props.props.id)}
        className={props.props.isHeld ? "dice-component-isHeld" : "dice-component"
        } aria-label={`Die with value ${props.props.number} is ${props.props.isHeld ? "Held" : "Not Held"}`}
        aria-pressed={props.props.isHeld}
        >
            <div style={styles[0]}></div>
            <div style={styles[1]}></div>
            <div style={styles[2]}></div>
            <div style={styles[3]}></div>
            <div style={styles[4]}></div>
            <div style={styles[5]}></div>
            <div style={styles[6]}></div>
            <div style={styles[7]}></div>
            <div style={styles[8]}></div>
        </button>
    )
}