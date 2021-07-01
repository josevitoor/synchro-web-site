import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

class ToTheTopBtn extends Component{
    render(){
        return(
            <div className="totopbtn-div">
                <a href="#" alt="voltar para o topo">
                    <button className="totopbtn">
                        <FontAwesomeIcon icon={faArrowUp} transform="grow-2" />
                    </button>
                </a>
            </div>
        );
    }
}

export default ToTheTopBtn;