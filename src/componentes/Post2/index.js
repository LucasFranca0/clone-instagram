import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export function Post2() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://cdn.discordapp.com/attachments/1030653726173696010/1031356548364112012/download_1.png" />

                    <p>instituto.proa</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://cdn.discordapp.com/attachments/1030653726173696010/1031356516449669241/Captura_de_Tela_315.png" />
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
                    <span>332 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>instituto.proa</strong> Estão abertas as inscrições para as próximas turmas da Plataforma PROA! 😍💙 <br></br><br></br>

                        No PROA, você encontra tudo o que precisa para transformar o seu potencial em uma carreira de sucesso! 🌟<br></br><br></br>

                        👩‍💻🧑‍💻 Durante os 3 meses, você vai aprender sobre o mercado de trabalho e desenvolver competências como: comunicação, autoconhecimento, planejamento de carreira, projeto profissional e raciocínio lógico.<br></br><br></br>

                        ✅ 100% on-line.<br></br><br></br>

                        ✅ Você não vai pagar nada por isso, o curso é GRATUITO de verdade!<br></br><br></br>

                        ✅ Ao final, você ganha certificado e tem acesso a vagas de emprego disponíveis nas melhores empresas.<br></br><br></br>

                        <strong>lilcas12</strong> PROA! 😍💙 
                    </p>
                </div>

                <div className="time-post">
                    <time>Há 2 HORAS</time>
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