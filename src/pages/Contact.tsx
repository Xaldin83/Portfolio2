import Footer from "../composants/Footer";
import Navbar from "../composants/Header";

import {BiLogoGmail } from "react-icons/bi";
import { Link } from "@react-email/link";

const Email = () => {
return <Link href="https://mariuslucas.pichon@gmail.com"><BiLogoGmail/>Mon mail</Link>;
};

const Contact = () =>{

    return (
        <>

            <Navbar/>

            <Email/>

            <Footer/>
        </>
    )
};

export default Contact