import Select, { components } from 'react-select';
import { ReactComponent as SelectArrowSvg } from '../../images/selectarrow.svg';

const options = [
    { value: 'Stuff', label: 'STUFF' },
    { value: 'Family', label: 'FAMILY' },
    { value: 'Health', label: 'HEALTH' },
    { value: 'Learning', label: 'LEARNING' },
    { value: 'Leisure', label: 'LEISURE' },
    { value: 'Work', label: 'WORK' },
];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
          <SelectArrowSvg />
    </components.DropdownIndicator>
  );
};

const customStyles = {
    container: (provided, state) => ({
        ...provided,
        position: 'absolute',
         bottom:'20px',
        width: '88px',
        height: '25px'
    }),
     indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
    }),
       singleValue: provided => ({
    ...provided,
           fontSize: '11px',
    color: '#282828',
    }),
    control: (provided, state) => {
        let backgroundColor
         switch (state.selectProps.value.value) {
      case 'Stuff':
        backgroundColor = '#B9C3C8';
        break;
      case 'Family':
        backgroundColor = '#FFE6D3';
        break;
      case 'Leisure':
        backgroundColor = '#F8D2FF';
                 break;
              case 'Health':
        backgroundColor = '#CDF7FF';
                 break;
                 case 'Learning':
        backgroundColor = '#FFF6C0';
        break;
                case 'Work':
        backgroundColor = '#9AC2A5';
        break;
      default:
        backgroundColor = '#B9C3C8'; 
    }
        return{
            ...provided,
            width: '88px',
            height: '25px',
            minHeight: '25px',
            borderColor: 'transparent',
            borderRadius: '0px 15px 15px 0px',
            backgroundColor: backgroundColor,
            boxShadow: 'none',
            cursor: 'pointer',
   
            '&:hover': {
                // backgroundColor: '#F99943',
                boxShadow: 'none',
                borderColor: 'transparent',
            },
     }
    },
       menu: (provided) => ({
    ...provided,
      width: '90px',
      height: '102px',
        borderRadius: '10px',
      background: '#FFF',
     paddingLeft: '4px',
      position: 'absolute',
      top: '-30px',
left: '-5px',
boxShadow: '3px 4px 4px 0px rgba(21, 57, 90, 0.05), -3px -4px 4px 0px rgba(21, 57, 90, 0.05)',
    }),
    option: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
  color: '#282828',
fontFamily: 'HelveticaNeueCyr',
fontSize: '11px',
fontStyle: 'normal',
fontWeight: '400',
lineHeight: '0px',
letterSpacing: '0.22px',
  
backgroundColor: 'transparent',
 '&:hover': {
     backgroundColor: 'transparent',
     color: '#B9C3C8',
    },
  }),
   dropdownIndicator: base => ({
    ...base,
    backgroundImage: `url('../../images/selectarrow.svg')`,
    backgroundRepeat: 'no-repeat',
       backgroundSize: 'contain',
    padding: '0px',
    
  }),
valueContainer: (provided, state) => ({
    ...provided,
    padding: '0px',
    paddingLeft: '7px',
    textAlign: 'center',
    height: '100%',
  width: '70px',
    }),
    indicatorsContainer: (provided, state) => ({
    ...provided,
    width: '15px'
    }),
    input: (provided, state) => ({
    ...provided,
    margin: '0px'
    }),
}   



export const SelectType = ({ dataFunc ,currentValue}) => {
  
    return (
        <Select
            onChange={dataFunc}
            options={options}
            components={{ DropdownIndicator }}
            styles={customStyles}
            value={options.find(option => option.value === currentValue)}
        />
    )
  
}