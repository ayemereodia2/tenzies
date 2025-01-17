export default function Pip({ props }) {
    const { number, isHeld, action, id } = props;

    const BASE_COLOR = "#FFFFFF";
    const HELD_COLOR = "#a7a3a3";
    const ACTIVE_COLOR = "#5035FF";

    // Define the mapping of number to active style indices
    const activeIndices = {
        1: [4],
        2: [3, 5],
        3: [3, 4, 5],
        4: [0, 2, 6, 8],
        5: [0, 2, 4, 6, 8],
        6: [0, 1, 2, 6, 7, 8],
    };

    // Create styles array
    const styles = Array(9).fill({ backgroundColor: isHeld ? HELD_COLOR : BASE_COLOR });

    (activeIndices[number] || []).forEach((index) => {
        styles[index] = { backgroundColor: ACTIVE_COLOR };
    });

    return (
        <button
            onClick={() => action(id)}
            className="dice-component"
            aria-label={`Die with value ${number} is ${isHeld ? "Held" : "Not Held"}`}
            aria-pressed={isHeld}
            style={{ backgroundColor: isHeld ? HELD_COLOR : null }}
        >
            {styles.map((style, index) => (
                <div key={index} style={style}></div>
            ))}
        </button>
    );
}



/*export default function Pip(props) {
    let styles = Array(9).fill({backgroundColor: "#FFFFFF"})
   styles = styles.map(style =>  ({ backgroundColor: props.props.isHeld ? "#a7a3a3" : "#FFFFFF"}))

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
        className={ "dice-component"
        } aria-label={`Die with value ${props.props.number} is ${props.props.isHeld ? "Held" : "Not Held"}`}
        aria-pressed={props.props.isHeld}
        style = {{backgroundColor: props.props.isHeld ? "#a7a3a3" : null}}
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
}*/