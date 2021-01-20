import { connect } from 'react-redux'
import UserProfile from '../reducers/userProfile'


const mapStateToProps = (state) => ({
    userProfile: state.userProfile
})

const UserProfileContainer = connect(
    mapStateToProps,
)(UserProfile)


export default UserProfileContainer;