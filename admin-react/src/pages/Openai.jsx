import { useEffect, useState } from "react";
import axios from "axios";
export default function Openai(){

    const [showImage, setShowImage] = useState("");
    const [inputText, setInputText] =useState("");
    const [start, setStart]= useState(false);
    useEffect(() => {
        axios
        .get('http://localhost:8000/openai/generate')
        .then((res, req) => {
          setShowImage(res.data);
          setInputText(req.query);

        });
    }, []);
    
    const submits=()=>{
        
    }

    console.log(showImage);
    return (
        <>
            <form>
            <fieldset >
                <legend>Disabled fieldset example</legend>
                <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Promp</label>
                    <input 
                    resource={inputText}
                    type="text" 
                    id="disabledTextInput" 
                    className="form-control" 
                    placeholder="Search example" />
                </div>
                <div className="mb-3">
                <label for="disabledSelect" className="form-label">Size</label>
                <select id="disabledSelect" className="form-select">
                    <option>256x256</option>
                    <option >450x450</option>
                    <option >1024x1024</option>
                </select>
                </div>
                <div className="mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
                    <label className="form-check-label" for="disabledFieldsetCheck">
                    Can't check this
                    </label>
                </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>

            <img 
                src={showImage} 
                className="rounded mx-auto d-block" 
                alt="..."
                // show={showImage}
            >      
            </img>
            </form>
        </>
    );
}