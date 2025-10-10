import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Width } from './Width'
import { Error } from './Error'

export const Tel: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  return (
    <Width width={width} className="grid gap-2">
      <Label htmlFor={name}>
        {label}
        {required && (
          <span className="required">
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>

      <Input
        id={name}
        type="tel"
        defaultValue={defaultValue}
        placeholder="Enter your phone number"
        {...register(name, {
          required,
          pattern: {
            value: /^\+?[0-9\s-]{7,15}$/,
            message: 'Please enter a valid phone number',
          },
        })}
      />

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
