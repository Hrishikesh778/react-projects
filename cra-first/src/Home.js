function Home(props) {
    let navData = props.data1;
    console.log(navData, "props");
    // return (

    //         <h1>This is a {props.data1} Component</h1>

    // )
    return (
        <>
            {
                navData.map((val) => {
                  return  <h1>This is a {val} Component</h1>
                })
            }
        </>
    )
}

export default Home