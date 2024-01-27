import "../css/tailwind.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
    title: 'North America Artificial Intelligence Association',
    description: 'Welcome to NAAIA',
  }

  export default function RootLayout({ children}) {
    return (
      <html lang="en">
       <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      </html>
    )
  }

  