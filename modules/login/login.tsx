import LoginForm from "@/common/layouts/form-login";
import { Suspense } from "react";

export default function LoginPageComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mx-auto h-12 w-12 rounded-full bg-primary flex items-center justify-center">
          <span className="text-white text-xl font-bold">S</span>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <Suspense
        fallback={
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
              <div className="flex justify-center">
                <div className="w-5 h-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              </div>
            </div>
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
