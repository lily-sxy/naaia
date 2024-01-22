import "../css/tailwind.css";

export const metadata = {
    title: 'North America Artificial Intelligence Association',
    description: 'Welcome to NAAIA',
  }

  export default function RootLayout({
    
    children,
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }

  