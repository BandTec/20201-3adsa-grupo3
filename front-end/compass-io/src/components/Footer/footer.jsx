import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import phoneCallFill from '@iconify/icons-eva/phone-call-fill';
import mailOutlined from '@iconify/icons-ant-design/mail-outlined';
import locationIcon from '@iconify/icons-carbon/location';
import LogoCompassio from '../../assets/images/compassio-logo-footer-img.png'
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';

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

                    <div className="logoFooter">
                        <img src={LogoCompassio}/>
                        <div className="positionIcons">
                            <div className="footerIconSocialMidia">
                                <Icon icon={facebookFilled} style={{
                                    fontSize: '35px',
                                    backgroundColor: "#0629d8",
                                    borderRadius: "0.5rem"
                                    }} />
                                <span className="footerInstaFace" >Compass.io</span>
                            </div>
                            <div className="footerIconSocialMidia">
                                <Icon icon={instagramOutlined} style={{
                                    fontSize: '35px',
                                    backgroundColor: "#0629d8",
                                    borderRadius: "0.5rem"
                                    }} />
                                <span className="footerInstaFace">@Compass.io</span>
                            </div>
                        </div>
                    </div>

                    <div className="footerInfoText">
                        <span className="footerInfoTitle">Navegue pelo site</span>
                        <a href="/signUp" className="footerInfoContent">Seja voluntario</a>
                        <a href="/#comoFunciona" className="footerInfoContent">Como funciona</a>
                        <a href="/vacancies" className="footerInfoContent">Vagas</a>
                    </div>

                    <div className="footerInfoText">
                        <span className="footerInfoTitle">Contato</span>
                        <div className="footerIconText">
                                <Icon icon={phoneCallFill} style={{ fontSize: '29px' }} />
                                <div className="footerEmailPhone">(11) 5555-0000</div>
                            </div>
                        <div className="footerIconText">
                                <Icon icon={mailOutlined} style={{ fontSize: '29px' }} />
                                <div className="footerEmailPhone">compass.io@gmail.com</div>
                        </div>

                        <div className="footerIconText">
                            <Icon icon={locationIcon} style={{ fontSize: '35px' }} />
                            <div>Rua Haddock Lobo - Cerqueira César, <br />São Paulo - SP</div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="footerCopy"><span id="footerCopyText">Copyright 2020 <b>Compass.io</b>. Todos os direitos reservados.</span></div>

        </div>


    );
}

export default Footer;
