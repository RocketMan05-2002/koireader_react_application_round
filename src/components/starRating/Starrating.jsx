import { FaStar } from "react-icons/fa6";
import './starrating.css'

export default function Starrating({noOfStars=3}){
    return <div>
        {
            [...Array(5)].map((_,i)=>{
                i = i+1;
                const isActive = i<=noOfStars;
                return <FaStar
                key={i}
                size={16}
                className={`star ${isActive?"active":""}`}
                />
            })
        }
    </div>
}