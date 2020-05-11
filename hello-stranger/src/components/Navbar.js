import React from 'react'
import '../../node_modules/bulma/css/bulma.css'

class Navbar extends React.Component {
  render() {
    return (
            <nav className="navbar is-dark">
              <div className="navbar-start">
                <div className="navbar-item">
                    <h1>Hello Stranger</h1>
                </div>
              </div>
              <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a className="is-primary button" href="https://github.com/Devonte202/unit-8-project/tree/master/hello-stranger">
                          <span className="icon">
                            <i className="fab fa-github"></i>
                          </span>
                          <span>
                            Github Repo
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        )
  }
}

export default Navbar