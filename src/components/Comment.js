import Replies from './Replies';
import Reply from './Reply';
import {useState} from 'react';

function Comment(){
    const [reply, setReply] = useState(false);
    return (
        <div>
            I am the SINGLE COMMENT!
            {reply ? <Reply /> : <button onClick={(e)=>{setReply(!reply)}}>REPLY to this COMMENT.</button>}
            <Replies />
        </div>
    )
}

export default Comment;