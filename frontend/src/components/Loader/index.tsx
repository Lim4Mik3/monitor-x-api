import { Container } from "./styles";

const Loader: React.FC = () => {
  return (
    <Container>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </Container>
  )
}

export { Loader };