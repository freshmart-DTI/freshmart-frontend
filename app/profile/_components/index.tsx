import { Input } from "@/components/ui/input";
import avatar from "@/public/avatar.png";
import Image from "next/image";
import { AiFillCamera } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

function Profile() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 md:px-8 py-4">
      <h1 className="text-2xl font-bold mt-12">Account Information</h1>

      <div className="relative w-24 h-24 mx-auto mb-4">
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

      <div className="py-12 space-y-4 w-1/2">
        <Input placeholder="Enter your Full Name" />
        <div className="flex items-center space-x-2">
          <div className="relative flex-grow">
            <Input placeholder="Enter your e-mail" />
            <FaCheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
          </div>
          <button className="btn-anim text-xs border rounded-lg bg-fm-2 p-2">
            Change Email
          </button>
          <button className="btn-anim text-xs border rounded-lg bg-fm-2 p-2">
            Verify Email
          </button>
        </div>
        <Input placeholder="Enter your password" type="password" />
      </div>
      <div className="pb-12">
        <button className="btn-anim p-4 bg-fm-2 rounded-lg">
          Save Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
