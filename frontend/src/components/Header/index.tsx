import logo from '../../assets/logo.svg';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import { HeaderContainer, GoBackButton } from './styles';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  canBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ canBack }: HeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <HeaderContainer>
      <img src={logo} alt="Monitor X" />
      {
        canBack && (
          <GoBackButton onClick={() => navigate('/')}>
            <MdOutlineKeyboardArrowLeft size={20} color="#A8A8B3" />
            Voltar
          </GoBackButton>
        )
      }
    </HeaderContainer>
  )
}

export { Header };