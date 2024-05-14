import React, {useEffect, useState} from 'react';
import axios from "axios";

const PostPage = () => {
    const [posts,setPosts]=useState([])

    const getPost = async () =>{
        const response = await axios.get('https://dummyjson.com/posts')
        setPosts(response.data.posts)
    }

    useEffect(()=> {
        getPost()
    },[])
    return (
        <div>
            <ol>
                {
                    posts.map(post => <li key={post.id}> {post.title}</li> )
                }
            </ol>
        </div>
    );
};

export default PostPage;