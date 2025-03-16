export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-700">© {currentYear} Rethabile Mokwane. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}

