import { useState } from "react";
import { CgMenuRight } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';

import styles from './Hamburger.module.scss'
import Menu from "./Menu";

const Hamburger = () => {
    const [isShow, setIsShow] = useState(false);

    const logoutHandler = () => {

    }

    return (
        <div className={ styles.wrapper }>
            <button onClick={ () => setIsShow(!isShow) }>
                { 
                    isShow ? <CgMenuRight color="white" /> : <IoClose color="white" />
                }
            </button>
            <Menu isShow={ isShow } />
        </div>
    );
};

export default Hamburger;