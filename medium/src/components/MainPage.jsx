import Cassie from "./Cassie"
import SocialMedia from "./SocialMedia"
import Title from "./Main/Title"
import PiOne from "./Main/Pone"
import wallpaper from '../images/wallpaper.jpg'
import PiTwo from "./Main/Pitwo"
import Comment from './Main/Ikon/Comment'
import Hand from "./Main/Ikon/Hand"
import Button from 'react-bootstrap/Button';

export default function MainPage() {
    const arr = ["Resolutions" , " Decision Making" , "Pshycology", " Self Improvment ", "Science"]
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="profile d-flex m-2">
                    <Cassie />
                    <div className="title">
                        <p>Cassie Kozyrkov</p>
                        <p>Dec 27, 2022 · 9 min read</p>
                    </div>
                </div>
                <div className="logos">
                    <SocialMedia />
                </div>
            </div>
                <div className="bigtitle">
                    <Title/>
                </div>
                <div>
                    <PiOne/> 
                </div>
                <div>
                    <img src={wallpaper} />
                    <p className="d-flex justify-content-center align-items-center fw-lighter">
                        All copyright belong to the author</p>
                </div>
                <div>
                    <PiTwo/>
                    <div>
                        <div className="justify-content-between">
                            <ul className="d-flex first">
                                <li><Hand/>1.5K</li>
                                <li><Comment/>30</li>
                            </ul>
                        </div>
                        <div className="justify-content-between">
                            <ul className="d-flex second">
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between m-3">
                    {arr.map(e=>{
                        return <Button variant="outline-secondary p-2">{e}</Button>
                        
                    })}
                </div>
        </>
    )
}