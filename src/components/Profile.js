import React, { useContext } from 'react';
import UserContext from '../context/UserContext';



function Profile() {

    const { user } = useContext(UserContext);

    if (!user) return <div className='pl'>Please Login</div>
    return <div className='wl'>Welcome {user.username}</div>
}

export default Profile;
