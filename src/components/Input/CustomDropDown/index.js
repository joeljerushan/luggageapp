import {Text, View, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {Dropdown} from 'react-native-element-dropdown';
import DropDownIcon from '@/assets/icons/DropDown.svg';
import {hp, wp} from '@/utils/Scaling';
import {styles} from './styles';
import PropTypes from 'prop-types';
import {ColorSheet} from '../../../utils/ColorSheet';

const CustomDropDown = props => {
  const {
    data,
    value,
    onChange,
    placeholder,
    style,
    dropDownStyle,
    selectedTextStyle,
    textItemStyle,
    placeholderStyle,
    disable,
    customRightIcon,
  } = props;

  const [focus, setFocus] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const toggleAnimate = () => {
    Animated.timing(animationController, {
      duration: 300,
      toValue: focus ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = item => (
    <View style={styles.item}>
      <Text style={[styles.textItem, textItemStyle]}>{item.label}</Text>
      {item.value === value && (
        <Octicons
          style={styles.icon}
          color={ColorSheet.TextInputTxtColor}
          name="check"
          size={20}
        />
      )}
    </View>
  );

  const rightIcon = () => (
    <View style={styles.arrowDropContainer}>
      <Animated.View style={{transform: [{rotate: arrowTransform}]}}>
        {customRightIcon ? (
          customRightIcon()
        ) : (
          <DropDownIcon height={hp(1.5)} />
        )}
      </Animated.View>
    </View>
  );

  return (
    <View
      style={[
        styles.dropdownView,
        focus && {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderColor: ColorSheet.Title,
        },
        style,
      ]}>
      <Dropdown
        style={[styles.dropdown, dropDownStyle]}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        selectedTextStyle={[
          styles.selectedTextStyle,
          {color: value ? ColorSheet.Title : ColorSheet.TextInputTxtColor},
          selectedTextStyle,
        ]}
        containerStyle={styles.dropdownContainerStyle}
        iconStyle={styles.iconStyle}
        renderRightIcon={rightIcon}
        renderItem={renderItem}
        data={data}
        search={false}
        onFocus={() => {
          setFocus(true);
          toggleAnimate();
        }}
        onBlur={() => {
          setFocus(false);
          toggleAnimate();
        }}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disable={disable}
      />
    </View>
  );
};

// Define Type Props
CustomDropDown.propTypes = {
  data: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  dropDownStyle: PropTypes.object,
  iconColor: PropTypes.string,
  selectedTextStyle: PropTypes.object,
  textItemStyle: PropTypes.object,
  dropdownPosition: PropTypes.string,
  placeholderStyle: PropTypes.object,
  disable: PropTypes.bool,
  customRightIcon: PropTypes.func,
};

export default CustomDropDown;
