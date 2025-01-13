import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
    const [time, setTime] = useState(1);
    const timeout = useRef(0);
    const navigate = useNavigate();

    useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setTime(t => t - 1);
        }, 1000);

        if (time <= 0) {
            navigate('/');
        }

        return () => {
            clearTimeout(timeout.current);

        };
        //eslint-disable-next-line
    }, [time]);
    return (
        <div>
          {/*eslint-disable-next-line react/no-unescaped-entities*/}
            <h1>Redireciando</h1>
        </div>
    );
};
