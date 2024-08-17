import React from 'react';
import { height, width } from 'react-native-dimension'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Wrapper from '../../wrapper';
import Text from '../../text';
import { appFonts, appIcons, appImages, colors, fontSizes, responsiveHeight, responsiveWidth, sizes } from '../../../services';
import Spacer from '../../spacer';
import { Icons, Images } from '../..';

// export const ProductItems = ({ id, handlePressItem, isSelect, onPress, products, onHandlePress, subCategory, userImage, userName, productImage, timeStamp, notificationText }) => {
//     // const truncatedUserName = userName.length > 50 ? `${userName.substring(0, 50)}...` : userName;
//     // console.log(isSelect);
//     return (
//         <>
//             <Wrapper justifyContentCenter >
//                 <Wrapper marginVerticalSmall>
//                     <Text isMedium style={{ fontFamily: appFonts.appTextMedium }}>{subCategory}</Text>
//                 </Wrapper>
//                 <Wrapper flexDirectionRow>
//                     {products.map((product, index) => {
//                         const { id, productName, productImage, productPrice, productCapacity, productTablets } = product;
//                         return (
//                             <>
//                                 <TouchableOpacity key={id}
//                                     onPress={() => handlePressItem(product, index)} style={[styles.container, isSelect[id] ? styles.selected : styles.unSelected]}>
//                                     <Wrapper
//                                         justifyContentCenter
//                                     >
//                                         <Images.MainLogo
//                                             source={{uri: productImage}}
//                                             style={{
//                                                 // borderRadius: sizes.cardRadius,
//                                                 borderRadius: responsiveWidth(3),
//                                                 height: sizes.images.productHeight,
//                                                 width: sizes.images.productWidth
//                                             }} />
//                                         <Wrapper marginHorizontalSmall justifyContentCenter paddingVerticalTiny>
//                                             <Text isRegular style={{ color: colors.appTextColor7, fontFamily: appFonts.poppinsRegular }} >Product Name</Text>
//                                         </Wrapper>
//                                         <Wrapper marginHorizontalSmall >
//                                             <Text style={{ fontSize: fontSizes.xTiny, color: colors.appTextColor8, fontFamily: appFonts.poppinsRegular }} >75ml {' '}
//                                                 <Text>
//                                                     (100 tablets)
//                                                 </Text>
//                                             </Text>
//                                         </Wrapper>
//                                         <Wrapper
//                                             marginHorizontalSmall
//                                             flexDirectionRow
//                                             alignItemsCenter
//                                             justifyContentSpaceBetween
//                                             style={{ marginBottom: responsiveHeight(1) }}>
//                                             <Text isTinyTitle style={{ color: colors.appTextColor7, fontFamily: appFonts.interRegular }}>$9.99</Text>
//                                             <Icons.Custom icon={appIcons.add} size={sizes.icons.mediumLarge} />
//                                         </Wrapper>
//                                         {/* <Text style={[isSelect ? styles.userName : styles.unSelectedText]}>{truncatedUserName}</Text> */}
//                                     </Wrapper>
//                                 </TouchableOpacity>
//                                 <Spacer width={responsiveWidth(2)} />
//                             </>
//                         );
//                     })}
//                 </Wrapper>

//             </Wrapper>
//         </>
//     );
// };

export const ProductItems = ({ id, handlePressItem, isSelect, onPress, products, index, totalCategories, onHandlePress, subCategory, userImage, userName, productImage, timeStamp, notificationText }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    return (
        <Wrapper justifyContentCenter style={{ marginBottom: index === totalCategories + 8 ? responsiveHeight(5) : responsiveHeight(2) }}>
            
            <Wrapper flexDirectionRow >
                {products.map((product, index) => {
                    const { id, productName, productImage, productPrice, productCapacity, productTablets } = product;
                    return (
                        <React.Fragment key={id}>
                            <TouchableOpacity
                                key={product.id}
                                onPress={() => handlePressItem(product)}
                                style={[styles.container, isSelect[id] ? styles.selected : styles.unSelected,
                                ]}
                            >
                                <Wrapper justifyContentCenter>
                                    <Images.MainLogo
                                        source={{ uri: productImage }}
                                        style={{
                                            borderRadius: responsiveWidth(3),
                                            height: sizes.images.productHeight,
                                            width: sizes.images.productWidth
                                        }} />
                                    <Wrapper marginHorizontalSmall justifyContentCenter paddingVerticalTiny>
                                        <Text isRegular style={{ color: colors.appTextColor7, fontFamily: appFonts.poppinsRegular }} >{truncateText(productName, 9)}</Text>
                                    </Wrapper>
                                    <Wrapper marginHorizontalSmall >
                                        <Text style={{ marginTop: responsiveHeight(-1), fontSize: fontSizes.xTiny, color: colors.appTextColor8, fontFamily: appFonts.poppinsRegular }} >{productCapacity} {' '}
                                            <Text>
                                                ({productTablets})
                                            </Text>
                                        </Text>
                                    </Wrapper>
                                    <Wrapper
                                        marginHorizontalSmall
                                        flexDirectionRow
                                        alignItemsCenter
                                        justifyContentSpaceBetween
                                        style={{ marginBottom: responsiveHeight(1) }}>
                                        <Text isTinyTitle style={{ color: colors.appTextColor7, fontFamily: appFonts.interRegular }}>${productPrice}</Text>
                                        <Icons.Custom icon={appIcons.add} size={sizes.icons.mediumLarge} />
                                    </Wrapper>
                                </Wrapper>
                            </TouchableOpacity>
                            <Spacer width={responsiveWidth(2)} />
                        </React.Fragment>
                    );
                })}
            </Wrapper>
        </Wrapper>
    );
};

