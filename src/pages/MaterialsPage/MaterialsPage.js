import React, { Component } from 'react';
import styles from './MaterialsPage.module.css';
import { literature, sources } from './usefulList';

export default class MaterialsPage extends Component {
  state = {
    extendedLiterature: false,
    extendedSources: false,
  };

  onShowMore = e => {
    e.preventDefault();
    let buttonId = e.target.id;
    this.setState(state => {
      if (buttonId === 'literature') {
        return {
          ...state,
          extendedLiterature: !state.extendedLiterature,
        };
      }
      return {
        ...state,
        extendedSources: !state.extendedSources,
      };
    });
  };

  render() {
    const { extendedLiterature, extendedSources } = this.state;
    let booksToShow = extendedLiterature ? literature.length : 3;
    let sourcesToShow = extendedSources ? sources.length : 3;

    return (
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.useful}>
            <h2 className={styles.title}>Полезная литература</h2>
            <ol className={styles.list}>
              {literature.slice(0, booksToShow).map(book => (
                <li className={styles.listItem}>{book}</li>
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
          <div className={styles.useful}>
            <h2 className={styles.title}>Полезные ресурсы</h2>
            <ol className={styles.list}>
              {sources.slice(0, sourcesToShow).map(source => (
                <li className={styles.listItem}>
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
        </div>
      </section>
    );
  }
}
