import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import {
  ContainerDiv,
  ContainerPersonInfo,
  DivImgName,
  DivLogoutH1,
  FaUserCircleGray,
  InfoDiv,
  InfoPersondiv,
  InfoPersonH1,
  InfoPersonH2,
  InfoPersonP,
  LogoutH1,
  MdOutlineLogoutGray,
  PersonContent,
} from "./style";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    window.localStorage.clear();
    navigate("/");
  }
  return (
    <>
      {user?.isSyndic ? (
        <>
          <ContainerDiv>
            <PersonContent>
              <DivImgName>
                <FaUserCircleGray />
                <InfoPersonH1>{user?.name}</InfoPersonH1>
              </DivImgName>
              <InfoPersondiv>
                <InfoPersonH1>Informações:</InfoPersonH1>
                <ContainerPersonInfo>
                  <InfoDiv>
                    <InfoPersonH2>Email:</InfoPersonH2>
                    <InfoPersonP>{user?.email}</InfoPersonP>
                  </InfoDiv>
                  <InfoDiv>
                    <InfoPersonH2>CPF:</InfoPersonH2>
                    <InfoPersonP>{user?.cpf}</InfoPersonP>
                  </InfoDiv>
                  <InfoDiv>
                    <InfoPersonH2>Contato:</InfoPersonH2>
                    <InfoPersonP>{user?.contact}</InfoPersonP>
                  </InfoDiv>
                </ContainerPersonInfo>
                <DivLogoutH1>
                  <LogoutH1 onClick={() => logout()}>
                    Sair <MdOutlineLogoutGray />
                  </LogoutH1>
                </DivLogoutH1>
              </InfoPersondiv>
            </PersonContent>
          </ContainerDiv>
        </>
      ) : (
        <ContainerDiv>
          <PersonContent>
            <DivImgName>
              <FaUserCircleGray />
              <InfoPersonH1>{user?.name}</InfoPersonH1>
            </DivImgName>
            <InfoPersondiv>
              <InfoPersonH1>Informações:</InfoPersonH1>
              <ContainerPersonInfo>
                <InfoDiv>
                  <InfoPersonH2>Email:</InfoPersonH2>
                  <InfoPersonP>{user?.email}</InfoPersonP>
                </InfoDiv>
                <InfoDiv>
                  <InfoPersonH2>CPF:</InfoPersonH2>
                  <InfoPersonP>{user?.cpf}</InfoPersonP>
                </InfoDiv>
                <InfoDiv>
                  <InfoPersonH2>Apartamento:</InfoPersonH2>
                  <InfoPersonP>{user?.aptNumber}</InfoPersonP>
                </InfoDiv>
                <InfoDiv>
                  <InfoPersonH2>Contato:</InfoPersonH2>
                  <InfoPersonP>{user?.contact}</InfoPersonP>
                </InfoDiv>
              </ContainerPersonInfo>
              <DivLogoutH1>
                <LogoutH1 onClick={() => logout()}>
                  Sair
                  <MdOutlineLogoutGray />
                </LogoutH1>
              </DivLogoutH1>
            </InfoPersondiv>
          </PersonContent>
        </ContainerDiv>
      )}
    </>
  );
};
