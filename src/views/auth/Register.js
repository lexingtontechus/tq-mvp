/* eslint-disable no-redeclare */
/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
//import db, { firebaseApp } from "../../firebase";
import {
  SignInForm,
  SignInGoogle,
  SignInFacebook,
  SignInTwitter
} from "components/SignIn";

export default function Register() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <SignInGoogle />
                  <SignInFacebook />
                  <SignInTwitter />
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>

                <div className="relative w-full mb-3">
                  <SignInForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
