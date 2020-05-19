import axiosWithAuth from "./axiosWithAuth"
import React from  "react"
import FriendForm from './FriendForm'

class FriendsList extends React.Component { 
    state = {
        friendsList: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then( res => {
                this.setState({
                    friendsList: [...this.state.friendsList, ...res.data]
                })
            })
            .catch(err => console.log({err}))
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <h1> FriendsList </h1>
                <FriendForm/>
                {this.state.friendsList.map(friend => {
                    return <div>
                        <h2>{friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                        </div>
                })}
            </div>      
        )
    }
}
export default FriendsList