import React from "react";
import ShinyText from "./ShinyText";

const ShinyGroup = ({
    children,
    speed = 1.8,
    delay = 0,
    spread = 120,
    direction = "left",
    shineColor = "#ffffff",
    yoyo = false,
    pauseOnHover = false,
    disabled = false,
    className = "",
}) => {
    return (
        <div className={`shiny-group ${className}`}>
            {React.Children.map(children, (child, i) => (
                <ShinyText
                    key={i}
                    text={child.props.children}
                    speed={speed}
                    delay={delay}
                    spread={spread}
                    direction={direction}
                    shineColor={shineColor}
                    yoyo={yoyo}
                    pauseOnHover={pauseOnHover}
                    disabled={disabled}
                    className={child.props.className}
                />
            ))}
        </div>
    );
};

export default ShinyGroup;