export const SubCategory = ({ id, handlePressItem, isSelect, onPress, products, index, totalCategories, onHandlePress, subCategory, userImage, userName, productImage, timeStamp, notificationText }) => {
    return (
        <Wrapper justifyContentCenter style={{ marginBottom: index === totalCategories - 1 ? responsiveHeight(5) : responsiveHeight(2) }}>
            {/* <Wrapper marginVerticalSmall>
                <Text isMedium style={{ fontFamily: appFonts.appTextMedium }}>{subCategory}</Text>
            </Wrapper> */}
            <Wrapper  >
                {products.map((product, index) => {
                    const { id, productName, productImage, productPrice, productCapacity, productTablets } = product;
                    return (
                        <React.Fragment key={id}>
                            <TouchableOpacity
                                onPress={() => handlePressItem(product, index)}
                                style={[styles.container, isSelect[id] ? styles.selected : styles.unSelected,
                                ]}
                            >
                                <Wrapper justifyContentCenter>
                                    <Images.MainLogo
                                        source={productImage}
                                        style={{
                                            borderRadius: responsiveWidth(3),
                                            height: sizes.images.productHeight,
                                            width: sizes.images.productWidth
                                        }} />
                                    <Wrapper marginHorizontalSmall justifyContentCenter paddingVerticalTiny>
                                        <Text isRegular style={{ color: colors.appTextColor7, fontFamily: appFonts.poppinsRegular }} >{productName}</Text>
                                    </Wrapper>
                                    <Wrapper marginHorizontalSmall >
                                        <Text style={{ marginTop: responsiveHeight(-1), fontSize: fontSizes.xTiny, color: colors.appTextColor8, fontFamily: appFonts.poppinsRegular }} >{productCapacity} {' '}
                                            <Text>
                                                ({productTablets})
                                            </Text>
                                        </Text>
                                    </Wrapper>
                                    <Wrapper
                                        marginHorizontalSmall
                                        flexDirectionRow
                                        alignItemsCenter
                                        justifyContentSpaceBetween
                                        style={{ marginBottom: responsiveHeight(1) }}>
                                        <Text isTinyTitle style={{ color: colors.appTextColor7, fontFamily: appFonts.interRegular }}>${productPrice}</Text>
                                        <Icons.Custom icon={appIcons.add} size={sizes.icons.mediumLarge} />
                                    </Wrapper>
                                </Wrapper>
                            </TouchableOpacity>
                            <Spacer width={responsiveWidth(2)} />
                        </React.Fragment>
                    );
                })}
            </Wrapper>
        </Wrapper>
    );
};



const styles = StyleSheet.create({
    container: {
        borderRadius: responsiveWidth(3),
        borderColor: colors.borderColor2,
        borderWidth: responsiveWidth(0.3)
    },
    selected: {

        backgroundColor: colors.appBgColor2,
    },
    unSelected: {
        backgroundColor: colors.transparent,
        borderWidth: responsiveWidth(0.1),
        borderColor: colors.borderColor1
    },
    userName: {
        color: colors.appTextColor3,
        fontFamily: appFonts.appTextMedium,
        fontSize: fontSizes.regular
    },
    unSelectedText: {
        color: colors.appTextColor6,
        fontFamily: appFonts.appTextRegular,
        fontSize: fontSizes.regular
    }
});
