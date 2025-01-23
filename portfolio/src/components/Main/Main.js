import "./Main.css"

function Main(props){
    return(
        <>
         <div className="MainContainer" id="edu">
            <div className="maintext">
                <h1>{props.maintext}</h1>
                <h1>{props.mainsubtext}</h1>
            </div>
            <div className="mainimg">
                <img src={props.mainImg} style={{height: '300px', width:'300px'}}></img>
            </div>
        </div>
        </>
    )
}

export default Main