import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContextL";
import { Loading } from "../Loading/loading";
import {
  Main,
  StyledCenterDiv,
  StyledCenterDivModal,
  StyledCenterDivModalInternal,
  StyledDivInput,
  StyledModal,
} from "./removeProfileStyle";

export const ResidentDeleteOutlet = () => {
  const trashImage = require("../../Img/trash-icon.png");
  const searchImage = require("../../Img/search-icon.png");

  const { currentUser, userList, openModal, closeModal, deleteUser, loading } =
    useContext(UserContext);

  const [search, setSearch] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const searchedUser = userList.filter(
    (x) =>
      x.aptNumber.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <Main>
      <StyledCenterDiv>
        <StyledDivInput>
          <h2 className="headline">Remover perfis</h2>
          <strong>
            <p>Pesquisa por texto</p>
          </strong>
          <div>
            <input type="text" className="input" onChange={handleChange} />
            <img src={searchImage} alt="" />
          </div>
        </StyledDivInput>

        <ul>
          {search.length >= 1 ? (
            searchedUser.length >= 1 ? (
              searchedUser.map((x) => {
                return x.isSyndic === false ? (
                  <li key={x.id}>
                    <div>
                      <h3>{x.name}</h3>
                      <p>Apartamento: {x.aptNumber}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => openModal(x.id, x.name, x.aptNumber)}
                      >
                        <img src={trashImage} alt="" />
                      </button>
                    </div>
                  </li>
                ) : null;
              })
            ) : (
              <p>
                Não foi possível encontrar um usuário com esses dados. Tente
                novamente!
              </p>
            )
          ) : (
            userList.map((x) => {
              return x.isSyndic === false ? (
                <li key={x.id}>
                  <div>
                    <h3>{x.name}</h3>
                    <p>Apartamento: {x.aptNumber}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => openModal(x.id, x.name, x.aptNumber)}
                    >
                      <img src={trashImage} alt="" />
                    </button>
                  </div>
                </li>
              ) : null;
            })
          )}
        </ul>
      </StyledCenterDiv>
      {currentUser !== null ? (
        <StyledModal>
          <StyledCenterDivModal>
            <StyledCenterDivModalInternal>
              <div>
                <strong>
                  <p>Tem certeza que deseja excluir esse perfil?</p>
                </strong>
                <span onClick={() => closeModal()}>X</span>
              </div>
              <span>Nome do morador:</span>
              <p>{currentUser.userName}</p>
              <span>N° do apartamento:</span>
              <p>{currentUser.userApartament}</p>
            </StyledCenterDivModalInternal>
            <section>
              <button className="btn2" onClick={() => closeModal()}>
                Cancelar
              </button>
              <button
                className="btn"
                onClick={() => deleteUser(currentUser.userId)}
              >
                Deletar
              </button>
            </section>
          </StyledCenterDivModal>
        </StyledModal>
      ) : null}

      <Loading loading={loading} />
    </Main>
  );
};
