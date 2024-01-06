import './index.css'

const NotFound = () => (
  <div className="error-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not found"
      className="error-image"
    />
    <h1 className="error-title">Page Not Found</h1>
    <p className="error-text">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
