import "./Education.css"

function Education(props) {
    let projArr = props.Educations
    console.log(projArr, "education")
    return (
        <>
            <div className="EducationContainer" id="edu">
                <h1 className="heading">Education</h1>
                <div className="inndiv">
                    <div className="edimage">
                        <img style={{ height: '100px', width: '100px' }} src="./images/education.jpg" />
                    </div>
                    <div className="educations">
                        {
                            projArr.map((val) => {
                                return (
                                    <>
                                        <div className="education_box">
                                            <span>{val.college}</span>
                                            <span>{val.year}</span>
                                        </div>

                                    </>
                                )

                            })
                        }

                    </div>

                </div>


            </div>
        </>
    )
}

export default Education