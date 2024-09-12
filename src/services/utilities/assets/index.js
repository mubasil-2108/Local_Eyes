import * as appSvgs from './appSvgs'

// leave off @2x/@3x
const appImages = {
    chip: require('../../../assets/images/chip.png'),
    dummyProfile: require('../../../assets/images/dummyPic.png'),
    success: require('../../../assets/images/success.png'),
    fullLogo: require('../../../assets/images/fullLogo.png'),
    helpCenter: require('../../../assets/images/helpCenter.png'),
    mainLogo: require('../../../assets/images/mainLogo.png'),
    imgBackground1: require('../../../assets/images/imgBackground1.png'),
    imgBackground2: require('../../../assets/images/imgBackground2.png'),
    imgBackground3: require('../../../assets/images/imgBackground3.png'),
    Location1: require('../../../assets/images/Location1.png'),
    Location2: require('../../../assets/images/Location2.png'),
    Location3: require('../../../assets/images/Location3.png'),
    Location4: require('../../../assets/images/Location4.png'),
    profile1: require('../../../assets/images/profile1.png'),
    profile2: require('../../../assets/images/profile2.png'),
    profile3: require('../../../assets/images/profile3.png'),
    place1: require('../../../assets/images/place1.png'),
    place2: require('../../../assets/images/place2.png'),
    place3: require('../../../assets/images/place3.png'),
    place4: require('../../../assets/images/place4.png'),
    picker: require('../../../assets/images/picker.png'),
    review: require('../../../assets/images/review.png'),
    liscense: require('../../../assets/images/liscense.png'),
    paymentCard: require('../../../assets/images/paymentCard.png'),
    withDraw: require('../../../assets/images/withDraw.png'),

    logo: require('../../../assets/images/Logo.png'),
    confirm: require('../../../assets/images/confirm.png'),
    product1: require('../../../assets/images/product1.png'),
    product2: require('../../../assets/images/product2.png'),

    heart: require('../../../assets/images/heart.png'),
    radiation: require('../../../assets/images/radiation.png'),
    sphygmomanometer: require('../../../assets/images/sphygmomanometer.png'),
    pelvis: require('../../../assets/images/pelvis.png'),
    defibrillator: require('../../../assets/images/defibrillator.png'),
    pharynx: require('../../../assets/images/pharynx.png'),

    // book: require('../../../assets/images/menu_book.png'),
    backgroundImage: require('../../../assets/images/backgroundImage.png'),
    profile: require('../../../assets/images/PFP.png'),
    uploadPhoto: require('../../../assets/images/uploadPhoto.png'),
    user1: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    user2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
    user3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwMIGTutu1jpkhgNCLM-Rd2gz3d0MRSXuPw&usqp=CAU',
    user4: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    user5: 'https://i.pinimg.com/474x/c2/76/05/c2760595530e6633ae778a60de74f127.jpg',
    noUser: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg',

    materCardLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png',
    visaCardLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png',
}

