import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return Object.keys(options).map(dataSetElement => (
    <Button key={dataSetElement} onClick={onLeaveFeedback}>
      {dataSetElement}
    </Button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
