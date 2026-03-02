"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  action: (formData: FormData) => Promise<void>;
  error?: string | null;
  loading?: boolean;
  children: React.ReactNode;
}

export default function Form({
  action,
  error,
  loading,
  children,
  className,
  ...props
}: FormProps) {
  const router = useRouter();

  useEffect(() => {
    if (error) {
      router.push("/dashboard");
    }
  }, [error, router]);

  return (
    <form action={action} className={className} {...props}>
      {children}
      {error && (
        <div className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
