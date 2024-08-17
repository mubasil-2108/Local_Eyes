import React, { useEffect, useState } from 'react';
import { height, width } from 'react-native-dimension'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Wrapper from '../../wrapper';
import Text from '../../text';
import { appFonts, colors, fontSizes, responsiveHeight, responsiveWidth } from '../../../services';
import Spacer from '../../spacer';

export const CategoryItems = ({ id, isSelect, onPress, selectedText, unSelectedText, onHandlePress, userImage,textStyle, selectedStyle,unSelectedStyle, userName, timeStamp, notificationText }) => {
   const [isShowAll, setShowAll] = useState();
    const truncatedUserName = userName.length > 50 ? `${userName.substring(0, 50)}...` : userName;
    console.log(isSelect);
    return (
        <>
            <Wrapper justifyContentCenter >
                <TouchableOpacity onPress={() => onPress(id)} style={[isSelect ? selectedStyle : unSelectedStyle]}>
                    <Wrapper
                        justifyContentCenter
                        alignItemsCenter
                        paddingHorizontalBase
                        paddingVerticalSmall>
                        <Text style={[isSelect ? selectedText : unSelectedText, textStyle]}>{truncatedUserName}</Text>
                    </Wrapper>
                </TouchableOpacity>
            </Wrapper>
            <Spacer width={responsiveWidth(2)} />
        </>
    );
};

const styles = StyleSheet.create({
   
   
});
