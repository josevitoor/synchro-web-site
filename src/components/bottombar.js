import React, {Component} from 'react';

class BottomBar extends Component{
    render(){
        return(
            <div className="bottom-bar-main-div">
                <div className="copyright-content">
                    <div className="bottom-bar-logo col-12">
                        <h2 className='naoSelecionavel'>SynchroArch</h2>
                    </div>
                </div>
                <span className="line"></span>
                <div className="copyright">
                    <p>Copyright © 2021 - Projeto Synchro.<br />Criado por Vinícius Ribeiro Bulcão.</p>
                </div>
            </div>
        );
    }
}

export default BottomBar;