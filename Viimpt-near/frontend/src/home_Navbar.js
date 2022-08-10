import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class home_Navbar extends Component {
	constructor(props){
		super(props);
		this.state={collapsed:false}
	}
	toggle = () => {
		this.setState({collapsed: !this.state.collapsed})
	}

	render(){
		return (
			<>
			<Navbar color='faded' light>
				<NavbarBrand href="/" className="mr-auto">Viimpt</NavbarBrand>
				<NavbarToggler onClick={this.toggle} className="mr-2" />
				<Collapse isOpen={this.state.collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="#">Notice</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Vote</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			</>
		)
	}
}
export default home_Navbar;