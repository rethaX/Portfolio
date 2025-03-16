import { CodepenIcon } from "lucide-react"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-bold text-2xl flex items-center ${className}`}>
      <div className="relative flex items-center justify-center">
        <div className="absolute w-10 h-10 bg-primary/20 rounded-lg transform rotate-45"></div>
        <div className="absolute w-10 h-10 bg-primary/40 rounded-lg transform -rotate-12"></div>
        <div className="relative z-10 w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
          <CodepenIcon className="w-5 h-5" />
        </div>
        <div className="ml-3 hidden sm:block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Rethabile Mokwane
          </span>
        </div>
      </div>
    </div>
  )
}

