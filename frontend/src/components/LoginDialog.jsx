import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { Loader } from 'lucide-react' 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useMutation} from '@tanstack/react-query'
import { logIn } from '@/http/api'
import {useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import useTokenStore from '../store'

=======
import useTokenStore from '../store' 
>>>>>>> c82e11f47c772c0c21b02040aeff23f803d9e484

export function LoginDialog() {
  const navigate = useNavigate()

const setToken = useTokenStore((state) => state.setToken)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const setToken=useTokenStore(state=>state.setToken)

  //mutation
  const mutation = useMutation({
    mutationFn: logIn,
<<<<<<< HEAD
    onSuccess: (response) => {
=======
    onSuccess: (res) => {
>>>>>>> c82e11f47c772c0c21b02040aeff23f803d9e484
      // Invalidate and refetch
      console.log('login success',res.data.token);
      //redirect to dashboard
<<<<<<< HEAD

      setToken(response.data.token);
=======
      setToken(res.data.token)
>>>>>>> c82e11f47c772c0c21b02040aeff23f803d9e484
      navigate('/dashboard/home')


    },
  })

  const handleLoginSubmit = (e) => {
    e.preventDefault() // Prevents page refresh
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    console.log({ email, password })
    if (!email || !password) {
      return alert('Please enter email and password');
  }
  mutation.mutate({email,password})


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
          <Button type="submit">
          <Loader />
            Login
            </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
