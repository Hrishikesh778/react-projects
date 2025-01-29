import "./About.css"
import "../../Utility.css"

function About(props) {
    console.log(props, "inside about")
    return (
        <>
            <div className="AboutContainer" id="Abo">
                <h1 className="heading">About</h1>

                <div className="inndiv">
                    <div className="edimage">
                        <img style={{ height: '100px', width: '100px' }} src="./images/about.png" />
                    </div>
                    <div className="about">
                        <div className="about_box">
                            <span>{props.about}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About