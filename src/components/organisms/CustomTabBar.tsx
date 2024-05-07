import React from 'react';
import {TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import tabStyles from './tabStyles';

export interface iTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
  icons: any;
}

const CustomTabBar = ({state, navigation, icons}: iTabBarProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tabStyles.tabContainer}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = icons[index];

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              tabStyles.tabButton,
              isFocused ? tabStyles.tabButtonFocused : null,
            ]}>
            <Icon
              width={24}
              height={24}
              fill={isFocused ? '#BC291D' : '#000'}
            />
          </TouchableOpacity>
        );
      })}
    </KeyboardAvoidingView>
  );
};

export default CustomTabBar;
