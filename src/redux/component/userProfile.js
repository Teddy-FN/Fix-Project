import React from 'react'


const UserProfile = (props) => {
    const { userProfile } = props
    return (
        userProfile ?
            <div>
                <div className="profile">
                    <img src={`https://soka.kuyrek.com:3005/${user.image}`} alt="" className="photo" />
                </div>
                <h4>{`${userProfile.fullname}`}</h4>
                <div className="desc">
                    <h4>Description</h4>
                    <p>{`${userProfile.description}`}</p>
                </div>
            </div>
            :
            <h1>Hello World</h1>
    )
}

export default UserProfile;