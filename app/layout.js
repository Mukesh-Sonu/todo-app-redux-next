import Header from "@/components/Header";
import "./app.css";
import Providers from "./Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="main-container">
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
