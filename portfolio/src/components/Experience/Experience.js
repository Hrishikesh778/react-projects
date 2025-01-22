import "./Experience.css"
import "../../Utility.css"
function Experience(props) {
    let expArr = props.Experiences
    console.log(expArr, "Experiences")

    return (
        <>
            <div className="experienceContainer" id="Exp">
                <h1 className="heading">Experience</h1>

                <div className="experiences">
                    {
                        expArr.map((val) => {
                            return (
                                <>
                                    <div className="experience_box">
                                        <div className="insideEdu">
                                            <div>{val.name}</div>
                                            <div>{val.year}</div>
                                        </div>
                                        <div>
                                            <span>{val.description}</span>
                                        </div>

                                    </div>

                                </>
                            )

                        })
                    }

                </div>

            </div>
        </>
    )

}

export default Experience