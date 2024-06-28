import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Padding, FontFamily, FontSize, Color, Border } from '../../GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const Payments = () => {
  return (
    <SafeAreaView>
        <View style={styles.keyboardBackspaceParent}>
        <Image
          style={styles.keyboardBackspaceIcon}
          contentFit="cover"
          source={require("../../assets/keyboard-backspace.png")}
        />
        <View
          style={[styles.bookAppointmentWrapper, styles.timeslotParentFlexBox]}
        >
          <Text style={[styles.bookAppointment, styles.selectDateFlexBox]}>
            Payments
          </Text>
        </View>
        </View>
        <View
        style={[styles.selectThePreferredModeOfPWrapper, styles.wrapperFlexBox]}
      >
        <Text style={[styles.selectThePreferred, styles.paytmTypo]}>
          Select the preferred mode of payment
        </Text>
      </View>
      <View style={[styles.frameParent, styles.frameShadowBox]}>
        <View style={[styles.paytmWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.paytm, styles.paytmTypo]}>Paytm</Text>
        </View>
        <Image
          style={[styles.simpleIconspaytm, styles.simpleLayout]}
          contentFit="cover"
          source={require("../../assets/simple-icons_paytm.png")}
        />
        <Image
          style={[styles.instanceChild, styles.instanceChildLayout]}
          contentFit="cover"
          source={require("../../assets/Ellipse-48-stroke.png")}
        />
      </View>
      <View style={[styles.frameGroup, styles.frameShadowBox2]}>
        <View style={[styles.paytmWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.paytm, styles.paytmTypo]}>Google Pay</Text>
        </View>
        <Image
          style={[styles.simpleIconspaytm1, styles.simpleLayout]}
          contentFit="cover"
          source={require("../../assets/devicon_google.png")}
        />
        <Image
          style={[styles.instanceChild, styles.instanceChildLayout]}
          contentFit="cover"
          source={require("../../assets/Ellipse-48-stroke.png")}
        />
      </View>
      <View style={[styles.frameContainer, styles.frameShadowBox]}>
        <View style={[styles.paytmWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.paytm, styles.paytmTypo]}>Apple Pay</Text>
        </View>
        <Image
          style={[styles.instanceChild, styles.instanceChildLayout]}
          contentFit="cover"
          source={require("../../assets/Ellipse-48-stroke.png")}
        />
        <Image
          style={styles.icbaselineAppleIcon}
          contentFit="cover"
          source={require("../../assets/icbaselineapple.png")}
        />
      </View>
      <Pressable onPress={() => router.push('../VetAppointment/ReviewSummary')}>
            <View style={[styles.nextWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.next, styles.nextTypo]}>Next</Text>
            </View>
       </Pressable>
       <Pressable onPress={() => router.push('../VetAppointment/AddNewCard')}>
            <View style={[styles.nextWrapper1, styles.wrapperFlexBox1]}>
            <Text style={[styles.next1, styles.nextTypo1]}>Add new card</Text>
            </View>
       </Pressable>
    </SafeAreaView>
  )
}

export default Payments

const styles = StyleSheet.create({
    keyboardBackspaceParent: {
        top: 30,
        width: 430,
        paddingHorizontal: Padding.p_11xl,
        paddingVertical: Padding.p_xl,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        left: -10,
        overflow: "hidden",
      },
      keyboardBackspaceIcon: {
        width: 30,
        height: 30,
        overflow: "hidden",
      },
      bookAppointment: {
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_5xl,
      },
      bookAppointmentWrapper: {
        marginLeft: 10,
        padding: Padding.p_3xs,
      },
      timeslotParentFlexBox: {
        justifyContent: "center",
        padding: Padding.p_3xs,
        alignItems: "center",
        flexDirection: "row",
      },
      selectDateFlexBox: {
        textAlign: "left",
        color: Color.colorBlack,
      },
      instanceChildLayout: {
        height: 32,
        width: 32,
      },
      wrapperFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      },
      nextTypo: {
        textAlign: "left",
        fontSize: FontSize.size_5xl,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
      },
      nextShadowBox: {
        paddingHorizontal: Padding.p_151xl,
        height: 70,
        width: 400,
        borderRadius: Border.br_52xl,
        justifyContent: "center",
        paddingVertical: Padding.p_xl,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
      },
      paytmTypo: {
        fontSize: FontSize.size_xl,
        textAlign: "left",
        color: Color.colorBlack,
      },
      frameGroup: {
        top: 342,
        left: 25,
        width:350
      },
      frameShadowBox: {
        height: 79,
        width: 350,
        borderRadius: Border.br_xl,
        position: "absolute",
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
      },
      frameShadowBox2: {
        height: 79,
        width: 350,
        borderRadius: Border.br_xl,
        position: "absolute",
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        marginLeft:-5
      },
      simpleLayout: {
        height: 24,
        width: 24,
        position: "absolute",
        overflow: "hidden",
      },
      keyboardBackspaceIcon: {
        overflow: "hidden",
      },
      payments: {
        color: Color.colorBlack,
        textAlign: "left",
        fontSize: FontSize.size_5xl,
      },
      paymentsWrapper: {
        marginLeft: 10,
      },
      next: {
        color: Color.colorWhite,
        textAlign: "left",
        fontSize: FontSize.size_5xl,
      },
      nextWrapper: {
        top: 832,
        left: 15,
        backgroundColor: Color.colorRoyalblue_300,
      },
      next1: {
        color: Color.colorRoyalblue_300,
        textAlign: "left",
        fontSize: FontSize.size_5xl,
      },
      nextButtons: {
        top: 751,
        left: 16,
        backgroundColor: Color.colorLavender,
      },
      selectThePreferred: {
        fontFamily: FontFamily.interRegular,
      },
      selectThePreferredModeOfPWrapper: {
        top: 140,
        left: 15,
        position: "absolute",
        width:365
      },
      paytm: {
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_xl,
      },
      paytmWrapper: {
        top: 23,
        left: 55,
        position: "absolute",
      },
      simpleIconspaytm: {
        left: 20,
        top: 27,
        width: 27,
        height:35
      },
      instanceChild: {
        top: 24,
        left: 300,
        position: "absolute",
      },
      instanceItem: {
        top: 26,
        left: 313,
        width: 26,
        height: 26,
        position: "absolute",
      },
      frameParent: {
        top: 230,
        left: 20,
      },
      simpleIconspaytm1: {
        left: 20,
        top: 27,
        width: 24,
      },

      icbaselineAppleIcon: {
        top: 25,
        left: 18,
        width: 28,
        height: 28,
        position: "absolute",
        overflow: "hidden",
      },
      frameContainer: {
        top: 450,
        left: 20,
      },
      devicongoogle: {
        top: 369,
        left: 44,
      },
      iphone1415ProMax18: {
        flex: 1,
        width: "100%",
        height: 932,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
      },
      nextWrapper: {
        top: 700,
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
      nextWrapper1: {
        top: 615,
        margin:20,
        borderRadius: Border.br_52xl,
        width: 350,
        height: 70,
        paddingHorizontal: Padding.p_151xl,
        backgroundColor: Color.colorAliceblue,
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
      wrapperFlexBox1: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      },
      nextTypo1: {
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_5xl,
        textAlign: "center",
        width:300
      },
      next1: {
        color: Color.colorRoyalblue_100,
        textAlign: 'center',
      },
})

