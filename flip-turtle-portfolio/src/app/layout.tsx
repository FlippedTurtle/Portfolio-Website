import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}