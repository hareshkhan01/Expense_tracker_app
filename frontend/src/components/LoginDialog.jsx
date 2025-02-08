import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export function LoginDialog() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLoginSubmit = (e) => {
    e.preventDefault() // Prevents page refresh
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    console.log({ email, password })

    
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black border">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter Login Credentials to Continue
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLoginSubmit} className="grid gap-4 py-4">
          <Input
            ref={emailRef}
            id="email"
            className="col-span-4"
            placeholder="Email eg: example@gmail.com"
            required
          />
          <Input
            ref={passwordRef}
            id="password"
            type="password"
            className="col-span-4"
            placeholder="Password"
            required
          />
          <Button type="submit">Login</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
