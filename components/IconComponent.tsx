import React from "react";
import * as Icons from "react-icons/di";
import { IIconComponent } from "../types/IPortfolio";


type Prop = {
    icon: IIconComponent
};
const IconComponent : React.FC<Prop> = ({icon}) => {
    console.log(icon.color);
    const IconComponent: any = Icons[icon.key];
    console.log(IconComponent);

        if (!IconComponent) { // Return a default one
            return <Icons.DiCode size={80} color={`${icon.color?? "blue"}`} />;
          }
          return <IconComponent size={80} color={`${icon.color?? "blue"}`}/>;
};
export default IconComponent;