import React from 'react'
import axiosWithAuth from './axiosWithAuth'

class FriendForm extends React.Component {
    state = {
        friend: {
            id:Number,
            name:"",
            age:Number,
            email:""
        }
    }


    handleChange = e => {
        console.log(this.state)
        this.setState({
            friend:{
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
     }

    render(){
        return(
            <div>
                <h4>Add a new Friend!</h4>
                    <form onSubmit ={this.handleSubmit}>
                        <input 
                            type = "text"
                            name = "name"
                            placeholder = "name"
                            value = {this.state.friend.firstName}
                            onChange = {this.handleChange}
                            />
                        <input 
                            type = "number"
                            name = "age"
                            placeholder = "Age"
                            value = {this.state.friend.age}
                            onChange = {this.handleChange}
                            />
                        <input 
                            type = "text"
                            name = "email"
                            placeholder = "emal"
                            value = {this.state.friend.email}
                            onChange = {this.handleChange}
                            />
                        <button>Add Friend!</button>
                    </form>
            </div>
        )
    }


}
export default FriendForm

