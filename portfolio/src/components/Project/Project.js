import "./Project.css"
import "../../Utility.css"

function Project(props) {
    let projArr=props.Projects
    return (
        <>

            <div className="projectContainer" id="proj">
                <h1 className="heading">Project</h1>
                <div className="Projects">
                    {
                        projArr.map((val)=>{
                           return( 
                            <>
                            <div className="project_box">
                                <h3>{val}</h3>
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

export default Project