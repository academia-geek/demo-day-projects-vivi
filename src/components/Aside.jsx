import { AsideEvents, AsideStyled, ButtonAside } from "../styles/homeStyles";

export const Aside = () => {
  return (
    <AsideStyled>
      <ButtonAside className="mb-3">Calendario</ButtonAside>
      <AsideEvents>
        <h5>Próximos eventos</h5>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Evento 1</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </AsideEvents>
    </AsideStyled>
  );
};
