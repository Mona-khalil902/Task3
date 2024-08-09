import './Selectionlinks.css'

function Selectionlinks(props) {
 

  return (
    <div id='Socialmedialinks'>
        <button className='selectionlinks'><span>{props.linkname}</span></button>
    </div>
      )
}

export default Selectionlinks