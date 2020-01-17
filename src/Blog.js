import React from 'react'

const Blog = props => {

    let content = props.posts.map((post, i) => {
        console.log({post})
        return <p key={i}>{post}</p>
    })
    console.log('content is', content)
    return (
        <div className="blog"> 
            <h2>Blog</h2>
            {/* {content} */}
        </div>
    )
}

export default Blog

