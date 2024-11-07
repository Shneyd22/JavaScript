import React, { useState } from "react";

export function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);
    const [commentId, setCommentId] = useState(4);
    const updateCommentId = () => {
        setCommentId((commentId) => commentId + 1);
    }

    const [commentText, setCommentText] = useState();
    const [comment, setComment] = useState({ id: null, text: "" });
    const addToCommentsList = () => {
        updateCommentId();
        setComment((comment) => {
            comment.id = commentId;
            comment.text = commentText;
        });
        setComments([...comments, comment])
        setComment({ id: null, text: "" })
        setCommentText("");
    }
    const deleteFromCommentsList = (idToDelete) => {
        setComments(comments => comments.filter(item => item.id !== idToDelete));
    }

    return (
        <>
            <input
                type='text'
                onChange={(event) => setCommentText(event.target.value)}
                value={commentText}
                placeholder='Комментарий'>
            </input>
            <button onClick={addToCommentsList}>Добавить в список коментариев</button>
            <ul>Список коментариев:
                {comments.map((comment => <li key={comment.id}>{comment.text}
                    <button onClick={() => deleteFromCommentsList(comment.id)}>Удалить</button>
                </li>))}
            </ul>
        </>
    );
}

export default CommentsList;