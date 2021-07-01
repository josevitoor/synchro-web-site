import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

class Chale extends Component{
    render(){
        return(
            <div class="chale-item">
                        <img class="chale-img" src={this.props.chale} />
                <div className="chale-content">
                <h2>Chalé {this.props.nome}</h2>
                <span className="hospedes-count">
                <FontAwesomeIcon icon={faUserFriends} transform="grow-2 right-4 down-2" /> 
                <p>4 HÓSPEDES</p>
                </span>
                            <p className="text-chale">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt tellus massa, afsac commodo mauris bibendum in. Sed rhoncus dignissim diam, sit amet ultricies eros fringilla nec. </p>
                            <div class="saiba-mais">
                <button className="button-chales">SAIBA MAIS</button>
                            </div>
                </div>
            </div>
        );
    }
}

export default Chale;