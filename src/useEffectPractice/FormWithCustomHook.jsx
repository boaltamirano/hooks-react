import React, { useEffect, useState } from 'react'

export const FormWithCustomHook = () => {

    const [formState, setFormState] = useState({
        username: '',
        email   : '',
        password: '',
    });

    const {username, email, password} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        console.log('useEffect called!');
    },[]);
    
    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr/>
            <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={ onInputChange }
            />
            <input
                type='email'
                className='form-control mt-2'
                placeholder='example@gmail.com'
                name='email'
                value={email}
                onChange={ onInputChange }
            />
            <input
                type='password'
                className='form-control mt-2'
                placeholder='Pass'
                name='password'
                value={password}
                onChange={ onInputChange }
            />
            
        </>
    )
}
