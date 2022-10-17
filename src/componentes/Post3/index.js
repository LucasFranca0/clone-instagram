import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export function Post3() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://cdn.discordapp.com/attachments/1030653726173696010/1031370509314703431/Captura_de_Tela_318.png" />

                    <p>maykbrito</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://cdn.discordapp.com/attachments/1030653726173696010/1031370319048486953/Captura_de_Tela_316.png" />
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
                    <span>343 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>maykbrito</strong> A minha solução esta boa? Existe uma maneira perfeita de resolver esse problema? Estou inseguro e não sei se consegui fazer da melhor maneira. <br></br><br></br>

                        Na programação existem diversas maneiras de encontrar a solução a um problema, mas a nossa insegurança nos faz aqueles questionamentos que acabam nos travando na evolução dos estudos.<br></br><br></br>

                        Não espere encontrar a solução perfeita, encontre a solução que resolve um problema e segue o jogo!<br></br>
                        <div className="time-post">
                    <time>22 sem</time>
                </div>

                <br></br> <strong>lilcas12</strong> Isso mesmo!
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