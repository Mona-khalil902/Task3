import './Jessica.css'
import avatar from '../../assets/images/avatar.jpeg'

function Jessica() {
 

  return (
    <div id='jessicainformation'>
        <img src={avatar} id='photosize'/>
        <h1>Jessica Randall</h1>
        <label>London, United Kingdom</label>
        <p>"Front-end developer and avid reader." </p>
    </div>
      )
}

export default Jessica