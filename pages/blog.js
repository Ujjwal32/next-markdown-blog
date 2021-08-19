import React from 'react'
import fs from 'fs'
import path from 'path'

function Blog(props) {
    return (
        <div>
            Hello
        </div>
    )
}

export async function getStaticProps(){
    const file = fs.readdirSync(path.join('_blogs'))
}

export default Blog
