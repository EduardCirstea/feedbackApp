import React from 'react'
import {Link} from 'react-router-dom'

function Post() {
  return (
    <div>
        <h1>This is a post </h1>
        <p>This is the post page</p>
        <Link to='/'>
            Home
        </Link>
    </div>
  )
}

export default Post