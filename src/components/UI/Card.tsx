import React, {ReactNode} from 'react';

interface ICardProps {
    className?: string;
    children: ReactNode;
}

const Card: React.FC<ICardProps> = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;
