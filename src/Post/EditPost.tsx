import { useParams, Link } from 'react-router-dom'
import PostData from '../Model/PostData'
import { Fragment } from 'react/jsx-runtime';
import { useEffect } from 'react';

const EditPost = ({ posts, editPostTitle, setEditPostTitle, editPostBody, setEditPostBody, handleEditPost }: NewPostProps) => {
    const { id } = useParams();
    const post: any = posts.find(post => post.id.toString() === id);

    useEffect(() => {
        if(post){
            setEditPostTitle(post.title);
            setEditPostBody(post.body);
        }
    }, [posts]);

    return (
        <div className="NewPost">
            {post ? (
                <Fragment>
                    <h2>Edit Post</h2>
                    <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={editPostTitle}
                            onChange={(e) => setEditPostTitle(e.target.value)}
                            required />
                        <label htmlFor="body">Body</label>
                        <textarea
                            id="body"
                            name="body"
                            value={editPostBody}
                            onChange={(e) => setEditPostBody(e.target.value)}
                            required />
                        <button
                            type="submit"
                            onClick={() => handleEditPost(post.id)} >
                            Edit Post
                        </button>
                    </form>
                </Fragment>
            ) : (
                <Fragment>
                    <p>Post not found</p>
                    <Link to="/">Back to Home</Link>
                </Fragment>
            )}
      </div>
    )
}

interface NewPostProps {
    posts: PostData[];
    editPostTitle: string;
    setEditPostTitle: any;
    editPostBody: string;
    setEditPostBody: any;
    handleEditPost: any;
}

export default EditPost