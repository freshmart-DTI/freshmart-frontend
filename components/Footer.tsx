import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-fm-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between p-6 space-y-4 sm:space-y-0">
          <div className="text-fm-t1 text-sm text-center sm:text-left">
            © 2024 All rights reserved. Freshmart Pte. Ltd.
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <AiOutlineWhatsApp size={20} />
              <div className="flex flex-col text-xs text-fm-t1">
                <span>Whatsapp</span>
                <span>+1 234-567-890</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <AiOutlineMail size={20} />
              <div className="flex flex-col text-xs text-fm-t1">
                <span>Email us</span>
                <span>admin@freshmart.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
