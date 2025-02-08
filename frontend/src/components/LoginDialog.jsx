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
import { Input } from "@/components/ui/input"

export function LoginDialog() {
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
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="email"
              className="col-span-4"
              placeholder="Email eg: example@gmail.com"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="password"
              className="col-span-4"
              placeholder="Password"
            />
          </div>
          <Button type="submit">Login</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
