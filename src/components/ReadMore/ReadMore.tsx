import React, { useState } from 'react';
import styles from "../ReadMore/ReadMore.module.scss";

interface ReadMoreProps {
  text: string;
  maxLength: number;
}

export function ReadMore({ text, maxLength }: ReadMoreProps) {
    const [showFullText, setShowFullText] = useState(false); 

    const toggleText = () => {
        setShowFullText(!showFullText);
    }; 

    const shouldDisplayButton = text.length > maxLength; 

    const displayText = () => {
        if (showFullText || text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength);
    };

    const displayEllipsis = !showFullText && shouldDisplayButton;

    return (
        <div>
            <p>
                {displayText()}
                {displayEllipsis && '... '}
            </p>
            {shouldDisplayButton && (
                <button onClick={toggleText} className={styles.readMoreLink}>
                    {showFullText ? 'Ler menos' : 'Ler mais'}
                </button>
            )}
        </div>
    );
}
