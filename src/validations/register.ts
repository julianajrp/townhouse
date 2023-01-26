import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/[(\d)]/, "Deve conter ao menos 1 número")
    .matches(/[!@#$%*()~^]/, "Deve conter ao menos 1 caracter especial")
    .min(8, "Deve ter no mínimo 8 caracteres")
    .max(16, "Deve ter no máximo 16 caracteres"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não correspondem"),
  aptNumber: yup.string().required("Apartamento é obrigatório"),
  contact: yup.string(),
  cpf: yup.string(),
});
