import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, PlacesList, Rating, ReviewList, CheckBoxes } from '../../../components';
import { useHooks } from './hooks'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';


export default function Index(props) {

    const { navigate, goBack, dispatch } = props.navigation
    const {
        clickedItems,
        modalVisible,
        setModalVisible,
        customDayNames,
        selectedDate,
        // hour,
        // hours,
        // setHour,
        setSelectedDate,
        // LocaleConfig,
        onDatePress,
        handlePressItem,
        data,
        search,
        pressed,
        setPressed,
        isChecked,
        setIsChecked,
        toggleCheckbox,
        increment,
        decrement,
        counter,
        images,
        setSearch,
        handleProductPressItem,
        dummyProductData,
        categories,
        isDrawerOpen,
        imageData,
        statusBarVisible,
        DrawerActions,
        clickedProductItems
    } = useHooks() || {};
    const [date, setDate] = useState(new Date());

    const handleConfirm = (time) => {
        setDate(time || date);
    };

    const [selectedHour, setSelectedHour] = useState(0);
    const [selectedMinute, setSelectedMinute] = useState(0);
    const [selectedPeriod, setSelectedPeriod] = useState('AM');

    const hours = Array.from({ length: 12 }, (_, i) => i + 1);
    const minutes = Array.from({ length: 60 }, (_, i) => i < 10 ? `0${i}` : i.toString());
    const periods = ['AM', 'PM'];

    const CustomHeader = ({ date, onPrevious, onNext }) => {
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        return (
            <Wrapper justifyContentCenter alignItemsCenter flexDirectionRow>
                <Text style={{ color: colors.appTextColor11, fontFamily: appFonts.baloo2_Regular, fontSize: fontSizes.regular }}>{`${month} ${year}`}</Text>
            </Wrapper>
        )
    };
    const CustomArrow = (direction) => {
        const icon = direction === 'left' ? appIcons.calendarLeft : appIcons.calendarRight;
        // const previous = subtractMonth => subtractMonth();
        // const month = direction === 'left' ? previous : null;
        return (
            <Icons.Button
                customIcon={icon}
                iconColor={colors.iconColor9}
                buttonColor={colors.transparent}
                iconSize={sizes.icons.tiny}
            />
        );
    };
    const CustomDay = ({ date, state, customDayNames }) => {
        const isSelected = selectedDate === date.dateString;
        const dayName = customDayNames[new Date(date.dateString).getDay()];
        return (
            <>

                <TouchableOpacity onPress={() => onDatePress(date)} style={{ flex: 1 }}>
                    {isSelected ? (
                        <Wrapper
                            isGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            gradiantColors={isSelected ? [colors.appColor5, colors.appColor5, colors.appColor3,] : [colors.transparent, colors.transparent]}
                            style={
                                {
                                    width: 30,
                                    height: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 50,
                                }}>
                            <Wrapper alignItemsCenter>
                                <Text style={[{ color: colors.appTextColor11, fontFamily: appFonts.avenirNextLTPro_Medium, fontSize: fontSizes.medium }, { color: colors.appTextColor5 }]}>
                                    {date.day}
                                </Text>
                            </Wrapper>
                        </Wrapper>
                    ) : (

                        <Wrapper isGradient
                            gradiantColors={[colors.transparent, colors.transparent]}
                            style={{
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 50,
                                // Non-selected background color
                            }}>

                            <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.avenirNextLTPro_Medium, color: colors.appTextColor11 }}>
                                {date.day}
                            </Text>
                        </Wrapper>
                    )}
                </TouchableOpacity>
            </>
        );
    };
    return (
        <>
            <Wrapper isMain backgroundColor={colors.appColor1}>
                <StatusBars.Dark backgroundColor={colors.appColor1} />
                <Spacer />
                <Wrapper
                    marginHorizontalBase
                    backgroundColor={colors.appColor1}>
                    <Headers.Primary
                        onBackPress={() => goBack()}
                        showBackArrow
                        rightIconSource={appIcons.chevron_left}
                        // allowText
                        // iconColor={colors.iconColor1}
                        title={'Schedule'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }}>
                    <Wrapper flex={1} backgroundColor={colors.appColor1} marginHorizontalBase>
                        <Wrapper paddingHorizontalTiny paddingVerticalTiny isBorderedWrapper marginHorizontalZero marginVerticalZero>

                            <Calendar
                                dayComponent={({ date, state }) => (

                                    <CustomDay date={date} state={state} customDayNames={customDayNames} />
                                )}
                                style={{ flex: 1, width: '100%' }}
                                hideExtraDays={true}
                                // hideDayNames={true}
                                renderArrow={(direction) => CustomArrow(direction)}
                                onDayPress={day => onDatePress(day)}
                                onPressArrowLeft={subtractMonth => subtractMonth()}
                                onPressArrowRight={addMonth => addMonth()}
                                renderHeader={(date) => (
                                    <CustomHeader
                                        date={new Date(date)}
                                        onPrevious={() => console.log('Previous Month')}
                                        onNext={() => console.log('Next Month')}
                                    />
                                )}
                                theme={{
                                    textDayHeaderFontFamily: appFonts.avenirNextLTPro_Medium,
                                    textDayHeaderFontSize: fontSizes.tiny
                                }}
                            />
                            <Spacer isSmall />
                        </Wrapper>
                        <Spacer />
                        <Text style={{ fontFamily: appFonts.baloo2_Bold, fontSize: fontSizes.medium, color: colors.appTextColor9 }}>Starting Time</Text>
                        <Wrapper justifyContentCenter isBorderedWrapper>
                            <Wrapper>
                            <DatePicker
                                date={date}
                                mode="time"
                                onConfirm={handleConfirm}
                                onCancel={() => {}}
                                style={styles.datePicker}
                            />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>
            </Wrapper>

            <Modals.PopupPrimary toggle={() => setModalVisible(!modalVisible)} calender topMargin titleStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }} title={'Availability'} visible={modalVisible} />
        </>
    );
}

const styles = StyleSheet.create({
    selected: {
        borderRadius: 50,
        backgroundColor: colors.appBgColor2,
    },
    unSelected: {
        borderRadius: 50,
        backgroundColor: colors.transparent,
        borderWidth: responsiveWidth(0.1),
        borderColor: colors.borderColor1
    },
    selectedText: {
        color: colors.appTextColor3,
        fontFamily: appFonts.appTextMedium,
        fontSize: fontSizes.regular
    },
    unSelectedText: {
        color: colors.appTextColor6,
        fontFamily: appFonts.appTextRegular,
        fontSize: fontSizes.regular
    },
    datePicker: {
        width: 300, // Use a fixed width here
        alignSelf: 'center',
    },
})


