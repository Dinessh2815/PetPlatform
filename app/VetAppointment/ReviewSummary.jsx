import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../../GlobalStyles";

const ReviewSummary = () => {
  return (
    <View style={styles.reviewsummary}>
      <View style={styles.keyboardBackspaceParent}>
        <Image
          style={styles.keyboardBackspaceIcon}
          contentFit="cover"
          source={require("../../assets/keyboard-backspace.png")}
        />
        <View style={[styles.reviewSummaryWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.reviewSummary, styles.nextTypo]}>
            Review Summary
          </Text>
        </View>
      </View>
      <View style={styles.nextWrapper}>
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </View>
      <View style={[styles.doctorTile, styles.doctorTileLayout]}>
        <View style={[styles.rectangleParent, styles.doctorTileLayout]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../../assets/rectangle-49.png")}
          />
          <View style={styles.drJennyWatsonParent}>
            <Text style={[styles.drJennyWatson, styles.dateHourTypo]}>
              Dr. Jenny Watson
            </Text>
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={styles.vetDermatologistParent}>
              <Text
                style={[styles.vetDermatologist, styles.vetDermatologistTypo]}
              >
                Vet Dermatologist
              </Text>
              <Text
                style={[
                  styles.christHospitalLondon,
                  styles.vetDermatologistTypo,
                ]}
              >
                Christ Hospital, London
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.instanceParent, styles.instanceShadowBox]}>
        <View style={styles.frameSpaceBlock}>
          <View style={styles.wrapperFlexBox}>
            <Text
              style={[styles.dateHour, styles.dateHourTypo]}
            >{`Date & Hour`}</Text>
          </View>
          <View style={[styles.dec2320241000AmWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.dec232024}>Dec 23, 2024 | 10:00 AM</Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dateHour, styles.dateHourTypo]}>Package</Text>
          </View>
          <View style={[styles.dec2320241000AmWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.dec232024}>Messaging</Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dateHour, styles.dateHourTypo]}>Duration</Text>
          </View>
          <View style={[styles.dec2320241000AmWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.dec232024}>30 minutes</Text>
          </View>
        </View>
      </View>
      <View style={[styles.instanceGroup, styles.instanceShadowBox]}>
        <View style={styles.frameSpaceBlock}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dateHour, styles.dateHourTypo]}>Rate</Text>
          </View>
          <View style={[styles.dec2320241000AmWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.dec232024}>$20</Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dateHour, styles.dateHourTypo]}>Amount</Text>
          </View>
          <View style={[styles.dec2320241000AmWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.dec232024}>1 * $20</Text>
          </View>
        </View>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dateHour, styles.dateHourTypo]}>Total</Text>
          </View>
          <View style={[styles.dec2320241000AmWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.dec232024}>$20</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  nextTypo: {
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  doctorTileLayout: {
    width: 370,
    position: "absolute",
  },
  dateHourTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  frameLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  vetDermatologistTypo: {
    height: 15,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  instanceShadowBox: {
    borderRadius: Border.br_6xl,
    width: 370,
    left: 15,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
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
  frameSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderRadius: Border.br_mini,
    width: 380,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  keyboardBackspaceIcon: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  reviewSummary: {
    color: Color.colorBlack,
  },
  reviewSummaryWrapper: {
    marginLeft: 10,
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  keyboardBackspaceParent: {
    top: 30,
    width: 430,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    left: -20,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  next: {
    color: Color.colorWhite,
    width:300,
    textAlign:'center',
    justifyContent:'center'
  },
  nextWrapper: {
    top: 760,
    borderRadius: Border.br_95xl,
    backgroundColor: Color.colorRoyalblue_300,
    height: 70,
    paddingHorizontal: Padding.p_151xl,
    width: 360,
    left: 15,
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
  frameChild: {
    borderRadius: Border.br_base,
    width: 110,
    height: 110,
  },
  drJennyWatson: {
    color: Color.colorGray,
    width: 181,
    height: 17,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  frameItem: {
    borderColor: Color.colorWhitesmoke,
    width: 200,
    marginTop: 12,
  },
  vetDermatologist: {
    width: 111,
  },
  christHospitalLondon: {
    width: 184,
    marginTop: 5,
  },
  vetDermatologistParent: {
    marginTop: 12,
  },
  drJennyWatsonParent: {
    marginLeft: 40,
  },
  rectangleParent: {
    top: 15,
    alignItems: "center",
    flexDirection: "row",
    left: 12,
    width: 380,
  },
  doctorTile: {
    top: 120,
    left: 10,
    height: 140,
    width: 250,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",  },
  dateHour: {
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    color: Color.colorBlack,
  },
  dec232024: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
  },
  dec2320241000AmWrapper: {
    justifyContent: "flex-end",
  },
  frameGroup: {
    marginTop: 10,
  },
  instanceParent: {
    top: 280
  },
  frameInner: {
    borderColor: "rgba(0, 0, 0, 0.5)",
    width: 381,
    marginTop: 10,
  },
  instanceGroup: {
    top: 510,
  },
  reviewsummary: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    borderStyle: "solid",
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
});

export default ReviewSummary;
