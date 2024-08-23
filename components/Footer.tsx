import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex justify-between bg-fm-1 p-6">
        <div className="text-fm-t1 text-sm">
          © 2024 All rights reserved. Freshmart Pte. Ltd.
        </div>
        <div className="flex flex-center space-x-4">
          <AiOutlineWhatsApp size={20} />
          <div className="flex flex-col text-xs text-fm-t1">
            <span>Whatsapp</span>
            <span>+1 234-567-890</span>
          </div>
          <AiOutlineMail size={20} />
          <div className="flex flex-col text-xs text-fm-t1">
            <span>Email us</span>
            <span>admin@freshmart.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
