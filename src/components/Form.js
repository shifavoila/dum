import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {},
            isSubmitted: false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // form validation logic
        let errors = {};
        let username = this.state.username;
        let password = this.state.password;
        let email = this.state.email;
        // username
        if(username === '' || password.includes(username)) {
            errors.usernameerror = "Username is required and it cannot be present in password";
        }
        // email
        if(email === '') {
            errors.emailerror = "Email is required";
        }
        // password
        if(password.length < 8) {
            errors.passworderror = "Password must contain min of 8 characters";
        }

        this.setState({ errors });
        // if errors object is empty that means no errors & form can be submitted
        if(Object.keys(errors).length === 0) {
            console.log("Form submitted successfully");
            this.setState({ isSubmitted: true });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='w-50 mx-auto my-5 border border-secondary shadow rounded p-5'>
                <h1 >Login</h1>
                <div className="my-3">
                    <label className="form-label">User Name</label>
                    <input type="text" className="form-control"
                    value={this.state.username}
                    onChange={(e) => this.setState({ username: e.target.value })}
                    />
                    {this.state.errors.usernameerror && 
                    <span className='text-danger'>{this.state.errors.usernameerror}</span>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                     />
                    {this.state.errors.emailerror && 
                     <span className='text-danger'>{this.state.errors.emailerror}</span>
                     } 
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="text" className="form-control"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                    />
                    {this.state.errors.passworderror && 
                     <span className='text-danger'>{this.state.errors.passworderror}</span>
                    } 
                </div>
               
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                {this.state.isSubmitted && 
                <p className='text-success fs-3'>Details submitted successfully</p>
                }
            </form>

        )
    }
}

export default Form;