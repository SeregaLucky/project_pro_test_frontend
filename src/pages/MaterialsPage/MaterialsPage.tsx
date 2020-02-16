import React, { useState } from 'react';
import styles from './MaterialsPage.module.css';
import { literature, sources, employments } from './usefulList';

const MaterialsPage: React.FC = () => {
  const [extendedLiterature, setExtendedLiterature] = useState<boolean>(false);
  const [extendedSources, setExtendedSources] = useState<boolean>(false);
  const [extendedEmployments, setExtendedEmployments] = useState<boolean>(
    false,
  );

  const onShowMore = (e: React.MouseEvent) => {
    const buttonId: string = e.currentTarget.id;
    switch (buttonId) {
      case 'literature':
        setExtendedLiterature(!extendedLiterature);
        break;
      case 'sources':
        setExtendedSources(!extendedSources);
        break;
      case 'employments':
        setExtendedEmployments(!extendedEmployments);
        break;
      default:
        break;
    }
  };

  const booksToShow: number = extendedLiterature ? literature.length : 3;
  const sourcesToShow: number = extendedSources ? sources.length : 3;
  const employmentsToShow: number = extendedEmployments
    ? employments.length
    : 3;

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.useful}>
          <h2 className={styles.title}>Полезные ресурсы</h2>
          <ol className={styles.list}>
            {sources.slice(0, sourcesToShow).map(source => (
              <li key={source.name} className={styles.listItem}>
                <a
                  className={styles.listLink}
                  href={source.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.name}
                </a>
              </li>
            ))}
          </ol>
          {sources.length > 3 && (
            <button
              id="sources"
              className={styles.showMoreButton}
              onClick={onShowMore}
            >
              {extendedSources ? 'Свернуть' : 'Показать больше'}
            </button>
          )}
        </div>

        <div className={styles.useful}>
          <h2 className={styles.title}>Трудоустройство</h2>
          <ol className={styles.list}>
            {employments.slice(0, employmentsToShow).map(employment => (
              <li key={employment.name} className={styles.listItem}>
                <a
                  className={styles.listLink}
                  href={employment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {employment.name}
                </a>
              </li>
            ))}
          </ol>
          {employments.length > 3 && (
            <button
              id="employments"
              className={styles.showMoreButton}
              onClick={onShowMore}
            >
              {extendedEmployments ? 'Свернуть' : 'Показать больше'}
            </button>
          )}
        </div>

        <div className={styles.useful}>
          <h2 className={styles.title}>Полезная литература</h2>
          <ol className={styles.list}>
            {literature.slice(0, booksToShow).map(book => (
              <li key={book.name} className={styles.listItem}>
                {book.name} <span className={styles.author}>{book.author}</span>
              </li>
            ))}
          </ol>
          {literature.length > 3 && (
            <button
              id="literature"
              className={styles.showMoreButton}
              onClick={onShowMore}
            >
              {extendedLiterature ? 'Свернуть' : 'Показать больше'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MaterialsPage;
