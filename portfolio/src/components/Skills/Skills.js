import "./Skills.css"
import "../../Utility.css"

function Skills(props) {
    let skillData = props.skill
    console.log(skillData, "skillData")
    return (
        <>
            <div className="skillContainer" id="skills">
                <h1 className="heading">Skills</h1>
                <div className="skill">
                    {
                        skillData.map((val) => {
                            return (
                                <>
                                    <div className="skill_box">
                                        <img style={{ height: '100px', width: '100px' }} src={val.image} />
                                        <h3>{val.skill}</h3>
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

export default Skills