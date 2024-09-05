import "./globals.css";
import Head from "./components/Head";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Head/>
        {children}
      </body>
    </html>
  );
}
