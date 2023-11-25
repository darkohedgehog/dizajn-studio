import Link from "next/link";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";



const Socials = () => {
    return (
      <div className="flex items-center gap-x-5 text-lg">
        <Link href={"https://www.facebook.com/szfr.dizajn"} target="blank" className="hover:text-accent transition-all duration-300" prefetch={true}>
        <FaFacebookF />
        </Link>
        <Link href={"https://www.instagram.com/ninoslavjanackovic/"} target="blank" className="hover:text-accent transition-all duration-300" prefetch={true}> 
        <FaInstagram />
        </Link>
        <Link href={"mailto:nino05dizajn@gmail.com"} className="hover:text-accent transition-all duration-300">
        <AiOutlineMail />
        </Link>
        <Link href={"tel:+381641706370"} className="hover:text-accent transition-all duration-300">
        <AiOutlinePhone />
        </Link>

      </div>
    );
  };
  
  export default Socials;