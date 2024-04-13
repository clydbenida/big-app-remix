import { Form, redirect } from "@remix-run/react";
import { ActionFunctionArgs } from "react-router";
import api from "~/api";
import Input from "~/components/Input";
import { commitSession, getSession } from "~/sessions";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const loginFormdata = await request.formData();
  const loginCreds = Object.fromEntries(loginFormdata);
  const session = await getSession(
    request.headers.get("Cookie")
  )

  const resp = await api('POST', '/auth/login', loginCreds);

  if (resp.accessToken) {
    console.log("resp found", resp.accessToken)
    session.set("accessToken", resp.accessToken)
    session.set("refreshToken", resp.refreshToken)
    return redirect('/', {
      headers: {
        "Set-Cookie": await commitSession(session),
      }
    })
  }
  return redirect('/');
}

export default function Login() {
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
          <div className="flex text-sm justify-between mb-2">
            <div className="flex text-sm items-center">
              <input type="checkbox" id="remember_me" className="mr-2" name="remember_me" />
              <label htmlFor="remember_me">Remember me</label>
            </div>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="bg-slate-800 text-white py-2 rounded-md">Login</button>
        </Form>
      </div>
    </div>
  )
}
