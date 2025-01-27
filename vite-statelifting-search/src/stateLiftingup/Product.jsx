function Product({ data1, mdata }) {
    // console.log(mdata)
    // let mapdata = []
    return (
        <>

            {

                mdata.map((val) => {
                    if (val.movieName.toLowerCase() == String(data1).toLowerCase()) {
                        // console.log(val.movieName)
                        return (
                            <>
                                <div className="moviediv">
                                    <h1>Moviename : {val.movieName}</h1>
                                    <h1>Actor : {val.actor}</h1>
                                    <h1>Actress : {val.actress}</h1>
                                    <h1>Category : {val.category}</h1>
                                </div>

                            </>
                        )
                    }
                })


            }

        </>
    )
}

export default Product