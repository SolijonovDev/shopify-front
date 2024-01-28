import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import styles from './list.module.scss';

export const List = ({ items }) => {
  return (
    <div className={styles.list}>
      {items &&
        items.map((p, index) => {
          return <ListItem key={index} item={p} />;
        })}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array,
};
