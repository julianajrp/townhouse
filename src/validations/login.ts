import * as yup from "yup";

export const schemaLogin = yup.object({
    email: yup
      .string()
      .email("Email precisa ser válido")
      .required("Email não pode estar em branco"),
    password: yup.string().required("Senha não pode estar em branco"),
  });