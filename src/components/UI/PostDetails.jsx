import {Link} from 'react-router-dom';

import classes from './PostDetails.module.css';
import Modal from "./Modal";

function PostDetails() {
    const post = ['hey', 'ho'];

    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to="/list" className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }
    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>Author</p>
                <p className={classes.text}>text</p>
            </main>
        </Modal>
    );
}

export default PostDetails;

export async function loader({params}) {
    const response = await fetch('http://localhost:8080/posts/' + params.postId);
    const resData = await response.json();
    return resData.post;
}