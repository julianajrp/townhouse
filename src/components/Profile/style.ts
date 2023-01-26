import { MdOutlineLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  height: calc(100% - 148px);
  display: flex;
  background-color: var(--gray-2);
  justify-content: center;
`;

export const PersonContent = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;

  @media (min-width: 768px) {
    height: calc(100vh - 80px);
  }
`;
export const DivImgName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  @media (min-width: 1000px) {
    margin-left: 54px;
  }
`;
export const FaUserCircleGray = styled(FaUserCircle)`
  width: 60px;
  height: 60px;
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 367px) {
    width: 50px;
    height: 50px;
  }
`;

export const InfoPersonH1 = styled.h1`
  color: var(--gray-0);
  font-weight: 600;
  font-size: 20px;
  margin: 26px 0px 20px 12px;

  @media (max-width: 367px) {
    font-size: 16px;
  }
`;

export const ContainerPersonInfo = styled.div`
  background-color: var(--gray-3);
  display: flex;
  flex-direction: column;
  width: 92%;
  gap: 17px;
  border-radius: 15px;
  padding: 20px;

  @media (min-width: 600px) {
    width: 64%;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

export const InfoPersonH2 = styled.h2`
  color: rgba(33, 37, 41, 0.7);
  font-weight: 400;
  font-size: 20px;

  @media (max-width: 367px) {
    font-size: 16px;
  }
`;

export const InfoPersonP = styled.p`
  width: 76%;
  padding: 9px;
  background-color: white;
  border-radius: 49px;

  @media (max-width: 367px) {
    font-size: 13px;
  }
`;

export const InfoPersondiv = styled.div`
  margin-left: 16px;

  @media (min-width: 1000px) {
    margin-left: 50px;
  }
`;

export const LogoutH1 = styled.div`
  color: var(--gray-1);
  width: 94px;
  font-weight: 700;
  font-size: 20px;
  margin: 30px 26px 0px;
  gap: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 367px) {
    font-size: 18px;
  }
`;

export const DivLogoutH1 = styled.div`
  width: 99px;
  &:hover ${LogoutH1} {
    color: #212529;
    transition: 1s ease;
  }
`;

export const MdOutlineLogoutGray = styled(MdOutlineLogout)`
  opacity: 0.2;
  width: 40px;
  height: 40px;
`;
