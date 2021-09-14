import React from "react";
import { Header } from "./style";

import menu from "../../img/menu.png"

export default function HeaderContainer() {
    return (
        <Header>
            <div className="header__container">
                <div className="header__container__logo">
                    <h3 className="header__container__logo__title">
                        Isabel Veríssimo
                    </h3>
                    <p>Psicóloga</p>
                </div>

                <menu>
                    <img src={menu} alt="menu de navegação" />
                </menu>

            </div>
        </Header>
    )
}