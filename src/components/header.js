import React from 'react'
import Link from 'gatsby-link'
import './header.css'

// import logo from '../images/logo-designcode.svg';
// stateless to stateful component

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state =  {
      hasScrolled: false
    }

  }

  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
  }

  handleScroll = (event) => {

    const scrollTop = window.pageYOffset;

    if (scrollTop > 50 ) {
      this.setState({hasScrolled: true});
    } else {
      this.setState({hasScrolled: false});
    }

  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header' }>

        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">People</Link>
          <Link to="/workshop">Workshops</Link>
          <Link to="/courses"><button>Join Now</button></Link>
        </div>

      </div>
    )
  }

}


export default Header
