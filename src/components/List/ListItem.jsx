import PropTypes from 'prop-types';
import styles from './listItem.module.scss';
import { Canvas } from '../Canvas/Canvas';

export const ListItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <Canvas src={item.node.images.nodes[0].src} />
      <div className={styles.itemBody}>
        {item.node.bodyHtml
          .split('<br>')
          .splice(0, 3)
          .map((it, i) => {
            return (
              <p className={styles.itemText} key={i} dangerouslySetInnerHTML={{ __html: it }}></p>
            );
          })}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
};
