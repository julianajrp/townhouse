import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validations/login";
import { StyledLogin } from "./style";
import { StyledForm } from "../../components/Form/style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { LogoContainer, StyledHome } from "../../styles/StyledHome";
import { ILogUser } from "../../services/userServices/login";
import { Loading } from "../../components/Loading/loading";

export const LoginForm = () => {
  const Logo = require("../../Img/main-logo.png");
  const { loginUser, loading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<ILogUser>({
    mode: "onChange",
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (dataLogin: ILogUser) => {
    loginUser(dataLogin);
  };

  return (
    <StyledHome>
      <LogoContainer>
        <div />
        <img src={Logo} alt="" />
      </LogoContainer>
      <StyledLogin>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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

          <button className="btn" type="submit" disabled={!isDirty || !isValid}>
            Entrar
          </button>
        </StyledForm>
        <p>
          Ainda não tem um cadastro? <Link to={"/register"}>Clique aqui</Link>
        </p>
      </StyledLogin>
      <Loading loading={loading} />
    </StyledHome>
  );
};
