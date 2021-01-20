import { connect } from 'react-redux'
import { fetchUsers, setUser } from '../actions/users'


const mapStateToProps = (state) => ({
    data: state
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        },
        setUser: (user) => {
            dispatch(setUser(user))
        }
    }
}
