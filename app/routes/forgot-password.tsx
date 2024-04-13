import { Form } from "@remix-run/react"
import Input from "~/components/Input"

export default function ForgotPassword () {
  return (
    <div>
      <Form>
        <Input type="text" placeholder="Email address" />
      </Form>
    </div>
  )
}