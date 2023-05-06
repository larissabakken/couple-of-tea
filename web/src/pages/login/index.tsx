import React from "react";
import Image from "next/image";

import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";

import Header from "@/components/header";

import { AiOutlineReload } from "react-icons/ai";

export default function Login() {
  const { handleLogin, loading } = useAuth();
  const showToast = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    try {
      await handleLogin(email, password);
      showToast("Successfully logged in!");
    } catch (error) {
      console.log(error);
      showToast(`${error}`, { type: "error" });
    }
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-28 lg:px-8">
        <div className="sm:mx-auto flex items-center flex-col">
          <div>
            <Image
              src="/assets/smash.png"
              width={200}
              height={100}
              alt="logo"
              priority
            />
          </div>
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                User
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--secondary-color)] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--secondary-color)] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[var(--primary-color-dark)] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[var(--primary-color)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? (
                  <AiOutlineReload className="animate-spin" />
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
