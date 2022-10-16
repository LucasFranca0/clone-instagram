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
            <header>

                <div className="info-post">
                    <img src="https://cdn.discordapp.com/attachments/1030653726173696010/1030654578749866024/luquinhas1111.jpeg" />

                    <p>Lucas Costa</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://cdn.discordapp.com/attachments/1030653726173696010/1030654578749866024/luquinhas1111.jpeg" />
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
                    <span>61 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>Lilcas12</strong> Lorem Ipsum   is a Lorem Ipsum utilityNodes   that holds  both the natural    and the Lorem Ipsum form. Lorem Ipsum is also known as the Lorem Ipsum, and is commonly used as a means of accumulating lorem
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