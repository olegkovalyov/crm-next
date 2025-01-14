'use client';

import {CardWrapper} from '@/components/auth/card-wrapper';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {LoginSchema} from '@/schemas';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import React from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {FormError} from '@/components/shared/form-error';
import {FormSuccess} from '@/components/shared/form-success';

export const LoginForm = () => {

  const form = useForm<z.infer<typeof LoginSchema>>(
    {
      resolver: zodResolver(LoginSchema),
      defaultValues: {
        email: '',
        password: '',
      },
    },
  );

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  }

  return (
    <CardWrapper
      headerLabel="Login"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial={true}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name="email"
            >
            </FormField>

            <FormField
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name="password"
            >
            </FormField>
          </div>
          <FormError message="Invalid credentials" />
          <FormSuccess message="Valid form" />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
