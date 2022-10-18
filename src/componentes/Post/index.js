import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export function Post() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://cdn.discordapp.com/attachments/1030653726173696010/1031353814789410826/download.png" />
                    <p>cursoemvideo</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src={`https://cdn.discordapp.com/attachments/1030653726173696010/1031354766837682176/Captura_de_Tela_314.png`} />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{ size: "30px" }}>
                    <section className="engagement-post">
                        <div className="icons-1">
                            <div className="icon">  <IoMdHeartEmpty /></div>
                            <div className="icon">  <BsChat /></div>
                            <div className="icon">  <FiSend /></div>
                        </div>

                        <div className="icon">  <BsBookmark /></div>

                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>700 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>cursoemvideo</strong> Se você gosta de memes de programação compartilhe esse com os amigos.🖖😜
                    </p>
                </div>

                <div className="time-post">
                    <time>12 sem</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: "25px" }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>

                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />

                    </div>
                    <button>Publicar</button>
                </div>

            </div>
        </>
    )
}