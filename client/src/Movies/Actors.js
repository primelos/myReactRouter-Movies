import React from 'react'

const Actors = props => {
console.log(`actors`, props)
const { title, director, metascore, stars } = props.movie;
console.log(`test4`, props)

    return(
        <div>
            <p>Actors</p>

        </div>
    )
}
export default Actors;