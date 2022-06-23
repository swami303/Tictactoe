import Toast from 'react-native-toast-message';

export const ToastMassage = ({
  text1,
  text2,
  type,
  position,
  autoHide,
  visibilityTime,
  topOffset,
  bottomOffset,
  keyboardOffset,
  onShow,
  onHide,
  onPress,
}) => {
  return Toast.show({
    text1: text1 ?? '',
    text2: text2 ?? '',

    /**
     * Toast type.
     * Default value: `success`
     */
    type: type ?? 'success',

    /**
     * Toast position.
     * Default value: `top`
     */
    position: position ?? 'top',

    /**
     * When `true`, the visible Toast automatically hides after a certain number of seconds,
     * specified by the `visibilityTime` prop.
     * Default value: `true`
     */
    autoHide: autoHide ?? true,

    /**
     * Number of seconds after which Toast automatically hides.
     * Has effect only in conjunction with `autoHide` prop set to `true`.
     * Default value: `4000`
     */
    visibilityTime: visibilityTime ?? 4000,

    /**
     * Offset from the top of the screen (in px).
     * Has effect only when `position` is `top`
     * Default value: `40`
     */
    topOffset: topOffset ?? 40,

    /**
     * Offset from the bottom of the screen (in px)
     * Has effect only when `position` is `bottom`
     * Default value: `40`
     */
    bottomOffset: bottomOffset ?? 40,

    /**
     * Offset from the Keyboard (in px)
     * Has effect only when `position` is `bottom` and Keyboard is visible
     * Default value: `10`
     */
    keyboardOffset: keyboardOffset ?? 10,

    onShow: onShow,
    onHide: onHide,
    onPress: onPress,
  });
};
