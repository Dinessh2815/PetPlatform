import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Padding, FontFamily, FontSize, Color, Border} from '../../GlobalStyles'
import { router } from 'expo-router'
const VetInfoPage = () => {
  return (
     <SafeAreaView>
            <View>
            <View style={[styles.frameParent, styles.groupChildPosition]}>
                <View style={styles.frameWrapper}>
                <View style={styles.keyboardBackspaceParent}>
                    <Image
                    style={styles.keyboardBackspaceIcon}
                    contentFit="cover"
                    source={require("../../assets/keyboard-backspace.png")}
                    />
                    <Text style={[styles.drJennyWatson, styles.jennyTypo]}>
                    Dr. Jenny Watson
                    </Text>
                </View>
                </View>
                <Image
                style={[styles.vectorIcon, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../../assets/vector.png")}
                />
            </View>
            <View style={styles.frameGroup}>
                <View style={styles.frameContainer}>
                <View style={styles.parentFlexBox1}>
                    <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../../assets/rectangle-49.png")}
                    />
                    <View style={styles.drJennyWatsonParent}>
                    <Text style={[styles.drJennyWatson1, styles.seeAllTypo]}>
                        Dr. Jenny Watson
                    </Text>
                    <View style={styles.frameItem} />
                    <View style={styles.vetDermatologistParent}>
                        <Text style={[styles.vetDermatologist, styles.petsLayout]}>
                        Vet Dermatologist
                        </Text>
                        <Text style={[styles.christHospitalLondon, styles.petsLayout]}>
                        Christ Hospital, London
                        </Text>
                    </View>
                    </View>
                </View>
                <View style={styles.frameView}>
                    <View style={[styles.frameParent1, styles.parentFlexBox1]}>
                    <View style={styles.frameContainer}>
                        <Image
                        style={styles.frameInner}
                        contentFit="cover"
                        source={require("../../assets/ellipse-51.png")}
                        />
                        <Text style={[styles.text, styles.textTypo]}>5000+</Text>
                        <Text style={[styles.pets, styles.textTypo]}>pets</Text>
                    </View>
                    <View style={styles.ellipseGroup}>
                        <Image
                        style={styles.frameInner}
                        contentFit="cover"
                        source={require("../../assets/ellipse-51.png")}
                        />
                        <Text style={[styles.text1, styles.textTypo]}>10+</Text>
                        <Text style={[styles.years, styles.textTypo]}>years</Text>
                    </View>
                    <View style={styles.ellipseGroup}>
                        <Image
                        style={styles.frameInner}
                        contentFit="cover"
                        source={require("../../assets/ellipse-51.png")}
                        />
                        <Text style={[styles.text, styles.textTypo]}>4.8</Text>
                        <Text style={[styles.rating, styles.textTypo]}>rating</Text>
                    </View>
                    <View style={styles.ellipseGroup}>
                        <Image
                        style={styles.frameInner}
                        contentFit="cover"
                        source={require("../../assets/ellipse-51.png")}
                        />
                        <Text style={[styles.text, styles.textTypo]}>4983</Text>
                        <Text style={[styles.reviews, styles.textTypo]}>reviews</Text>
                    </View>
                    </View>
                    <View style={styles.aboutMeParent}>
                    <Text style={[styles.drJennyWatson1, styles.seeAllTypo]}>
                        About me
                    </Text>
                    <Text style={styles.drJennyWatsonContainer}>
                        <Text
                        style={styles.drJennyWatson2}
                        >{`Dr. Jenny Watson is the top most dermatologist in Christ Hospital. He achieved several awards for his wonderful contribution in medical field. She is available for private consultation. `}</Text>
                        <Text style={styles.viewMore}>view more</Text>
                    </Text>
                    </View>
                    <View style={styles.workingTimeParent}>
                    <Text style={[styles.workingTime, styles.seeAllTypo]}>
                        Working Time
                    </Text>
                    <Text style={[styles.mondayFriday, styles.petsLayout]}>
                        Monday - Friday, 08.00 AM - 08.00 PM
                    </Text>
                    </View>
                </View>
                </View>
                <View style={styles.frameParent2}>
                <View style={styles.reviewsParent}>
                    <Text style={[styles.reviews1, styles.seeAllTypo]}>Reviews</Text>
                    <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
                </View>
                <View style={styles.frameParent3}>
                    <View style={styles.ellipseParent2}>
                    <Image
                        style={styles.frameChild3}
                        contentFit="cover"
                        source={require("../../assets/ellipse-511.png")}
                    />
                    <Text style={[styles.charoletteHanlin, styles.daysAgoSpaceBlock]}>
                        Charolette Hanlin
                    </Text>
                    </View>
                    <View style={[styles.rectangleGroup, styles.groupLayout]}>
                    <View style={[styles.groupChild, styles.groupLayout]} />
                    <View style={styles.path14Parent}>
                        <Image
                        style={styles.path14Icon}
                        contentFit="cover"
                        source={require("../../assets/path141.png")}
                        />
                        <Text style={styles.text4}>5</Text>
                    </View>
                    </View>
                </View>
                <Text style={[styles.mondayFriday, styles.petsLayout]}>
                    Dr. Jenny is very professional in his work
                </Text>
                <View style={[styles.frameParent4, styles.parentFlexBox]}>
                    <View style={styles.parentFlexBox}>
                    <Image
                        style={styles.vectorIconLayout}
                        contentFit="cover"
                        source={require("../../assets/vector.png")}
                    />
                    <Text style={[styles.text5, styles.petsLayout]}>698</Text>
                    </View>
                    <Text style={[styles.daysAgo, styles.daysAgoSpaceBlock]}>
                    6 days ago
                    </Text>
                </View>
                </View>
            </View>
            </View>
            <Pressable onPress={() => router.push('../VetAppointment/DateAndTime')}>
            <View style={[styles.nextWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.next, styles.nextTypo]}>Book Appointment</Text>
            </View>
            </Pressable>
      </SafeAreaView>
  )
}

export default VetInfoPage

const styles = StyleSheet.create({
    frameParentBg: {
        backgroundColor: Color.colorWhite,
        overflow: "hidden",
      },
      groupChildPosition: {
        left: 0,
        position: "absolute",
      },
      jennyTypo: {
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
      },
      vectorIconLayout: {
        height: 18,
        width: 20,
      },
      seeAllTypo: {
        height: 20,
        fontSize: FontSize.size_base,
        textAlign: "left",
      },
      petsLayout: {
        height: 15,
        color: Color.colorDarkslategray,
        fontSize: FontSize.size_xs,
      },
      parentFlexBox1: {
        width: 374,
        alignItems: "center",
        flexDirection: "row",
        marginRight:10
      },
      textTypo: {
        marginTop: 11,
        textAlign: "center",
        fontFamily: FontFamily.interRegular,
      },
      daysAgoSpaceBlock: {
        marginLeft: 12,
        fontFamily: FontFamily.interRegular,
      },
      groupLayout: {
        height: 32,
        width: 60,
      },
      parentFlexBox: {
        alignItems: "flex-end",
        flexDirection: "row",
      },
      keyboardBackspaceIcon: {
        width: 30,
        height: 30,
        overflow: "hidden",
      },
      drJennyWatson: {
        fontSize: FontSize.size_5xl,
        color: Color.colorBlack,
        marginLeft: 20,
        textAlign: "left",
      },
      keyboardBackspaceParent: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginLeft:-10
      },
      frameWrapper: {
        padding: Padding.p_3xs,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      },
      vectorIcon: {
        marginLeft: 40,
      },
      frameParent: {
        top: 30,
        width: 430,
        paddingHorizontal: Padding.p_11xl,
        paddingVertical: Padding.p_xl,
        alignItems: "center",
        flexDirection: "row",
        overflow: "hidden",
      },
      frameChild: {
        borderRadius: 16,
        width: 110,
        height: 110,
      },
      drJennyWatson1: {
        width: 170,
        color: Color.colorGray,
        height: 30,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
      },
      frameItem: {
        borderColor: "#eeeeef",
        borderTopWidth: 1,
        width: 200,
        height: 1,
        marginTop: 12,
        borderStyle: "solid",
      },
      vetDermatologist: {
        width: 111,
        fontFamily: FontFamily.interRegular,
        textAlign: "left",
      },
      christHospitalLondon: {
        width: 184,
        marginTop: 5,
        fontFamily: FontFamily.interRegular,
        textAlign: "left",
      },
      vetDermatologistParent: {
        marginTop: 12,
      },
      drJennyWatsonParent: {
        marginLeft: 46,
      },
      frameInner: {
        width: 59,
        height: 59,
      },
      text: {
        width: 60,
        marginTop: 11,
        fontSize: FontSize.size_base,
        height: 18,
        color: Color.colorRoyalblue_100,
      },
      pets: {
        width: 26,
        height: 15,
        color: Color.colorDarkslategray,
        fontSize: FontSize.size_xs,
      },
      frameContainer: {
        justifyContent: "center",
        alignItems: "center",
      },
      text1: {
        color: "#3c7cfe",
        width: 60,
        marginTop: 11,
        fontSize: FontSize.size_base,
        height: 18,
      },
      years: {
        width: 31,
        height: 15,
        color: Color.colorDarkslategray,
        fontSize: FontSize.size_xs,
      },
      ellipseGroup: {
        marginLeft: 38,
        justifyContent: "center",
        alignItems: "center",
      },
      rating: {
        width: 36,
        height: 15,
        color: Color.colorDarkslategray,
        fontSize: FontSize.size_xs,
      },
      reviews: {
        width: 46,
        height: 15,
        color: Color.colorDarkslategray,
        fontSize: FontSize.size_xs,
      },
      frameParent1: {
        justifyContent: "center",
      },
      drJennyWatson2: {
        color: Color.colorDarkslategray,
        
      },
      viewMore: {
        color: Color.colorRoyalblue_300,
      },
      drJennyWatsonContainer: {
        width: 350,
        height: 60,
        marginTop: 21,
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_xs,
        textAlign: "left",
      },
      aboutMeParent: {
        marginTop: 33,
        marginRight:10
      },
      workingTime: {
        width: 190,
        color: Color.colorGray,
        height: 17,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
      },
      mondayFriday: {
        width: 355,
        marginTop: 21,
        fontFamily: FontFamily.interRegular,
        textAlign: "left",
      },
      workingTimeParent: {
        width: 376,
        marginTop: 33,
        marginLeft:10
      },
      frameView: {
        marginTop: 49,
        justifyContent: "center",
        alignItems: "center",
        marginRight:10
      },
      reviews1: {
        width: 67,
        color: Color.colorGray,
        height: 17,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
      },
      seeAll: {
        width: 70,
        marginLeft: 220,
        color: Color.colorRoyalblue_300,
        fontFamily: FontFamily.interRegular,
      },
      reviewsParent: {
        width: 375,
        flexDirection: "row",
      },
      frameChild3: {
        width: 49,
        height: 49,
      },
      charoletteHanlin: {
        width: 132,
        height: 20,
        fontSize: FontSize.size_base,
        textAlign: "left",
        color: Color.colorGray,
      },
      ellipseParent2: {
        alignItems: "center",
        flexDirection: "row",
      },
      groupChild: {
        top: 0,
        borderRadius: Border.br_mid,
        borderColor: Color.colorRoyalblue_300,
        borderWidth: 3,
        borderStyle: "solid",
        left: 0,
        position: "absolute",
      },
      path14Icon: {
        width: 12,
        height: 12,
      },
      text4: {
        width: 15,
        marginLeft: 10,
        textAlign: "center",
        color: Color.colorRoyalblue_100,
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_base,
        height: 18,
      },
      path14Parent: {
        top: 7,
        left: 13,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
      },
      rectangleGroup: {
        marginLeft: 90,
      },
      frameParent3: {
        marginTop: 21,
        alignItems: "center",
        flexDirection: "row",
      },
      text5: {
        width: 24,
        marginLeft: 6,
        textAlign: "center",
        fontFamily: FontFamily.interRegular,
      },
      daysAgo: {
        width: 70,
        textAlign: "center",
        height: 15,
        color: Color.colorDarkslategray,
        fontSize: FontSize.size_xs,
      },
      frameParent4: {
        marginTop: 21,
      },
      frameParent2: {
        marginTop: 24,
        width: 350,
        marginLeft:10
      },
      frameGroup: {
        top: 120,
        left: 20,
        position: "absolute",
      },
      iphone1415ProMax1: {
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        flex: 1,
        width: "100%",
        height: 932,
        overflow: "hidden",
      },
      nextWrapper: {
        top: 750,
        margin:20,
        borderRadius: Border.br_52xl,
        width: 350,
        height: 70,
        paddingHorizontal: Padding.p_151xl,
        backgroundColor: Color.colorRoyalblue_300,
        paddingVertical: Padding.p_xl,
        position: "absolute",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        }
      },
      wrapperFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      },
      nextTypo: {
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_5xl,
        textAlign: "center",
        width:300
      },
      next: {
        color: Color.colorWhite,
        textAlign: 'center',
      },
})