import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

type Props = {};

export default function loginPage({}: Props) {
  return (
    <section>
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-8 min-w-[40%] min-h-[50%]">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Enter Email"
              className="block w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            />
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-4">
            Login
          </Button>
          <p className="text-center mb-4">or</p>
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Login with Google
          </Button>

          <div>
            <p className="text-center mt-4">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-blue-500 hover:text-blue-600"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
