import * as yup from "yup";

export const schemaReservation = yup.object({
  title: yup
    .string()
    .min(3, "mínimo de 3 letras")
    .max(20, "máximo de 20 letras")
    .required("Obrigatório"),
});
