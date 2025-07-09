import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد")
    .max(12, "نام کاربری نمی‌تواند بیشتر از 12 کاراکتر باشد")
    .regex(/^[a-zA-Z0-9]+$/, "فقط حروف و اعداد مجاز هستند"),
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
    .max(12, "رمز عبور نمی‌تواند بیشتر از 12 کاراکتر باشد"),
});

export type FormData = z.infer<typeof formSchema>;
