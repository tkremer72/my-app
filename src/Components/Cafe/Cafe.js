import React from "react";
import CafeStyle from "./Cafe.module.css";
import { Button, Img } from "./react-bootsrap";

import Logo from '../../images/mobile-cafe/gods-gospel-cafe[153].png';
import BibleImg from '../../images/mobile-cafe/bible-and-cross-icon[152].png';


const Cafe = () => {
          const LogoStyle = CafeStyle.Cafe.CafeStyle;
          return (
          <>
                    <div>
                              <Image className="LogoStyle"/>
                              <h1>Services From</h1>
                              <h1>The Heart Of God</h1>
                              <div>
                                        <p>

                                        </p>
                              </div>
                              <Image/>
                              <button>Learn More</button>
                    </div>
          </>
          );
}
export default Cafe;