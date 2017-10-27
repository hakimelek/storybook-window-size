import React from 'react'

const defaultGetWidth = () => window.innerWidth
const defaultGetHeight = () => window.innerHeight

class ScreenDimensions extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.onResize = this.onResize.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    
    if(!this.getHeight) this.getHeight = defaultGetHeight
    if(!this.getWidth) this.getWidth = defaultGetWidth
  }

  updateDimensions() {
    this.setState({
      windowWidth: this.getWidth(),
      windowHeight: this.getHeight()
    })
  }

  onResize () {
    if (this.rqf) return
    if( typeof window !== 'undefined' )
      this.rqf = window.requestAnimationFrame(() => {
        this.rqf = null
        this.updateDimensions()
      })
  }

  componentDidMount () {
    this.updateDimensions()
    if( typeof window !== 'undefined' )
      window.addEventListener('resize', this.onResize, false)
  }

  componentWillUnmount () {
    if( typeof window !== 'undefined' )
      window.removeEventListener('resize', this.onResize)
  }

  render() {
    return (
      <div>
        {this.props.children}
          <div style={{
            position: 'absolute',
            bottom: '20px', 
            right: '20px',
            border: '1px solid rgb(234, 234, 234)',
            borderRadius: '2px',
            color: 'rgb(68, 68, 68)',
            fontSize: '11px',
            letterSpacing: '1px',
            padding: '8px',
            textTransform: 'uppercase',
            fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif'
        }}>
          {this.state.windowWidth} x {this.state.windowHeight}
        </div>
      </div>
    ) 
  }
}

export default ScreenDimensions
