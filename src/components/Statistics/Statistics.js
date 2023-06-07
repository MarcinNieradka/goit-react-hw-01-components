import PropTypes from 'prop-types';
import { getRandomColor } from './../utils/getRandomColor';

// export const Statistics = ({ title, stats: { label, percentage } }) => {
//   return (
//     <li>
//       {label} <span>{percentage}%</span>
//     </li>
//   );
// };

export const Statistics = ({ title, stats }) => {
  //  const getRandomColor = () => {
  //   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   return `#${randomColor}`;
  // };

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(item => (
          <li
            key={item.id}
            className="item"
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage} </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
