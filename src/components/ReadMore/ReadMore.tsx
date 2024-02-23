import React, { useState } from 'react';
import styles from "../ReadMore/ReadMore.module.scss"

interface ReadMoreProps {
  text: string;
  maxLength: number;
}

export function ReadMore({ text, maxLength }: ReadMoreProps) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
      setShowFullText(!showFullText);
  };

  const displayText = () => {
      if (showFullText) {
          return text;
      }
      return text.slice(0, maxLength);
  };

  const shouldDisplayButton = text.length > maxLength;

  return (
      <div className={styles.readMoreContainer}>
          <p className={showFullText ? styles.fullText : styles.truncatedText}>
              {displayText()}
          </p>
          {shouldDisplayButton && (
              <button onClick={toggleText} className={styles.readMoreLink}>
                  {showFullText ? 'Ler menos' : 'Ler mais'}
              </button>
          )}
      </div>
  );
}