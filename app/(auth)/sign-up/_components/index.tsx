"use client";
import logo from "@/public/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Input } from "@/components/ui/input";

function SignUp() {
  return (
    <div className="flex flex-col sm:flex-row h-screen bg-fm-2">
      <div className="w-full sm:w-2/3 bg-fm-2 p-8 flex flex-col justify-center items-center">
        <div className="mb-8 text-center sm:text-left">
          <Image
            src={logo}
            alt="Freshmart Logo"
            className="mb-4 mx-auto sm:mx-0 size-64"
          />
        </div>
      </div>
      <div className="w-full bg-white p-10 sm:p-24 flex flex-col justify-center sm:rounded-l-3xl">
        <div className="sm:p-8">
          <div className="hidden sm:flex justify-end mb-4">
            <Link href="/" className="btn-anim text-fm-t1 font-bold">
              <AiOutlineArrowLeft size={25} />
            </Link>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
            Create Account
          </h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 text-sm">
            <button>
              <div className="p-4 border border-fm-6 rounded-lg">
                <div className="btn-anim flex-center space-x-2">
                  <span>Sign up with </span>
                  {<FcGoogle size={20} />}
                </div>
              </div>
            </button>
            <button>
              <div className="p-4 border border-fm-6 rounded-lg">
                <div className="btn-anim flex-center space-x-2">
                  <span>Sign up with </span>
                  {<BsFacebook size={20} />}
                </div>
              </div>
            </button>
          </div>

          <div className="flex items-center mb-6">
            <hr className="flex-1 border-fm-t2" />
            <span className="px-4 text-fm-t1">OR</span>
            <hr className="flex-1 border-fm-t2" />
          </div>

          <div className="py-4">
            <Input placeholder="Enter your e-mail" />
          </div>

          <Link href="/sign-up/confirm">
            <button className="w-full p-4 bg-fm-2 rounded-lg">
              Create Account
            </button>
          </Link>

          <p className="mt-4 text-center text-fm-t1">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-fm-t2 font-bold">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
