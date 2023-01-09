import Title from "./Content/Title";
import Body from "./Content/Body";


export default function Main({handleShow}){
    return (
        <div className='container-sm body-container'>
          <Title handleShow={handleShow}/>
         <Body />
        </div>
    );
}