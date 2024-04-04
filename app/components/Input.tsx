export default function Input (props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className="py-1 px-2 border border-blue-950 rounded-lg" {...props} />
  )
}