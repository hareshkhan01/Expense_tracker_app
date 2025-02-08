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
import { Label } from "@/components/ui/label"

export function LoginDialog() {
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
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="fullname"
              className="col-span-4"
              placeholder="First Name"
            />
          </div>
      
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="email"
              className="col-span-4"
              placeholder="Email eg: example@gmail.com"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="passqword"
              className="col-span-4"
              placeholder="Password"
            />
          </div>
          <Button type="submit">Register</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
