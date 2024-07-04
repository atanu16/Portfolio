import { montserrat, poppins } from '@/constant/font'
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: "Atanu Bera",
  description: "Atanu Bera's portfolio.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id='style-1' className={`${montserrat.variable} ${poppins.variable} lg:overflow-x-hidden`}>
     {/* header for SEO   */}
      <head> 
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to Atanu Bera's portfolio, showcasing projects, skills, and blog posts related to web development and more." />
        <meta name="keywords" content="Atanu Bera, portfolio, web developer, projects, Atanu bera from haldia , Atanu bera from west bengal , blog, web development, frontend developer, backend developer, full-stack developer" />
        <meta name="author" content="Atanu Bera" />
        <meta property="og:title" content="Atanu Bera's Portfolio" />
        <meta property="og:description" content="Explore Atanu Bera's portfolio featuring projects, skills, and blog posts on web development." />
        <meta property="og:image" content="https://github.com/atanu16/Portfolio/assets/83860778/bb8c343e-80a9-4a97-a519-41447c94fad8" />
        <meta property="og:url" content="https://www.atanubera.xyz/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="https://github.com/atanu16/Portfolio/assets/83860778/bb8c343e-80a9-4a97-a519-41447c94fad8" />
        <meta name="twitter:title" content="Atanu Bera's Portfolio" />
        <meta name="twitter:description" content="Explore Atanu Bera's portfolio featuring projects, skills, and blog posts on web development." />
        <meta name="twitter:image" content="https://github.com/atanu16/Portfolio/assets/83860778/bb8c343e-80a9-4a97-a519-41447c94fad8" />
        <link rel="canonical" href="https://www.atanubera.xyz/" />
        <title>Atanu Bera</title>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Atanu Bera",
            "url": "https://www.atanubera.xyz/",
            "sameAs": [
              "https://www.linkedin.com/in/atanu16/",
              "https://github.com/atanu16",
              "https://twitter.com/atanumax2",
              "https://www.instagram.com/_rozzer_/"
            ],
            "jobTitle": "Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Rozzer"
            },
            "image": "https://github.com/atanu16/Portfolio/assets/83860778/bb8c343e-80a9-4a97-a519-41447c94fad8",
            "description": "Welcome to Atanu Bera's portfolio, showcasing projects, skills, and blog posts related to web development and more."
          }
          `}
        </script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
