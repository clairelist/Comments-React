import {useState, useEffect, useRef} from 'react';

function Comments(){
    const [comments, setComments] = useState([]);
    const handleCommentsGet = useRef(()=>{});

    handleCommentsGet.current = () => {
        //handle fetch of data
        // fetch('../data.json')
        //     .then((res)=>{
        //         //setComments(res.comments); //?
        //         const cx = res.json();
        //         setComments(cx);
        //     })
    }

    //on first mount of component, do this.
    useEffect(()=>{
        handleCommentsGet.current();
        console.log(comments); //WHY is this an array with length 0 ?????????????
    }, [])

    
    return (
        <div>
            {/* map over all the comments, and render them here. Order by highest rating first. */}

        </div>
    )
}

export default Comments;