import { Input } from "@/components/ui/input";
import avatar from "@/public/avatar.png";
import Image from "next/image";
import { AiFillCamera } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
      <h1 className="text-2xl font-bold mt-8 sm:mt-12 text-center sm:text-left">
        Account Information
      </h1>

      <div className="relative w-24 h-24 mx-auto mt-6 mb-8">
        <Image
          src={avatar}
          alt="Avatar"
          className="rounded-full object-cover w-24 h-24"
        />
        <label
          htmlFor="avatar-upload"
          className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer"
        >
          <AiFillCamera />
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/jpeg,image/png,image/jpg"
          className="hidden"
        />
      </div>

      <div className="py-6 sm:py-12 space-y-4 w-full sm:w-2/3 md:w-1/2 mx-auto">
        <Input placeholder="Enter your Full Name" />
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="relative flex-grow w-full">
            <Input placeholder="Enter your e-mail" />
            <FaCheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
          </div>
          <div className="flex space-x-2 w-full sm:w-auto">
            <button className="btn-anim text-xs border rounded-lg bg-fm-2 p-2 flex-1 ">
              Change Email
            </button>
            <button className="btn-anim text-xs border rounded-lg bg-fm-2 p-2 flex-1 ">
              Verify Email
            </button>
          </div>
        </div>
        <div className="flex space-x-2 w-full sm:w-auto">
          <Input placeholder="Enter your password" type="password" />
          <button className="btn-anim text-xs border rounded-lg bg-fm-2 p-2 flex-1 ">
            Change Passowrd
          </button>
        </div>
      </div>
      <div className="pb-8 sm:pb-12 text-center sm:text-left">
        <button className="btn-anim p-4 bg-fm-2 rounded-lg w-full sm:w-auto">
          Save Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
