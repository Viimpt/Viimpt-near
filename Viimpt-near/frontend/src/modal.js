import React,{Component} from "react";

class Modal extends Component {
    render() {
      return <div className='Modal'>
                <Logo />
                <form onSubmit= { this.props.onSubmit }>
                  <Input type='text' name='username' placeholder='username' />
                  <Input type='password' name='password' placeholder='password' />
                  <button> Sign In</button>
                </form>
                <div className='social-signin'>
                  <button className="fb" onClick={ this.props.onClick }><i className="fa fa-facebook" aria-hidden="true"></i></button>
                  <button className="tw" onClick={ this.props.onClick }><i className="fa fa-twitter" aria-hidden="true"></i></button>
                </div>
                  <a href='#'>Lost your password ?</a>
             </div>
    }
  }

  export default Modal;