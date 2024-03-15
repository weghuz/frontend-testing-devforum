import { ReactNode } from "react";

export function FormError({ children }: { children: ReactNode }) {
  return (
    <div className="text-red-500 text-xs italic">
      <span role="alert">{children}</span>
    </div>
  );
}
