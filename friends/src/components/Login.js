import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    state = {
        credentials:{
            username: "",
            password: ""
        }
    }

    handleChane = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e =>{
        e.preventDefault()
        axios.post(`/api/login`, this.state.credentials )
        .then(res => {
            //res.data.payload
            console.log(res)
        localStorage.setItem('token', JASON.stringify(res.data.payload))
        // we need to set up a protected route inside the app component
        // this.props.history.push('/protected)
        })
        .catch(err => console.log(err.response))
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.login}>
                    <input
                        type = "text"
                        name = "username"
                        value = {this.state.credentials.username}
                        onChange = {this.handleChange}
                    />
                    <input 
                        type = "password"
                        name = "password"
                        value = {this.state.credentials.password}
                        onChange = {this.handleChange}
                        />
                        <button>Login</button>
                </form>
            </div>
        )
    }
}
export default Login