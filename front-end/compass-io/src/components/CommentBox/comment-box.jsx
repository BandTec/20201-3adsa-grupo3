import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxsQuoteAltLeft from '@iconify/icons-bx/bxs-quote-alt-left';

import './comment-box.css';

function CommentBox() {
    return (
        <div className="commentBox">
            <div className="pd-v-32 flex alcont-center">
                <div>
                    <Icon icon={bxsQuoteAltLeft} className="pd-h-16" style={{fontSize: '39.552127838134766px'}} />
                </div>
                <div className="commentText txtal-justify">
                    Olá, meu nome é Victoria, tenho 25 anos e sou mestrando em enfermagem. Me identifico e gosto muito do meu trabalho, pois posso ajudar pessoas constantemente no dia a dia. Gostaria de participar de trabalhos voluntários para poder aperfeiçoar meus conhecimentos de enfermagem e ajudar o máximo de pessoas possíveis.                </div>
                <div>
                    <Icon icon={bxsQuoteAltLeft} className="pd-h-16 iconRotate" style={{fontSize: '39.552127838134766px'}} />
                </div>
            </div>
        </div>
    );
}

export default CommentBox;
