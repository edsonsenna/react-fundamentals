// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import PropTypes from 'prop-types'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const Box = props => {
  const {style = {}, size = 'small'} = props
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
    >
      {`${size} ${style?.backgroundColor} box`}
    </div>
  )
}

Box.propTypes = {
  size: PropTypes.string.isRequired,
  style: PropTypes.shape.isRequired,
}

// const smallBox = <div className="box box--small">small lightblue box</div>
// const mediumBox = <div className="box box--medium">medium pink box</div>
// const largeBox = <div className="box box--large">large orange box</div>

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}} />
      <Box size="medium" style={{backgroundColor: 'pink'}} />
      <Box size="large" style={{backgroundColor: 'orange'}} />
    </div>
    // <div>
    //   {smallBox}
    //   {mediumBox}
    //   {largeBox}
    // </div>
  )
}

export default App
