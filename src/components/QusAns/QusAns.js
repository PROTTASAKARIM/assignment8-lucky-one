import React from 'react';
import './QusAns.css'

const QusAns = () => {
    return (
        <div className='qusStyle'>
            <h3>Difference between props and state?</h3>
            <p>Props:</p>
            <p>Props is a short from of proparties.</p>
            <p>Welcome name="Sara" </p>
            <p>Here Welcome is a component that passing the value sara via name property. </p>
            <p>Welcome.js will use that value with props.Props can only use the value that has been passed.props can not set it's value and also can not reset the value that has been passed.  </p>
            <p>State: </p>
            <p>Like props, state holds information about the component. However, the kind of information and how it is handled is differently. When a component needs to keep track of information between renderings the component it can use state.</p>
            <p>Example: useState , useEffect</p>
            <p>Unlike props states value can be changed.</p>
            <p>Example : const [count, setCount] = useState(0);</p>
            <p>setCount(count+1)</p>
            <p>if we use this setCount in a button every time button is clicked use state will reset the value of count.</p>
            <p>So we can say that both props and state can  hold information about the component. But they works differently</p>

            <h3>How useState works?</h3>
            <p>useState is a Hook from React. A hook is a special function that we can use from React features. To use useState we have t import it from react in header. </p>
            <p> Example : import React,  useState  from 'react';</p>
            <p>in the body useState is declared like
                const [count, setCount] = useState(0);
            </p>
            <p>useState returns 2 values one is a variable and a function. here count is a variable and setCount is a function. If we call the function setCount and pass a value in the function. useState takes that value and pass that value to the count variable so that we can use that count variable as an object.</p>



        </div>
    );
};

export default QusAns;