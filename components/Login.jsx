import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <>
      <div className="bg-[#f0f2f5] min-h-screen w-hull">
        <div className="w-full max-w-[750px] m-auto pt-16 top-10 relative">
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <div className="">
              <Image
                src="/fb-login.svg"
                width={300}
                height={400}
                alt="facebook-login"
                priority
                className="-ml-8"
              />
              <h2 className="text-[#1c1e21] text-xl font-medium">
                Facebook helps you connect and share <br />
                with the people in your life.
              </h2>
            </div>

            <div className="bg-white mt-3 sm:mt-0 shadow-md p-4 rounded-lg w-full max-w-[350px]">
              <p className="text-center p-2 text-gray-500">Log In</p>
              <div>
                <button className="blueButton" onClick={signIn}>
                  Login with Facebook
                </button>

                <p className="text-center text-gray-500 p-2">or</p>

                <button className="whiteButton" onClick={signIn}>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
