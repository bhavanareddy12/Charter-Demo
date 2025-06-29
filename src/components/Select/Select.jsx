import PropTypes from 'prop-types';
import { StyledSelect, StyledOption } from './Select.styles';

function Select({options, value, onChange,disable}) {
    return (
        <StyledSelect value={value} onChange={onChange} disabled={disable}>
            {options.map((option) => (
                <StyledOption key={option.value} value={option.value} disabled={option.disable} hidden={option.hidden} selected={option.selected}>
                    {option.label}
                </StyledOption>
            ))}
        </StyledSelect>
    );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
};

export default Select