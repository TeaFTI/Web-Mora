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
    <div className={cn("tw-flex tw-flex-col tw-gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="tw-flex tw-flex-col tw-gap-6">
              <div className="tw-grid tw-gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="tw-grid tw-gap-3">
                <div className="tw-flex tw-items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="tw-ml-auto tw-inline-block tw-text-sm tw-underline-offset-4 hover:tw-underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-3">
                <Button type="submit" className="tw-w-full">
                  Login
                </Button>
                <Button variant="outline" className="tw-w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="tw-mt-4 tw-text-center tw-text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="tw-underline tw-underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
