import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = props => {
  const {eachItem} = props
  const {id, name, logoUrl} = eachItem
  return (
    <Link to={`/courses/${id}`} className="link-element">
      <li className="list-element">
        <img src={logoUrl} alt={name} className="logo-image" />
        <p className="title">{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
