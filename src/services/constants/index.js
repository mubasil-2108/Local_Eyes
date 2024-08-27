import { colors } from "../utilities/colors"
import { appStyles } from "../utilities/appStyles"


export const baseURL = 'https://localserver/v1/'
export const endPoints = {
    register:{
        url_1:'register'
    },
    login:{
        url_1:'login'
    }
}
export const routes = {
    //main stacks
    auth: 'auth',
    app: 'app',
    onBoarding: 'onBoarding',

    //profile
    createProfile: 'createProfile',
    localProfile: 'localProfile',
    addAddress: 'addAddress',

    //auth
    splash: 'splash',
    signin: 'signin',
    createAccount: 'createAccount',
    forgetPassword: 'forgetPassword',
    localSignin: 'localSignin',

    //app
    bottomTab: 'bottomTab',
    helpCenter: 'helpCenter',
    faqs: 'faqs',
    stackNavigation: 'stackNavigation',
    home: 'home',
    contactSupport: 'contactSupport',
    common: 'common',
    terms: 'terms',
    privacy: 'privacy',
    aboutUs: 'aboutUs',
    localPreview: 'localPreview',
    chatScreen:'chatScreen',
    booking: 'booking',
    payment: 'payment',
    cardManagement: 'cardManagement',

    dummyScreen:'DummyScreen',
    homeStackScreen: 'HomeStackScreen',
    allCategory: 'allCategory',
    subCategories: 'subCategories',

    editProfile: 'editProfile',
    notifications: 'notifications',
    account: 'account',
    cart:'cart',
    products:'products',

    //common
    termsOfService: 'termsOfService',
    howToUse: 'howToUse',
}

export const animations = {
    bounceInRight: 'bounceInRight'
}

export const headers = {
    screenOptions: {
        // headerShown: false,
        title: 'Title',
        headerTitleAlign: 'left',
        headerStyle: [appStyles.headerStyle],
        headerTitleStyle: appStyles.headerTitleStyle,
        headerTintColor: colors.appTextColor4,
        headerBackTitle: ' '

    }
}
export const tabs = {
    tabBarOptions: {
        showLabel: false,
        tabBarActiveTintColor: colors.appBgColor1,
        tabBarInactiveTintColor: colors.appBgColor1 + '60',
        allowFontScaling: true,
        tabBarStyle: [appStyles.tabBarStyle, appStyles.shadowExtraDark],
        activeBackgroundColor: '#FFFFFF40',
        //tabStyle: { borderRadius: 20, marginHorizontal: 7.5, marginVertical: 2 }
    },
}

export const imagePickerOptions = {
    title: 'Select Photo',
    quality: 1,
    maxWidth: 500,
    maxHeight: 500,
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};