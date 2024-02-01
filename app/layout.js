import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../css/tailwind.css";
import Breadcrumb from "../components/breadcrumb";

export const metadata = {
    title: 'North America Artificial Intelligence Association',
    description: 'Welcome to NAAIA',
  }

  export default function RootLayout({children}) {
    return (
      <html lang="en">
        
        <Navbar />
        {/* <Breadcrumb/> */}
        <main>
          {children}
        </main>
        <Footer/>
        
      </html>
    )
  }
