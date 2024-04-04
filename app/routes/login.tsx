import { Form } from "@remix-run/react";
import { ActionFunctionArgs } from "react-router";
import Input from "~/components/Input";

export const action = async ({ params, request }: ActionFunctionArgs) => {

}

export default function Login () {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className="text-4xl">
        Welcome to Big App
      </h1>
      <Form className="flex flex-col">
        <div className="mb-2">
          <Input type="email" name="email" placeholder="email" />
        </div>
        <div>
          <Input type="password" name="password" placeholder="password" />
        </div>
      </Form>
    </div>
  )
}