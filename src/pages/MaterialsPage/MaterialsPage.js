import React, { Component } from 'react';
import styles from './MaterialsPage.module.css';
import { literature, sources, employments } from './usefulList';

export default class MaterialsPage extends Component {
  state = {
    extendedLiterature: false,
    extendedSources: false,
    extendedEmployments: false,
  };

  onShowMore = e => {
    const buttonId = e.target.id;
    this.setState(state => {
      switch (buttonId) {
        case 'literature':
          return {
            ...state,
            extendedLiterature: !state.extendedLiterature,
          };

        case 'sources':
          return {
            ...state,
            extendedSources: !state.extendedSources,
          };

        case 'employments':
          return {
            ...state,
            extendedEmployments: !state.extendedEmployments,
          };

        default:
          return state;
      }
    });
  };

  render() {
    const {
      extendedLiterature,
      extendedSources,
      extendedEmployments,
    } = this.state;
    const booksToShow = extendedLiterature ? literature.length : 3;
    const sourcesToShow = extendedSources ? sources.length : 3;
    const employmentsToShow = extendedEmployments ? employments.length : 3;

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
                onClick={this.onShowMore}
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
                onClick={this.onShowMore}
              >
                {extendedEmployments ? 'Свернуть' : 'Показать больше'}
              </button>
            )}
          </div>

          <div className={styles.useful}>
            <h2 className={styles.title}>Полезная литература</h2>
            <ol className={styles.list}>
              {literature.slice(0, booksToShow).map(book => (
                <li key={book} className={styles.listItem}>
                  {book}
                </li>
              ))}
            </ol>
            {literature.length > 3 && (
              <button
                id="literature"
                className={styles.showMoreButton}
                onClick={this.onShowMore}
              >
                {extendedLiterature ? 'Свернуть' : 'Показать больше'}
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }
}
