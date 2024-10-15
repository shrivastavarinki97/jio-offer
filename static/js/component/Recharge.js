import React, {
    useEffect,
    useState
} from 'react'
import {
    Link,
    useNavigate
} from 'react-router-dom'
import U5G from "../assets/images/5g.svg"
import JioTV from "../assets/images/jiotv.svg"
import JioCinema from "../assets/images/jiocinema.svg"
import JioSavan from "../assets/images/Jiosavan.svg"
import JioCloud from "../assets/images/jiocloud.svg"
import Netflix from "../assets/images/netflix.svg"
import Amazon from "../assets/images/amazonprime.svg"
import Disney from "../assets/images/disney.svg"
import Sony from "../assets/images/sony.svg"
import Zee5 from "../assets/images/zee5.svg"
import Offer from "../assets/images/Offer.png"
import {
    IoClose
} from "react-icons/io5";
import {
    FaClock
} from 'react-icons/fa'

const Recharge = () => {
        const [show, setShow] = useState(true)
        const navigate = useNavigate()
        const paymentPage = (price) => {
            // if (price === 149) {
            //     window.location = `https://rzp.io/l/w2DcvHG`
            // } else if (price === 199) {
            //     window.location = `https://rzp.io/l/gp3VTSP3`
            // } else if (price === 249) {
            //     window.location = `https://rzp.io/l/HyrTE60D`
            // } else {
            //     navigate("/recharge")
            // }
            localStorage.setItem("price", price)
            navigate("/payment")
        }
        const [seconds, setSeconds] = useState(15 * 60);

        useEffect(() => {
            const interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else {
                    clearInterval(interval);
                }
            }, 1000);

            return () => clearInterval(interval);
        }, [seconds]);

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return ( <
            div > {
                show &&
                <
                div className = "bg-[rgba(0,0,0,0.7)] fixed h-full w-full top-0 p-16 flex items-center"
                onClick = {
                    () => setShow(false)
                } >
                <
                IoClose size = {
                    30
                }
                className = "text-white z-[999] absolute top-[35%] right-[15%]"
                onClick = {
                    () => setShow(false)
                }
                /> <
                img src = {
                    Offer
                }
                alt = ""
                className = "" / >
                <
                /div>} {
                    /* {show &&
                                    <div className="bg-[rgba(0,0,0,0.7)] fixed h-full w-full top-0 p-8 flex items-center" onClick={() => setShow(false)}>
                                        <div className="bg-white rounded-[40px] px-6 py-6">
                                            <h1 className="text-[40px] font-bold text-slate-700">Limited Time Offer</h1>
                                            <p className="font-bold text-slate-700 mt-1">OFFER CLOSES SOON</p>
                                            <button onClick={() => setShow(false)} className="bg-[#0a2885] mt-8 py-2 w-full text-[15px] rounded-full font-bold text-white">OK</button>
                                        </div>
                                    </div>} */
                } <
                div className = "bg-slate-100 py-4 px-4 text-[13px] flex items-center justify-between" >
                <
                div > Recharging
                for < span className = "font-bold text-[13px]" > {
                    localStorage.number && localStorage.number
                } < /span></div >
                <
                Link to = "/"
                className = "text-blue-600" > Change < /Link> <
                /div> <
                div className = "flex items-center justify-center py-1 px-4 mt-2 bg-slate-100 text-[13px]" >
                <
                div className = "text-slate-700 mr-2" > Special Offer Ends In: < /div> <
                    div className = "text-slate-700 flex items-center" > < FaClock className = "mr-[2px] mt-[1px]" / > {
                        minutes
                    }: {
                        remainingSeconds
                    } < /div> <
                    /div> <
                    div className = "pb-8 pt-6 px-4" >
                    <
                    h1 className = "text-[30px] font-bold" > Special Offer Plans < /h1> <
                    h2 className = "text-[20px] font-semibold mt-2" > Recommended(3) < /h2>

                    <
                    div className = "bg-slate-200 rounded-3xl p-4 my-8" >
                    <
                    div className = "bg-slate-700 py-1 px-3 rounded text-white text-[13px] font-bold w-fit" > SPECIAL < /div> <
                    div className = "flex items-center justify-between my-2" >
                    <
                    div className = "flex items-center text-[20px] font-bold text-slate-800" >
                    <
                    div > ₹149 < /div> <
                    div className = "ml-4 line-thro3ugh text-slate-600" > ₹666 < /div> <
                    /div> <
                    div > < img src = {
                        U5G
                    }
                alt = "" / > < /div> <
                /div> <
                div className = "text-[12px] text-blue-700 font-bold" > View Details < /div> <
                div className = "flex items-center justify-between mt-3" >
                <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > VALIDITY < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > 84 days < /div> <
                /div> <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > DATA < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > 1.5 GB / day < /div> <
                /div> <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > Voice < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > Unlimited < /div> <
                /div> <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > SMS < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > 100 / day < /div> <
                /div> <
                /div> <
                div className = "text-slate-600 text-[15px] mt-3" > SUBSCRIPTIONS < /div> <
                div className = "flex items-center mt-2" >
                <
                img src = {
                    JioTV
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    JioCinema
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    JioSavan
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    JioCloud
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                /div> <
                div className = "mt-5" >
                <
                button onClick = {
                    () => paymentPage(149)
                }
                className = "bg-[#0a2885] py-2 w-full text-[15px] rounded-full font-bold text-white" > Recharge < /button> <
                /div> <
                /div> <
                div className = "bg-slate-200 rounded-3xl p-4 my-8" >
                <
                div className = "bg-slate-700 py-1 px-3 rounded text-white text-[13px] font-bold w-fit" > SPECIAL < /div> <
                div className = "flex items-center justify-between my-2" >
                <
                div className = "flex items-center text-[20px] font-bold text-slate-800" >
                <
                div > ₹199 < /div> <
                div className = "ml-4 line-through text-slate-600" > ₹1099 < /div> <
                /div> <
                div > < img src = {
                    U5G
                }
                alt = "" / > < /div> <
                /div> <
                div className = "text-[12px] text-blue-700 font-bold" > View Details < /div> <
                div className = "flex items-center justify-between mt-3" >
                <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > VALIDITY < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > 84 days < /div> <
                /div> <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > DATA < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > 2.0 GB / day < /div> <
                /div> <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > Voice < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > Unlimited < /div> <
                /div> <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > SMS < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > 100 / day < /div> <
                /div> <
                /div> <
                div className = "text-slate-600 text-[15px] mt-3" > SUBSCRIPTIONS < /div> <
                div className = "flex items-center mt-2" >
                <
                img src = {
                    JioTV
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    JioCinema
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    JioSavan
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    JioCloud
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    Netflix
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    Amazon
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                /div> <
                div className = "mt-5" >
                <
                button onClick = {
                    () => paymentPage(199)
                }
                className = "bg-[#0a2885] py-2 w-full text-[15px] rounded-full font-bold text-white" > Recharge < /button> <
                /div> <
                /div> <
                div className = "bg-slate-200 rounded-3xl p-4 my-8" >
                <
                div className = "bg-slate-700 py-1 px-3 rounded text-white text-[13px] font-bold w-fit" > SPECIAL < /div> <
                div className = "flex items-center justify-between my-2" >
                <
                div className = "flex items-center text-[20px] font-bold text-slate-800" >
                <
                div > ₹249 < /div> <
                div className = "ml-4 line-through text-slate-600" > ₹1499 < /div> <
                /div> <
                div > < img src = {
                    U5G
                }
                alt = "" / > < /div> <
                /div> <
                div className = "text-[12px] text-blue-700 font-bold" > View Details < /div> <
                div className = "flex items-center justify-between mt-3" >
                <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > VALIDITY < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > 84 days < /div> <
                /div> <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > DATA < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > 3.0 GB / day < /div> <
                /div> <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > Voice < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > Unlimited < /div> <
                /div> <
                div className = "" >
                <
                div className = "text-slate-600 text-[15px]" > SMS < /div> <
                div className = "text-slate-800 text-[15px] font-bold" > 100 / day < /div> <
                /div> <
                /div> <
                div className = "text-slate-600 text-[15px] mt-3" > SUBSCRIPTIONS < /div> <
                div className = "flex items-center mt-2" >
                <
                img src = {
                    JioTV
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    JioCinema
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    JioSavan
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    JioCloud
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    Netflix
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    Amazon
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    Disney
                }
                alt = ""
                className = "h-8 mx-1" / >

                <
                /div> <
                div className = "flex items-center mt-2" >
                <
                img src = {
                    Sony
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                img src = {
                    Zee5
                }
                alt = ""
                className = "h-8 mx-1" / >
                <
                /div> <
                div className = "mt-5" >
                <
                button onClick = {
                    () => paymentPage(249)
                }
                className = "bg-[#0a2885] py-2 w-full text-[15px] rounded-full font-bold text-white" > Recharge < /button> <
                /div> <
                /div> <
                /div> <
                /div >
            )
        }

        export default Recharge