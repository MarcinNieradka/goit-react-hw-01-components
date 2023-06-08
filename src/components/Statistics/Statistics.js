import PropTypes from 'prop-types';
import { getRandomColor } from './../utils/getRandomColor';
import './Statistics.css';
import clsx from 'clsx';

// export const Statistics = ({ title, stats: { label, percentage } }) => {
//   return (
//     <li>
//       {label} <span>{percentage}%</span>
//     </li>
//   );
// };

export const Statistics = ({ title, stats }) => {
  return (
    <section className={clsx('statistics')}>
      {title && <h4 className={clsx('title')}>{title}</h4>}
      <ul className={clsx('stat-list')}>
        {stats.map(item => (
          <li
            key={item.id}
            className={clsx('item')}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={clsx('label')}>{item.label}</span>
            <span className={clsx('percentage')}>{item.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
