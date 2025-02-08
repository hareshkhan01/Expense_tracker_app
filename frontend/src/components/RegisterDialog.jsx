import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useMutation} from '@tanstack/react-query'
import { register } from '@/http/api'
import {useNavigate } from 'react-router-dom'
import { useRef } from 'react';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginDialog() {

  const navigate = useNavigate()
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  //mutation
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      // Invalidate and refetch
      console.log('register success');
      //redirect to dashboard
      navigate('/dashboard/home')


    },
  })

  const handleRegisterSubmit = (e) => {
    e.preventDefault() // Prevents page refresh
    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    console.log({ name,email, password })
    if (!name || !email || !password) {
      return alert('Please enter email and password');
  }
  mutation.mutate({name,email,password})


  }

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-orange-600">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>
            Enter Login Credentials to Continue
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleRegisterSubmit} className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Input
              ref = {nameRef}
              id="name"
              className="col-span-4"
              placeholder="Full Name"
            />
          </div>
      
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              ref = {emailRef}
              id="email"
              className="col-span-4"
              placeholder="Email eg: example@gmail.com"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              ref = {passwordRef}
              id="passqword"
              className="col-span-4"
              placeholder="Password"
            />
          </div>
          <Button  type="submit">Register</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
