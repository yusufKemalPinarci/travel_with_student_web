import Button from './Button.tsx'

export default function SocialLoginButtons() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Button variant="ghost" className="w-full border bg-white">
        <span className="text-sm">Google</span>
      </Button>
      <Button variant="ghost" className="w-full border bg-white">
        <span className="text-sm">Facebook</span>
      </Button>
    </div>
  )
}
