import "./Main.css"

function Main(props){
    return(
        <>
         <div className="MainContainer">
            <div className="maintext">
                <h1>{props.maintext}</h1>
                <h3>{props.mainsubtext}</h3>
            </div>
            <div className="mainimg">
                <img src={props.mainImg} style={{height: '300px', width:'300px'}}></img>
            </div>
        </div>
        </>
    )
}

export default Main