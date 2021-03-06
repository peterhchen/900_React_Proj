import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    componentDidMount() {
        // We can use use the following statement due to JavaScript 
        // is asynchronously.
        // const posts = axios.get ('https://jsonplaceholder.typicode.com/posts')
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log('response:', response)
        })
    }

    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;