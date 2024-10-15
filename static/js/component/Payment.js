import React, {
    useEffect,
    useState
} from 'react'
import {
    Link,
    useNavigate
} from 'react-router-dom'
import Gapay from "../assets/images/googlepayicon.svg"
import Paytm from "../assets/images/paytm_icon.svg"
import Phonepe from "../assets/images/phonepeicon.svg"
import PhonepeImg from "../assets/images/phonepe-b.webp"
import UPIlogo from "../assets/images/upilogo.jpeg"
import Whatsapppay from "../assets/images/whatspp_pay.svg"
import Lasttwo from "../assets/images/lasttwo.jpg"
import Secured from "../assets/images/secured.jpg"

const Payment = () => {

    const upiid = "gpay-11241520458@okbizaxis"

    const [price, setPrice] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.price) {
            setPrice(localStorage.price)
        } else {
            navigate("/")
        }
    }, [navigate])

    function Upipayment() {
        const url = "upi://pay?ver=01&mode=19&pa=rzpthsqxgjiostore@yesbank&pn=Online&cu=INR&mc=5311&tn=PaymenttoOnline&tr=RZPYOAM8VezrS2J9Qlqrv2&am=" + price
        window.location.href = url;
    }

    function phonepayclick() {
        // const url = "phonepe://pay?ver=01&mode=19&pa=rzpthsqxgjiostore@yesbank&pn=Onlinework&tr=RZPYO7b9WxNCDf0KHlqrv2&cu=INR&mc=5651&qrMedium=04&tn=RZPYOAM8VezrS2J9Qlqrv2&am=" + price
        // const url = "phonepe://pay?ver=01&mode=19&pa=" + upiid + "&pn=Onlineadivasiherbaloil&cu=INR&mc=5311&tn=PaymenttoOnlines&am=" + price
        // const url = "phonepe://pay?pa=" + upiid + "&pn=Shop&am=" + price + "&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn=shop;"
        const url = "phonepe://pay?pa=" + upiid + "&tn=offerAvailed&am=" + price + "&pn=OfferAvailed&mode=02&mc=8999&purpose=00&cu=INR&sign=AAuN7izDWN5cb8A5scnUiNME+LkZqI2DWgkXlN1McoP6WZABa/KkFTiLvuPRP6/nWK8BPg/rPhb+u4QMrUEX10UsANTDbJaALcSM9b8Wk218X+55T/zOzb7xoiB+BcX8yYuYayELImXJHIgL/c7nkAnHrwUCmbM97nRbCVVRvU0ku3Tr"
        window.location.href = url;
    }

    function paytmclick() {
        // const url = "paytmmp://pay?ver=01&mode=19&pa=rzpthsqxgjiostore@yesbank&pn=Onlinework&tr=RZPYO7b9WxNCDf0KHlqrv2&cu=INR&mc=5651&qrMedium=04&tn=RZPYOAM8VezrS2J9Qlqrv2&am=" + price
        // const url = "paytmmp://pay?ver=01&mode=19&pa=" + upiid + "&pn=Onlineadivasiherbaloil&cu=INR&mc=5311&tn=PaymenttoOnlines&am=" + price
        const url = "paytmmp://pay/?pa=" + upiid + "&pn=Shop&purpose=00&am=" + price
        window.location.href = url;
    }

    function gpayclick() {
        // const url = "tez://upi/pay?ver=01&mode=19&pa=rzpthsqxgjiostore@yesbank&pn=Onlinework&tr=RZPYO7b9WxNCDf0KHlqrv2&cu=INR&mc=5651&qrMedium=04&tn=RZPYOAM8VezrS2J9Qlqrv2&am=" + price
        // const url = "tez://upi/pay?ver=01&mode=19&pa=" + upiid + "&pn=Onlineadivasiherbaloil&cu=INR&mc=5311&tn=PaymenttoOnlines&am=" + price
        const url = "tez://upi/pay?pa=" + upiid + "&pn=Shop&purpose=00&am=" + price
        window.location.href = url;
    }

    function whatsappclick() {
        // const url = "whatsapp://pay?ver=01&mode=19&pa=rzpthsqxgjiostore@yesbank&pn=Onlinework&tr=RZPYO7b9WxNCDf0KHlqrv2&cu=INR&mc=5651&qrMedium=04&tn=RZPYOAM8VezrS2J9Qlqrv2&am=" + price
        // const url = "whatsapp://pay?ver=01&mode=19&pa=" + upiid + "&pn=Onlineadivasiherbaloil&cu=INR&mc=5311&tn=PaymenttoOnlines&am=" + price
        const url = "whatsapp://pay?pa=" + upiid + "&pn=Shop&purpose=00&am=" + price
        window.location.href = url;
    }
    return ( <
        div className = "" >
        <
        div className = "py-1 px-[10px] my-5" >
        <
        div className = "flex space-x-4 bg-white border border-slate-200 rounded-xl w-full p-2" >
        <
        ul className = "w-full" >
        <
        li className = "w-full my-2" >
        <
        div className = "flex items-center justify-center py-2 w-full font-sans" >
        <
        span className = "text-[15px] font-semibold mr-2" > Pay₹ {
            localStorage.price && localStorage.price
        }
        using UPI < /span>                            </div >
        <
        /li> {
            /*<li className="w-full my-2">
                                        <Link to="#" onClick={Upipayment}
                                            className="flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full">
                                            <img src={UPIlogo} className="w-10" alt="" />
                                            <span className="ml-3 text-[14px]">UPI Payment</span>
                                        </Link>
                                    </li>*/
        } <
        li className = "w-full my-2" >
        <
        Link to = "#"
        onClick = {
            phonepayclick
        }
        className = "flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full" >
        <
        img src = {
            Gapay
        }
        className = "w-10"
        alt = "" / >
        <
        span className = "ml-3 text-lg" > Google Pay < /span> <
        /Link> <
        /li> <
        li className = "w-full my-2" >
        <
        Link to = "#"
        onClick = {
            phonepayclick
        }
        className = "flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full" >
        <
        img src = {
            Paytm
        }
        className = "w-10"
        alt = "" / >
        <
        span className = "ml-3 text-lg" > Paytm < /span> <
        /Link> <
        /li>

        <
        li className = "w-full my-2" >
        <
        Link to = "#"
        onClick = {
            phonepayclick
        }
        className = "flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full" >
        <
        img src = {
            Phonepe
        }
        className = "w-10"
        alt = "" / >
        <
        span className = "ml-3 text-lg" > PhonePe < /span> <
        /Link> <
        /li> <
        li className = "w-full my-2" >
        <
        Link to = "#"
        onClick = {
            phonepayclick
        }
        className = "flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full" >
        <
        img src = {
            UPIlogo
        }
        className = "w-10"
        alt = "" / >
        <
        span className = "ml-3 text-lg" > Other UPI < /span> <
        /Link> <
        /li>

        <
        li className = "w-full my-2" >
        <
        Link to = "#"
        onClick = {
            phonepayclick
        }
        className = "flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full" >
        <
        img src = {
            Whatsapppay
        }
        className = "w-10"
        alt = "" / >
        <
        span className = "ml-3 text-lg" > Whatsapp Pay < /span> <
        /Link> <
        /li>

        <
        /ul> <
        /div> <
        /div> <
        div className = "mt-5" >
        <
        img src = {
            Secured
        }
        alt = "" / >
        <
        img src = {
            Lasttwo
        }
        alt = "" / >
        <
        /div>

        <
        /div>
    )
}

export default Payment