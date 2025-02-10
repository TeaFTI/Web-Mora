import { Button } from "@/app/_shadcn/component/interface/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_shadcn/component/interface/card"
import { Input } from "@/app/_shadcn/component/interface/input"
import { Label } from "@/app/_shadcn/component/interface/label"
import { cn } from "@/app/_shadcn/library/utility"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Please enter Username and Password to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  required
                  autoFocus
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              <a href="#" className="underline underline-offset-4">
                Create Account
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
