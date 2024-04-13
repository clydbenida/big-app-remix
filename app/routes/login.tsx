import { Form, redirect } from "@remix-run/react";
import { ActionFunctionArgs } from "react-router";
import api from "~/api";
import Input from "~/components/Input";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const loginFormdata = await request.formData();
  const loginCreds = Object.fromEntries(loginFormdata);

  const resp = await api('POST', '/auth/login', loginCreds);
  console.log('request', resp);

  return redirect('/');
}

export default function Login () {
  return (
    <div className='bg-slate-900 h-screen flex items-center justify-center'>
      <div className='flex justify-center items-center flex-col bg-white w-fit p-20 rounded-lg shadow-lg'>
        <h1 className="text-4xl mb-4">
          Welcome to Big App
        </h1>
        <Form className="flex flex-col w-80" method="POST">
          <div className="mb-3">
            <Input type="email" name="email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <Input type="password" name="password" placeholder="Password" />
          </div>
          <div className="flex text-sm justify-between">
            <a href="/">Remember me</a>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="bg-slate-800 text-white py-2 rounded-md">Login</button>
        </Form>
      </div>
    </div>
  )
}