import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: " ",
    default: "Nextjs Tutorial",
    template: "%s | Niroop",
  },
  description: "Powered by Nextjs"
  

}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <p>Header</p>
            <header style={{backgroundColor: "lightskyblue", padding: "1rem"}}></header>
            {children}
            <p>Footer</p>
            <footer style={{backgroundColor: "lightgreen", padding: "1rem"}}></footer>
            </body>
      </html>
    )
  }