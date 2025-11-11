import { z } from 'zod';

export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo'),
  correo: z
    .string()
    .email('Correo electrónico inválido')
    .min(1, 'El correo es obligatorio'),
  telefono: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length === 0 || /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(val),
      'Teléfono inválido'
    ),
  servicio: z.string().optional(),
  mensaje: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje es demasiado largo'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
