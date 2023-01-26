import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/register";
import { Link } from "react-router-dom";
import { StyledRegister } from "./style";
import { StyledForm } from "../../components/Form/style";
import { LogoContainer, StyledHome } from "../../styles/StyledHome";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { IUser } from "../../services/userServices/login";
import { Loading } from "../../components/Loading/loading";

export interface IRegisterForm extends IUser {
  confirmPassword: string;
}

export const RegisterForm = () => {
  const { registerUser, loading } = useContext(AuthContext);
  const Logo = require("../../Img/main-logo.png");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<IRegisterForm>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  function onSubmit(data: IRegisterForm) {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      aptNumber: data.aptNumber,
      contact: data.contact,
      cpf: data.cpf,
      isSyndic: false,
    };

    registerUser(formData);

    reset();
  }

  return (
    <StyledHome>
      <LogoContainer>
        <div />
        <img src={Logo} alt="" />
      </LogoContainer>
      <StyledRegister>
        <StyledForm className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="input"
            placeholder="Nome"
            {...register("name")}
          />
          <span className="headline error">
            {errors.name ? `${errors.name.message}` : ``}
          </span>

          <input
            type="text"
            className="input"
            placeholder="E-mail"
            {...register("email")}
          />
          <span className="headline error">
            {errors.email ? `${errors.email.message}` : ``}
          </span>

          <input
            type="password"
            className="input"
            placeholder="Senha"
            {...register("password")}
          />
          <span className="headline error">
            {errors.password ? `${errors.password.message}` : ``}
          </span>

          <input
            type="password"
            className="input"
            placeholder="Confirme a senha"
            {...register("confirmPassword")}
          />
          <span className="headline error">
            {errors.confirmPassword ? `${errors.confirmPassword.message}` : ``}
          </span>

          <input
            type="text"
            className="input"
            placeholder="Apartamento"
            {...register("aptNumber")}
          />
          <span className="headline error">
            {errors.aptNumber ? `${errors.aptNumber.message}` : ``}
          </span>

          <input
            type="text"
            className="input"
            placeholder="Contato (opcional)"
            {...register("contact")}
          />
          <span className="headline error">
            {errors.contact ? `${errors.contact.message}` : ``}
          </span>

          <input
            type="text"
            className="input"
            placeholder="CPF (opcional)"
            {...register("cpf")}
          />
          <span className="headline error">
            {errors.cpf ? `${errors.cpf.message}` : ``}
          </span>

          <button className="btn" type="submit" disabled={!isDirty || !isValid}>
            Cadastrar
          </button>
        </StyledForm>

        <p>
          Já possui um cadastro? <Link to={"/login"}>Clique aqui</Link>
        </p>
      </StyledRegister>
      <Loading loading={loading} />
    </StyledHome>
  );
};
