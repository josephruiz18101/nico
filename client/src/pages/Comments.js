import { useState, useEffect } from 'react';
import axios from 'axios';

function Comments() {
    const [comments, setComments] = useState([]);
    const [form, setForm] = useState({ name: '', comment: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/api/comments')
            .then(res => setComments(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/comments', form)
            .then(res => setComments([...comments, res.data]))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Comments</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <textarea
                    placeholder="Your Comment"
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                />
                <button type="submit">Post Comment</button>
            </form>
            <ul>
                {comments.map((c) => (
                    <li key={c._id}>{c.name}: {c.comment}</li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
