import './SidebarHeader.css';
import Item from './componentes/Item';
import { FiHome } from 'react-icons/fi';
import { DiAndroid } from "react-icons/di";
import { HiOutlineSearch } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";

function SidebarHeader(props) {
    return (
        <div className='SidebarHeader'>
            <img src={props.logo} alt="Logo do Instagram" className="logoInstagram" />

            <div className='container'>
                <div className="listItem">
                    <div> <Item icone={<FiHome />} nome="Página inicial" /></div>
                    <div><Item icone={<HiOutlineSearch />} nome="Explorar" /></div>
                    <div><Item icone={<RiMessengerLine />} nome="Mensagens" /></div>
                    <div><Item icone={<BsPlusSquare />} nome="Notificações" /></div>
                    <div><Item icone={<MdOutlineExplore />} nome="Criar" /></div>  
                </div>
            </div>

        </div>
    )
}

export default SidebarHeader;