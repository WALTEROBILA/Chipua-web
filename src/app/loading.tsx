export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-secondary-900">
      <div className="text-center">
        <div className="spinner mx-auto mb-4"></div>
        <p className="text-secondary-600 dark:text-secondary-300">Loading...</p>
      </div>
    </div>
  )
}