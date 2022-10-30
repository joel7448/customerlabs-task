import { ArrowBackIos } from "@mui/icons-material"
import "./Navbar.css"

function Navbar({title}) {
  return (
    <div className='navbar' style={{display:"flex",alignItems : "center"}} >
    <ArrowBackIos className="back"/>View Audience
    </div>
  )
}

export default Navbar