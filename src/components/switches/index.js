import React from 'react'
import { totalSize } from 'react-native-dimension'
// import { Wrapper, Icons, Text } from '..'
import  Wrapper from '../wrapper'
import * as Icons  from '../icons'
import Text  from '../text'
import { colors, handleAnimation, HelpingMethods, sizes } from '../../services'
import { TouchableOpacity } from 'react-native'


export const Primary = ({ value, onPress,tintColor }) => {
    const defaultTintColor=tintColor||value?colors.appColor1:colors.appBgColor5
    return (
        <Wrapper style={{}} isCenter>
            <Icons.Button
                iconName={"circle"}
                iconType="font-awesome"
                activeOpacity={1}
                iconSize={totalSize(2.5)}
                buttonStyle={{
                    width: totalSize(5),
                    alignItems: value ? 'flex-end' : 'flex-start',
                    height: null,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: defaultTintColor,
                    paddingHorizontal: 1.75,
                    paddingVertical: 0.1,
                    backgroundColor: colors.transparent,
                }}
                iconColor={defaultTintColor}
                buttonRadius={100}
                onPress={onPress ? () => {
                    handleAnimation()
                    onPress()
                } : null}
            />
        </Wrapper>
    )
}
// export const Primary = ({ value, onPress }) => {
//     return (
//         <Wrapper style={{}} isCenter>
//             <Icons.Button
//                 iconName={"circle"}
//                 iconType="font-awesome"
//                 activeOpacity={1}
//                 iconSize={totalSize(2.5)}
//                 buttonStyle={{
//                     width: totalSize(5),
//                     alignItems: value ? 'flex-end' : 'flex-start',
//                     height: null,
//                     borderRadius: 100,
//                     //borderWidth: 1,
//                     borderColor: colors.appBgColor3,
//                     paddingHorizontal: 1.75,
//                     paddingVertical: 0.1,
//                     backgroundColor: value?colors.appColor1+'20':colors.appBgColor3,
//                 }}
//                 iconColor={value ? colors.appColor1 : colors.appBgColor4}
//                 buttonRadius={100}
//                 onPress={onPress ? () => {
//                     handleAnimation()
//                     onPress()
//                 } : null}
//             />
//         </Wrapper>
//     )
// }

export const Secondary = ({ value, onPress }) => {
    return (
        <Wrapper style={{}} isCenter>
            <Icons.Button
                iconName={"circle"}
                iconType="font-awesome"
                activeOpacity={1}
                iconSize={totalSize(2.5)}
                buttonStyle={{ width: totalSize(7), alignItems: !value ? 'flex-end' : 'flex-start', height: null, borderRadius: 100, borderWidth: 0, borderColor: value ? colors.appColor1 : colors.appBgColor3, paddingHorizontal: 1.75, paddingVertical: 0.1, }}
                iconColor={value ? colors.appColor2 : colors.error}
                buttonRadius={100}
                onPress={onPress ? () => {
                   handleAnimation()
                    onPress()
                } : null}
            />
            <Wrapper isAbsolute style={[value ? { right: sizes.marginHorizontal / 1.5 } : { left: sizes.marginHorizontal / 1.5 }]}>
                <Text isSmall style={[{ color: value ? colors.appColor2 : colors.error, }]}>{value ? 'ON' : 'OFF'}</Text>
            </Wrapper>
        </Wrapper>
    )
}

export const Custom = ({ value, onPress, tintColor }) => {
    const defaultTintColor = tintColor || value ? colors.appColor1 : colors.appBgColor5;

    return (
        <Wrapper style={{}} isCenter>
            <TouchableOpacity
                activeOpacity={1}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: totalSize(10),
                }}
                onPress={onPress ? () => {
                    handleAnimation();
                    onPress();
                } : null}
            >
                <Text style={{ color: defaultTintColor }}>KJV</Text>
                <Wrapper style={{
                    width: totalSize(5),
                    height: totalSize(2.5),
                    borderRadius: totalSize(1.25),
                    borderWidth: 1,
                    borderColor: defaultTintColor,
                    paddingHorizontal: 1.75,
                    paddingVertical: 0.1,
                    backgroundColor: colors.transparent,
                }}>
                    <Wrapper style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: value ? 'flex-end' : 'flex-start',
                    }}>
                        <Wrapper style={{
                            width: totalSize(2.5),
                            height: totalSize(2.5),
                            borderRadius: totalSize(1.25),
                            backgroundColor: defaultTintColor,
                        }} />
                    </Wrapper>
                </Wrapper>
                <Text style={{ color: defaultTintColor }}>NIV</Text>
            </TouchableOpacity>
        </Wrapper>
    );
};
