import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { Heart } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

const loginSchema = z.object({
  emailOrPhone: z.string().min(1, 'Email or Phone is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log('Login submitted:', data);
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-primary/5 pattern-dots pointer-events-none"></div>
      <Card className="w-full max-w-md shadow-2xl relative z-10 border-t-4 border-t-primary">
        <CardHeader className="space-y-1 items-center pb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
            <Heart size={32} className="fill-primary" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="emailOrPhone">Email or Mobile Number</Label>
              <Input
                id="emailOrPhone"
                type="text"
                placeholder="Enter email or mobile number"
                {...register('emailOrPhone')}
                className="h-12"
              />
              {errors.emailOrPhone && (
                <p className="text-sm text-destructive">{errors.emailOrPhone.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline hover:text-primary/90 font-medium">
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register('password')}
                className="h-12"
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 rounded-xl">
              Log In
            </Button>
            <div className="text-center text-sm text-muted-foreground mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary hover:underline font-semibold">
                Register Free
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
