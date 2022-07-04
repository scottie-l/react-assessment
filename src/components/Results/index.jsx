import React, { useState } from 'React';
import Results from '../Results';

function Result(props) {
    const [hover, setHover] = useState(0);
    return (
        <div className='results'>
            {[...Array(5)].map((_, index) => {
                index += 1;
                return 
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover|| props.results) ? "on" :" off"}
                        onClick={() => props.setResult(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(props.results)}
                    ></button>
                }
            )}
        </div>
    );
};

export default Result
