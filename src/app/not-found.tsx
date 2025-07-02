import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-secondary-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary-800 dark:text-secondary-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-secondary-600 dark:text-secondary-300 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  )
}