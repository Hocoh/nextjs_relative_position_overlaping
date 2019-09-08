import React, { Component } from 'react'

class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div className="component">
        <p>
          Red
        </p>
        <style jsx>{`
          .component{
            width:100%;
            height:100%;
            position:relative;
          }

          p {
            padding: 10px 10px 10px 10px;
            color: white;
            background-color: red;
          }
        `}</style>
      </div>
    )
  }
}

export default index