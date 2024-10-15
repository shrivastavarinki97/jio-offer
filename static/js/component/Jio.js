import React, {
    useState
} from 'react'
import Footer from "../assets/images/footer.png"
import {
    RiSmartphoneFill
} from "react-icons/ri";
import {
    BiSolidOffer
} from "react-icons/bi";
import B1 from "../assets/images/b1.png"
import {
    useNavigate
} from 'react-router-dom';

const Jio = () => {
        const navigate = useNavigate()
        const [number, setnumber] = useState()
        const [error, setError] = useState(false)
        const openOffer = () => {
            if (number ? .length === 10) {
                localStorage.setItem("number", number)
                navigate("/recharge")
            } else {
                setError(true)
            }
        }

        return ( <
            div className = "bg-slate-100" >
            <
            img src = {
                B1
            }
            alt = ""
            className = "w-full" / >
            <
            div className = "py-10 px-5" >
            <
            div className = "bg-white border border-slate-200 rounded-2xl py-4 px-6" >
            <
            div className = "text-[#0a2885] flex items-center text-[17px] font-bold w-fit mx-auto" > < RiSmartphoneFill size = {
                30
            }
            /><span>Mobile Recharge</span > < /div> <
            div className = "mt-8" >
            <
            label className = "text-[13px] ml-2 font-semibold" > Jio Mobile Number < /label> <
            input type = "number"
            onChange = {
                (e) => setnumber(e.target.value)
            }
            value = {
                number || ""
            }
            className = "bg-white mt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required / > {
                error && < small className = "text-red-500 my-1" > Please enter valid mobile number!! < /small>} <
                /div> <
                div className = "bg-slate-100 flex items-center p-2 rounded-xl mt-5" >
                <
                BiSolidOffer size = {
                    40
                }
                className = "text-yellow-500 mr-2" / >
                <
                p className = "text-[12px] font-semibold" > Recharge with a₹ 149 plan
                for a month full of digital delights. < /p> <
                /div> <
                div className = "mt-5" >
                <
                button onClick = {
                    openOffer
                }
                className = "bg-[#0a2885] py-4 w-full text-[15px] rounded-full font-bold text-white" > Recharge < /button> <
                /div> <
                /div> <
                /div> <
                img src = {
                    Footer
                }
                alt = ""
                className = "w-full" / >
                <
                /div>
            )
        }

        export default Jio