export default function Input (props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className="py-2 px-2 border border-blue-950 rounded-lg block w-full" {...props} />
  )
}