const appIcons = {

    localEyesMiddle: require('../../../assets/icons/localEyesMiddle.png'),
    localEyesLeft: require('../../../assets/icons/localEyesLeft.png'),
    localEyesRight: require('../../../assets/icons/localEyesRight.png'),
    eye: require('../../../assets/icons/eye.png'),
    lock: require('../../../assets/icons/lock.png'),
    mail: require('../../../assets/icons/mail.png'),
    arrow_forward: require('../../../assets/icons/arrow_forward.png'),
    vector: require('../../../assets/icons/vector.png'),
    google: require('../../../assets/icons/google.png'),
    facebook: require('../../../assets/icons/facebook.png'),
    apple: require('../../../assets/icons/apple.png'),
    blankCheck: require('../../../assets/icons/blankCheck.png'),
    checked: require('../../../assets/icons/checked.png'),
    camera: require('../../../assets/icons/camera.png'),
    calendar: require('../../../assets/icons/calendar.png'),
    dropDown: require('../../../assets/icons/dropDown.png'),
    location: require('../../../assets/icons/location.png'),
    pin: require('../../../assets/icons/pin.png'),
    time: require('../../../assets/icons/time.png'),
    home: require('../../../assets/icons/home.png'),
    log_out: require('../../../assets/icons/log_out.png'),
    headphone: require('../../../assets/icons/headphone.png'),
    notes: require('../../../assets/icons/notes.png'),
    securitySafe: require('../../../assets/icons/securitySafe.png'),
    infoCircle: require('../../../assets/icons/infoCircle.png'),
    plus: require('../../../assets/icons/plus.png'),
    minus: require('../../../assets/icons/minus.png'),
    plus_1: require('../../../assets/icons/plus_1.png'),
    minus_1: require('../../../assets/icons/minus_1.png'),
    chevron_left: require('../../../assets/icons/chevron_left.png'),
    notification: require('../../../assets/icons/notification.png'),
    drawer: require('../../../assets/icons/drawer.png'),
    search: require('../../../assets/icons/search.png'),
    equalizer: require('../../../assets/icons/equalizer.png'),
    nearBy: require('../../../assets/icons/nearBy.png'),
    star: require('../../../assets/icons/star.png'),
    map: require('../../../assets/icons/map.png'),
    chats: require('../../../assets/icons/chats.png'),
    profile: require('../../../assets/icons/profile.png'),
    messages: require('../../../assets/icons/messages.png'),
    book: require('../../../assets/icons/book.png'),
    car: require('../../../assets/icons/car.png'),
    people: require('../../../assets/icons/people.png'),
    experience: require('../../../assets/icons/experience.png'),
    user: require('../../../assets/icons/user.png'),
    adults: require('../../../assets/icons/adults.png'),
    young: require('../../../assets/icons/young.png'),
    baby: require('../../../assets/icons/baby.png'),
    picker: require('../../../assets/icons/picker.png'),
    calendarLeft: require('../../../assets/icons/calenderLeft.png'),
    calendarRight: require('../../../assets/icons/calenderRight.png'),
    send: require('../../../assets/icons/sendButton.png'),
    attach: require('../../../assets/icons/attach.png'),
    download: require('../../../assets/icons/download.png'),
    edit: require('../../../assets/icons/edit.png'),
    location_2: require('../../../assets/icons/location_2.png'),
    card: require('../../../assets/icons/card.png'),
    delete: require('../../../assets/icons/delete.png'),
    dining: require('../../../assets/icons/dining.png'),
    history: require('../../../assets/icons/history.png'),
    shopping: require('../../../assets/icons/shopping.png'),
    art: require('../../../assets/icons/art.png'),
    nightLife: require('../../../assets/icons/nightLife.png'),
    culture: require('../../../assets/icons/culture.png'),
    nature: require('../../../assets/icons/nature.png'),
    sightSeeing: require('../../../assets/icons/sightSeeing.png'),
    couple: require('../../../assets/icons/couple.png'),
    family: require('../../../assets/icons/family.png'),
    sort: require('../../../assets/icons/sort.png'),
    dollar: require('../../../assets/icons/dollar.png'),
    medal: require('../../../assets/icons/medal.png'),
    rating: require('../../../assets/icons/rating.png'),
    english: require('../../../assets/icons/english.png'),
    china: require('../../../assets/icons/china.png'),
    thailand: require('../../../assets/icons/thailand.png'),
    indonesia: require('../../../assets/icons/indonesia.png'),
    dummyFlag: require('../../../assets/icons/dummyFlag.png'),
    close: require('../../../assets/icons/close.png'),
    trendUp: require('../../../assets/icons/trendUp.png'),
    currency: require('../../../assets/icons/currency.png'),
    states: require('../../../assets/icons/states.png'),
    smallUp:require('../../../assets/icons/smallUp.png'),

    // add:require('../../../assets/icons/add.png'),

    security: require('../../../assets/icons/security.png'),
    logIn: require('../../../assets/icons/logIn.png'),
    format_size: require('../../../assets/icons/format_size.png'),
    info: require('../../../assets/icons/info.png'),
    file_text: require('../../../assets/icons/file_text.png'),
    chevron_right: require('../../../assets/icons/chevron_right.png'),
    arrow_back: require('../../../assets/icons/arrow_back.png'),
}

const appFonts = {
    // appTextLight: 'Roboto-Light',
    // appTextRegular: 'Roboto-Regular',
    // appTextMedium: 'Roboto-Medium',
    // appTextBold: 'Roboto-Bold',
    appTextLight: 'Urbanist-Light',
    appTextRegular: 'Urbanist-Regular',
    appTextMedium: 'Urbanist-Medium',
    appTextBold: 'Urbanist-Bold',
    appTextExtraBold: 'Urbanist-ExtraBold',

    interBold: 'Inter_24pt-Bold',
    interExtraBold: 'Inter_24pt-ExtraBold',
    interLight: 'Inter_24pt-Light',
    interMedium: 'Inter_24pt-Medium',
    interSemiBold: 'Inter_24pt-SemiBold',
    interRegular: 'Inter_24pt-Regular',

    satoshiBold: 'Satoshi-Bold',
    satoshiLight: 'Satoshi-Light',
    satoshiMedium: 'Satoshi-Medium',
    satoshiRegular: 'Satoshi-Regular',

    baloo2_Bold: 'Baloo2-Bold',
    baloo2_ExtraBold: 'Baloo2-ExtraBold',
    baloo2_Medium: 'Baloo2-Medium',
    baloo2_Regular: 'Baloo2-Regular',
    baloo2_SemiBold: 'Baloo2-SemiBold',

    plusJakartaSans_Bold: 'PlusJakartaSans-Bold',
    plusJakartaSans_ExtraBold: 'PlusJakartaSans-ExtraBold',
    plusJakartaSans_Light: 'PlusJakartaSans-Light',
    plusJakartaSans_Medium: 'PlusJakartaSans-Medium',
    plusJakartaSans_Regular: 'PlusJakartaSans-Regular',
    plusJakartaSans_SemiBold: 'PlusJakartaSans-SemiBold',

    avenirNextLTPro_Regular: 'AvenirNextLTPro-Regular',
    avenirNextLTPro_Medium: 'AvenirNextLTPro-Medium',
    avenirNextLTPro_Bold: 'AvenirNextLTPro-Bold',

    AmiriQuran_Regular: 'AmiriQuran-Regular'
}

export { appImages, appIcons, appSvgs, appFonts }
