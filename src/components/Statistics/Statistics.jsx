import PropTypes from 'prop-types';
import { ListItem, Section, Statlist, Title } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}

      <Statlist>
        {stats.map(element => (
          <ListItem key={element.id}>
            <span>{element.label}</span>
            <span>{element.percentage}</span>
          </ListItem>
        ))}
      </Statlist>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
