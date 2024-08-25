import { Bubble, GiftedChat, InputToolbar, Message } from "react-native-gifted-chat"
import Wrapper from "../wrapper"
import React, { useState, forwardRef, useEffect, useCallback } from "react";
import { totalSize, width, height } from 'react-native-dimension';
import { appFonts, appIcons, appImages, colors, fontSizes, sizes } from "../../services";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Icons, Images, Spacer, Text, TextInputs } from "..";
import { FlatList } from "react-native";
import { formatDistanceToNow, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        // Example: Send "Hello" message automatically when the component mounts
        // const initialMessage = {
        //     _id: Math.random().toString(36).substring(7),
        //     text: 'Hello',
        //     createdAt: new Date(),
        //     user: {
        //         _id: 1,
        //         name: 'User Name',
        //         avatar: appImages.profile2
        //     }
        // };
        setMessages([
            {
                _id: 1,
                text: 'Hello developers',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: appImages.profile2,
                },
            },
        ])
    }, []);
    const onSend = useCallback((newMessages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
        setText(''); // Clear the input field after sending the message
    }, [])
    // const CustomFlatList = forwardRef((props, ref) => (
    //     <Wrapper flex={1} backgroundColor={'pink'}>
    //         <FlatList
    //             contentContainerStyle={{ backgroundColor: 'red' }}
    //             {...props}
    //             ref={ref}
    //         />
    //     </Wrapper>

    // ));
    // const CustomMessage = (props) => {
    //     const { currentMessage, ...restProps } = props;

    //     return (
    //       <Message
    //         {...restProps}
    //         currentMessage={{ ...currentMessage }} // Hide date
    //       />
    //     );
    //   };
    const CustomTime = ({ time, isLeft }) => {
        const now = new Date();
        const seconds = differenceInSeconds(now, time);
        const minutes = differenceInMinutes(now, time);
        const hours = differenceInHours(now, time);
        const days = differenceInDays(now, time);
        const months = differenceInMonths(now, time);
        const years = differenceInYears(now, time);

        let formattedTime;

        if (years > 0) {
            formattedTime = `${years} year${years > 1 ? 's' : ''} ago`;
        } else if (months > 0) {
            formattedTime = `${months} month${months > 1 ? 's' : ''} ago`;
        } else if (days > 0) {
            formattedTime = `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            formattedTime = `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            formattedTime = `${minutes} min${minutes > 1 ? 's' : ''} ago`;
        } else {
            formattedTime = `${seconds} sec${seconds > 1 ? 's' : ''} ago`;
        }

        return (
            <Text style={[{ textAlign: 'right', fontFamily: appFonts.appTextRegular, fontSize: fontSizes.tiny, color: colors.appTextColor12 }, isLeft ? { textAlign: 'right', } : { textAlign: 'left', }]}>{formattedTime}</Text>
        );
    };

    const Avatar = (props) => {
        return (
            <Images.SqareRound
                source={props.currentMessage.user.avatar}
                size={sizes.images.medium}
                style={{ borderRadius: 10 }}
            />
        )
    }
    const renderBubble = ({ isLeft, ...props }) => {
        const { user, currentMessage } = props;
        const isSender = currentMessage.user._id === 1;
        const username = currentMessage.user.name || 'Unknown User';

        return (
            <Wrapper flexDirectionRow>

                {!isSender && (
                    <>
                        <Wrapper flexDirectionRow alignItemsFlexStart>
                            <Avatar
                                currentMessage={currentMessage}
                                {...props}
                            />
                            <Spacer horizontal isTiny />

                        </Wrapper>
                    </>
                )}
                <Wrapper  flexDirectionRow style={[styles.bubbleContainer, isSender ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }]}>

                    <Wrapper>
                            <Text style={[{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor1 }, isSender ? { textAlign: 'right' } : { textAlign: 'left' }]}>{username}</Text>

                        <Bubble
                            {...props}
                            wrapperStyle={{
                                left: {
                                    backgroundColor: colors.appColor8,
                                    borderRadius: 20,
                                    paddingHorizontal: width(4),
                                    paddingVertical: height(0.5)
                                },
                                right: {
                                    backgroundColor: colors.appColor5,
                                    borderRadius: 20,
                                    paddingHorizontal: width(4),
                                    paddingVertical: height(0.5)
                                },
                            }}
                            textStyle={{
                                left: {
                                    color: colors.appTextColor13,
                                    fontFamily: appFonts.appTextRegular,
                                    fontSize: fontSizes.regular
                                },
                                right: {
                                    color: colors.appTextColor5,
                                    fontFamily: appFonts.appTextRegular,
                                    fontSize: fontSizes.regular
                                },
                            }}
                        />
                        <Spacer isSmall />
                        <CustomTime time={props.currentMessage.createdAt} isLeft={isSender} />
                    </Wrapper>
                    
                </Wrapper>
                {isSender && (
                        <>
                            {/* <Spacer horizontal isTiny /> */}
                            <Wrapper marginVerticalTiny flexDirectionRow alignItemsFlexStart >
                                {/* <Text style={[{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor1 }, isSender ? { textAlign: 'right' } : { textAlign: 'left' }]}>{username}</Text> */}
                                <Spacer horizontal isTiny />

                                <Avatar
                                    currentMessage={currentMessage}
                                    {...props}
                                />

                            </Wrapper>
                        </>
                    )}
            </Wrapper>
        );
    };
    const renderCustomInputToolbar = (props) => {
        return (
            <InputToolbar
                {...props}
                containerStyle={styles.inputToolbarContainer}
                renderComposer={() => (
                    // <Wrapper style={styles.customInputContainer}>
                    //     <TextInput
                    //         style={styles.customTextInput}
                    //         placeholder="Type a message..."
                    //         placeholderTextColor={colors.placeHolderColor}
                    //         value={text}
                    //         onChangeText={setText}
                    //     />
                    //     <TouchableOpacity onPress={() => onSend([{ text, _id: Math.random(), createdAt: new Date(), user: { _id: 1 } }])}>
                    //         <Icons.Custom icon={appIcons.calendarRight} style={styles.sendIcon} />
                    //     </TouchableOpacity>
                    // </Wrapper>
                    <Wrapper flex={1} flexDirectionRow paddingVerticalBase alignItemsCenter paddingHorizontalBase>
                        <Icons.Custom size={sizes.icons.mediumSmall} icon={appIcons.attach} />
                        <Spacer isBasic horizontal />
                        <Wrapper flex={1}>
                            <TextInputs.Colored
                                value={text}
                                onChangeText={(text) => setText(text)}
                                keyboardType={'default'}
                                containerStyle={{ marginHorizontal: 0 }}
                                inputContainerStyle={{
                                    backgroundColor: colors.inputfieldColor4,
                                    borderColor: colors.inputfieldColor4,
                                    borderRadius: totalSize(20)
                                }}
                                // customIconLeft={appIcons.mail}
                                isGradient
                                gradiantColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                customIconRight={appIcons.send}
                                iconStyleRight={{
                                    marginRight: width(4),
                                    resizeMode: 'contain',
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 35,
                                    width: 35,
                                }}
                                multiline
                                onPressIconRight={() => {
                                    if (text.trim()) {
                                        onSend([{
                                            text: text, _id: Math.random(), createdAt: new Date(), user: {
                                                _id: 1,
                                                avatar: appImages.profile1
                                            }
                                        }]);
                                        setText(''); // Clear the input field
                                    }
                                }}
                                iconSizeRight={sizes.icons.mediumSmall}
                                inputStyle={{
                                    fontSize: fontSizes.medium,
                                    fontFamily: appFonts.appTextRegular,
                                    color: colors.appTextColor1
                                }}
                                // iconStyleLeft={{  }}
                                placeholder={'Message...'}
                                placeholderTextColor={colors.placeHolderColor3} />
                        </Wrapper>

                    </Wrapper>

                )}
            />
        );
    };
    return (
        <Wrapper flex={1}>
            <GiftedChat
                messages={messages}
                onSend={newMessages => onSend(newMessages)}
                renderInputToolbar={renderCustomInputToolbar}
                user={{
                    _id: 1,
                }}
                renderFooter={() => <Spacer isMedium />}
                renderChatFooter={() => <Spacer />}
                renderBubble={renderBubble}
                renderTime={() => null}
                renderAvatar={() => null}
                // renderMessage={CustomMessage}
                renderDay={() => null}
            />
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    chatContainer: {
        // backgroundColor: colors.appColor3, // Set a background color for the chat container
        // padding: totalSize(2), // Add padding around the chat area
        // borderRadius: totalSize(2), // Rounded corners for the chat container
        // margin: totalSize(2), // Margin around the container
        // shadowColor: colors.black, // Add shadow for a floating effect
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 5,
        // elevation: 3, // Elevation for Android shadow
        // marginBottom:height()

    },
    inputToolbarContainer: {

        borderTopWidth: 1,
        borderTopColor: colors.black,
        backgroundColor: colors.appColor1,
    },
    customInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.appColor2,
        borderRadius: 20,
        margin: 5,
    },
    customTextInput: {
        flex: 1,
        height: 40,
        color: colors.appTextColor1,
        fontFamily: appFonts.appTextRegular,
        fontSize: fontSizes.regular,
    },
    sendIcon: {
        marginLeft: 10,
        width: 30,
        height: 30,
        tintColor: colors.black,
    },
});