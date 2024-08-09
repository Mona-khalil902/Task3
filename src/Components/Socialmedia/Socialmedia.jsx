import './Socialmedia.css'
import Selectionlinks from '../Selectionlinks/Selectionlinks'
function Socialmedia() {
      const arrayofObjects =[
    
      ];
  return (
<div id='Socialmedialinks'>
  {arrayofObjects.length >0 ? (
    arrayofObjects.map((item) => {
      return (
        <Selectionlinks 
          key={item.uniqueID}
          linkname={item.linkname}
        />
      );
    })
  ) : (
    <h1>"This array is empty</h1>
  )}
</div>

      )
}

export default Socialmedia