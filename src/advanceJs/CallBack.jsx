import {useEffect, useState} from "react";

const ChildComponent = ({handleParenChildClick}) => {
    return <button onClick={handleParenChildClick}>Parent-Child Communication</button>
}

const CallBack = () => {

    // handleClick function is a callback function
    const handleClick = () => {
        alert("Event Handling");
    }

    // handleParenChildClick function is a callback function
    const handleParenChildClick = () => {
        alert("Parent-Child Communication");
    }

    // Asynchronous Programing
    const [data, setData] = useState('')

    useEffect(() => {
        // FetchData function is a callback function
        const FetchData = (callBack) => {
            setTimeout(() => {
                callBack('Asynchronous Programing')
            }, 1000)
        }

        FetchData((result) => {
            setData(result)
        })
    }, []);


    return (
        <div>
            <h4>CallBack Function </h4>
            <hr/>
            <i>CallBack is a function that function passed as an argument to another function</i>
            <ul>
                <li>In which scenarios, we use:
                    <ol>
                        <li>Event Handling</li>
                        <li>Parent-child communication</li>
                        <li>Asynchronous Programing</li>
                    </ol>
                </li>
            </ul>
            <div className={'mb-3'}>
                <p className={'d-flex flex-column'}>
                    <strong>Event Handling : </strong>
                    <ul>
                        <li>Event means onClick, OnChange,OnMouse est...,</li>
                        <li>Events need a
                            function so we defined the function and that function passed as an argument to event.
                        </li>
                        <li>Example :
                            <button onClick={handleClick}>Event Handling</button>
                        </li>
                    </ul>
                </p>
            </div>

            <div className={'mb-3'}>
                <p className={'d-flex flex-column'}>
                    <strong>Parent-child communication : </strong>
                    <ul>
                        <li> We pass function as props.</li>
                        <li>Example : <ChildComponent handleParenChildClick={handleParenChildClick}/></li>
                    </ul>
                </p>

            </div>

            <div className={'mb-3'}>
                <p className={'d-flex flex-column'}>
                    <strong>Asynchronous Programing : </strong>
                    <ul>
                        <li>We call function as asynchronous.</li>
                        <li>Example : <span className={'text-info'}>{data}</span>.</li>
                    </ul>
                </p>
            </div>

            <hr/>

            <h5>CallBack Hell</h5>
            <i>CallBack inside another CallBack that's call CallBack Hell.</i>
            <br/>
            <br/>
            Example: <br/>
            <pre className={'d-flex gap-1'}>
            <code className={'w-25'}>
                {`
               const post = [
                  { post_id: 1, post_title: 'First Post' },
                  { post_id: 2, post_title: 'Second Post' },
                  { post_id: 3, post_title: 'Third Post' },
                ];              
                `}
            </code>
                <hr style={{height: "130px", width: "1px"}}/>
                <code className={'w-25'}>
                {`
                const comments = [
                  { post_id: 2, comment: 'Great!'},
                  { post_id: 2, comment: 'Nice Post!'},
                  { post_id: 3, comment: 'Awesome Post!'},
                ];
              
                `}
            </code>
            </pre>
            <hr/>
            <pre className={'d-flex gap-1 justify-content-start w-100'}>
                <p>Step 1:</p>
                <code className={'w-25 d-flex justify-content-end'}>
                    {
                        `
                       const getPost = (id, callBack) => {
                            const findPost = post.find(post => post.post_id === id);
                            if(findPost){
                                callBack(null, findPost);
                            }else{
                                callBack('post not found', undefined);
                            }
                            return findPost;
                        }
                       `
                    }
                </code>
                 <hr style={{height: "200px", width: "1px"}}/>
                  <p>Step 2:</p>
                  <code className={'d-flex justify-content-end'} style={{width: "40pc"}}>
                    {
                        `
                       const getComment = (id, callBack) => {
                            const findComment = comments.filter(comment => comment.post_id === id);
                            if(findComment){
                                callBack(null, findComment);
                            }else{
                                callBack('comment not found', undefined);
                            }
                            return findComment;
                        }
                       `
                    }
                </code>
                 <hr style={{height: "200px", width: "1px"}}/>
                  <p>Old Solution:</p>
                  <code className={'w-25 d-flex justify-content-end'}>
                    {
                        `
                        getPost(2,(error,post) => {
                            if(error) throw error;
                            console.log(post);
                            getComment(post._id, (error,comment) => {
                                if(error) throw error;
                                console.log(comment);
                            })
                        })`
                    }
                </code>
            </pre>
            <hr/>
            <p>New Solution : </p>
            <pre className={'d-flex'}>
                <code className={'w-50'}>
                    {
                        `
                        const getResponse = async() => {
                            try{
                                const post = await getPost(2, (error, post) => {});
                                console.log(post);
                                const comment = await getComment(post._id, (error, comment) => {});
                                console.log(comment);
                                return {...post, comments : comment}
                            }catch(error){
                                console.log("Error : ", error)
                            }
                        }
                        
                        getResponse();
                        `
                    }
                </code>
                 <hr style={{height: "200px", width: "1px"}}/>
                  <p>Response : </p>
                  <code className={'w-50'}>
                    {
                        `
                      { post_id: 2, 
                      post_title: 'Second Post' , 
                      comments : [ 
                        { post_id: 2, comment: 'Great!'},
                        { post_id: 2, comment: 'Nice Post!'},
                      ]},
                        `
                    }
                </code>
            </pre>

        </div>

    )
}

export default CallBack;