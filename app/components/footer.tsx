export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-4">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Kripa Sindhu. All rights reserved.
      </div>
    </footer>
  )
}

