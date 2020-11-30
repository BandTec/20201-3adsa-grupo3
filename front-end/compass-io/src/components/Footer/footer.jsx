import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import phoneCallFill from '@iconify/icons-eva/phone-call-fill';
import mailOutlined from '@iconify/icons-ant-design/mail-outlined';
import './footer.css';

function Footer() {
    return (
        /*    <div>
                <div className="footerInfo">
                    <div className="footerInfoTitle">
                     <div className="footerInfoText">Nos conheça</div>
                     <div className="footerInfoText">Contato</div>
                     <div className="footerInfoText">Localização</div>
                    </div>
                    <div className="footerInfoContent">
                        <div className="footerInfoAbout">
                            <a>Quem somos</a>
                            <a>Nossos objetivos</a>
                            <a>Seja voluntário</a>
                            <a>Projetos</a>
                            <a>Notícias</a>
                        </div>
                        <div className="footerInfoContact">
                             <span><Icon icon={phoneCallFill} style={{fontSize: '29px'}} />(11) 5555-0000</span>
                             <span><Icon icon={mailOutlined} style={{fontSize: '29px'}} />compass.io@gmail.com</span>
                        </div>
     
                        <div>Rua Haddock Lobo - Cerqueira César, São Paulo - SP</div>
                    </div>
                </div>
                
     
     
                <div className="footerCopy">Copyright 2020 Compass.io. Todos os direitos reservados.</div>
            </div>*/


        <div>

            <div className="footerInfo">
                <div id="footerInfoContainer">
                    <div className="footerInfoText">
                        <span className="footerInfoTitle    ">Nos conheça</span>
                        <a className="footerInfoContent">Quem somos</a>
                        <a className="footerInfoContent">Nossos objetivos</a>
                        <a className="footerInfoContent">Seja volutário</a>
                        <a className="footerInfoContent">Projetos</a>
                        <a className="footerInfoContent">Notícias</a>
                    </div>

                    <div className="footerInfoText">

                        <span className="footerInfoTitle">Contato</span>

                        <div className="footerContact">

                            <div className="footerIconText"><Icon icon={phoneCallFill} style={{ fontSize: '29px' }} /><div className="footerEmailPhone">(11) 5555-0000</div></div>
                            <div className="footerIconText"><Icon icon={mailOutlined} style={{ fontSize: '29px' }} /><div className="footerEmailPhone">compass.io@gmail.com</div></div>
                        </div>

                    </div>

                    <div className="footerInfoText">
                        <span className="footerInfoTitle">Localização</span>

                        <div className="footerAddress">Rua Haddock Lobo - Cerqueira César, <br />São Paulo - SP</div>

                    </div>

                </div>
            </div>

            <div className="footerCopy"><span id="footerCopyText">Copyright 2020 Compass.io. Todos os direitos reservados.</span></div>

        </div>


    );
}

export default Footer;
