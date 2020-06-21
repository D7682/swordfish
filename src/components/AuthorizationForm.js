import React from 'react';

class AuthorizationForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          password: 'swordfish',
          authorized: false
        };
        this.authorize = this.authorize.bind(this);
      }
    
      authorize(e) {
        const password = e.target.querySelector(
          'input[type="password"]').value;
        const auth = password == this.state.password;
        this.setState({
          authorized: auth
        });
      }
    
      render() {

          const login = (
              <form action = "#" onSubmit={this.authorize}>
                  <input 
                  type="password"
                  placeholder="Password"/>

                  <input 
                  type="submit"/>
              </form>
          );

          const contactInfo = (
              <div>
                <ul>
                    <li>
                        client@example.com
                    </li>
                    <li>
                        555.555.555
                    </li> 
                </ul>
              </div>
          );

        return (
          <div id="authorization">
            <h1>{ this.state.authorized ? 'Contact' : 'Enter The Password' }</h1>
            { this.state.authorized ? contactInfo : login }
          </div>
        );
    }
}

export default AuthorizationForm;