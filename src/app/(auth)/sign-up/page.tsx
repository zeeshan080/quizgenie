import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import Image from "next/image";


type Props = {};

export default function signupPage({}: Props) {
  return (
    <main>
      <section className="flex justify-center items-center max-h-[500px] mt-8">
        <div className="flex justify-center items-center bg-gray-50">
          <div className="flex  bg-blue-100">
            <div className="flex-1 flex items-center justify-center p-10">
              <Image
                alt="Welcome illustration"
                height="600"
                src="/images/hero-image.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="w-96 p-10 bg-white rounded-lg shadow-md flex justify-center flex-col">
              <h1 className="text-2xl font-semibold mb-2 text-center">Sign In</h1>
              <p className="mb-6 text-sm text-gray-600">
                Please SignIn to here
              </p>
              <form>
                {/* <div className="flex flex-col space-y-4 mb-4">
            <Input id="email" placeholder="Email" />
            <Input id="password" placeholder="Password" type="password" />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center space-x-2">
              <input className="form-checkbox" type="checkbox" />
              <span className="text-sm">Keep Me Logged In</span>
            </label>
            <Link className="text-sm text-blue-600" href="#">
              Forgot Password?
            </Link>
          </div> */}
                <Button className="w-full mb-4 bg-[#db4437] text-white">
                  SIGN IN WITH GOOGLE
                </Button>
                {/* <div className="text-center mb-4">
                  <span className="text-sm text-gray-500">Or</span>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
