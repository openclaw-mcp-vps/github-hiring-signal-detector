import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitHub Hiring Signal Detector – Find Developers Ready to Switch Jobs',
  description: 'Analyze GitHub activity patterns to identify developers showing hiring signals: decreased commits, exploring new technologies, updating profiles.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cdaa72fd-d460-453f-80b6-09e5a864ffb0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
