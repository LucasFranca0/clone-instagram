import './SidebarHeader.css';
import Item from './componentes/Item';
import { RiMessengerLine,RiSearchLine } from "react-icons/ri";
import { FiHeart, FiPlusSquare } from "react-icons/fi";
import { MdHomeFilled } from "react-icons/md";
import { FaBars } from "react-icons/fa";

function SidebarHeader(props) {
    return (
        <div className='SidebarHeader'>
            <img src={props.logo} alt="Logo do Instagram" className="logoInstagram" />

            <div className='container'>
                <div className="listItem">
                    <div> <Item icone={<MdHomeFilled />} nome={`Página inicial`} /></div>
                    <div><Item icone={<RiSearchLine />} nome="Explorar" /></div>
                    <div><Item icone={<RiMessengerLine />} nome="Mensagens" /></div>
                    <div><Item icone={<FiHeart />} nome="Notificações" /></div>
                    <div><Item icone={<FiPlusSquare />} nome="Criar" /></div>
                    <div className="perfil-sidebar">
                        <img src={`https://github.com/LucasFranca0.png`} />
                        <p>Perfil</p>
                    </div>
                    <div className='mais'><Item icone={<FaBars />} nome="Mais" /></div>
                </div>

            </div>

        </div>
    )
}

export default SidebarHeader;