import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Padding, FontFamily, FontSize, Color, Border} from '../../GlobalStyles'
import { router } from 'expo-router'
import { VetInfoPage } from '../VetAppointment/VetInfoPage'

const BookAppointment = () => {
  return (
    <SafeAreaView style={Color.colorWhite}>
      <View style={styles.keyboardBackspaceParent}>
            <Image
              style={styles.keyboardBackspaceIcon}
              contentFit="cover"
              source={require("../../assets/Keyboardbackspace.png")}
            />
            <Text style={styles.headerName}>Book Appontment</Text>
     </View>
     <View style={styles.filterLayout}>
          <View style={[styles.groupChild]} />
          <View style={[styles.path14Parent]}>
            <Image
              style={styles.path14Icon}
              contentFit="cover"
              source={require("../../assets/path142.png")}
            />
            <Text style={[styles.all, styles.allTypo]}>All</Text>
          </View>
          <View style={[styles.rectangleGroup]}>
          <View style={[styles.groupItem]} />
          <View style={styles.path14Position}>
            <Image
              style={styles.path14Icon}
              contentFit="cover"
              source={require("../../assets/path142.png")}
            />
            <Text style={[styles.text, styles.allTypo]}>5</Text>
          </View>
          </View>
          <View style={[styles.rectangleGroup]}>
          <View style={[styles.groupItem]} />
          <View style={styles.path14Position}>
            <Image
              style={styles.path14Icon}
              contentFit="cover"
              source={require("../../assets/path142.png")}
            />
            <Text style={[styles.text, styles.allTypo]}>4</Text>
          </View>
          </View>
          <View style={[styles.rectangleGroup]}>
          <View style={[styles.groupItem]} />
          <View style={styles.path14Position}>
            <Image
              style={styles.path14Icon}
              contentFit="cover"
              source={require("../../assets/path142.png")}
            />
            <Text style={[styles.text, styles.allTypo]}>3</Text>
          </View>
          </View>
          <View style={[styles.rectangleGroup]}>
          <View style={[styles.groupItem]} />
          <View style={styles.path14Position}>
            <Image
              style={styles.path14Icon}
              contentFit="cover"
              source={require("../../assets/path142.png")}
            />
            <Text style={[styles.text, styles.allTypo]}>2</Text>
          </View>
          </View>
      </View>
      <ScrollView>
         <View style={styles.vetTileLayout}>
           <Pressable onPress={() => router.push('../VetAppointment/VetInfoPage')}>
              <View style={styles.vetTileInfo}>
                <View style={styles.frameContainerFlexBox}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../../assets/ellipse-511.png")}
                  />
                  <Text style={[styles.charoletteHanlin, styles.allTypo]}>
                    Charolette Hanlin
                  </Text>
                </View>
                <View style={[styles.rectangleParent2]}>
                  <View style={[styles.groupItem]} />
                  <View style={styles.path14Position}>
                    <Image
                      style={styles.path14Icon}
                      contentFit="cover"
                      source={require("../../assets/path141.png")}
                    />
                    <Text style={[styles.text, styles.allTypo]}>5</Text>
                  </View>
                </View>
              </View>
              </Pressable>
            <Text style={[styles.drJennyIs, styles.text5Typo]}>
              Dr. Jenny is very professional in his work
            </Text>
            <View style={[styles.frameParent1, styles.parentFlexBox]}>
              <View style={styles.parentFlexBox}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../../assets/vector.png")}
                />
                <Text style={[styles.text5, styles.text5Typo]}>698</Text>
              </View>
              <Text style={[styles.daysAgo, styles.text5Typo]}>6 days ago</Text>
            </View>
            </View>
            <View style={styles.vetTileLayout}>
              <View style={styles.vetTileInfo}>
                <View style={styles.frameContainerFlexBox}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../../assets/ellipse-511.png")}
                  />
                  <Text style={[styles.charoletteHanlin, styles.allTypo]}>
                    Charolette Hanlin
                  </Text>
                </View>
                <View style={[styles.rectangleParent2]}>
                  <View style={[styles.groupItem]} />
                  <View style={styles.path14Position}>
                    <Image
                      style={styles.path14Icon}
                      contentFit="cover"
                      source={require("../../assets/path141.png")}
                    />
                    <Text style={[styles.text, styles.allTypo]}>5</Text>
                  </View>
                </View>
              </View>
              <Text style={[styles.drJennyIs, styles.text5Typo]}>
                Dr. Jenny is very professional in his work
              </Text>
              <View style={[styles.frameParent1, styles.parentFlexBox]}>
                <View style={styles.parentFlexBox}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../../assets/vector.png")}
                  />
                  <Text style={[styles.text5, styles.text5Typo]}>698</Text>
                </View>
                <Text style={[styles.daysAgo, styles.text5Typo]}>6 days ago</Text>
              </View>
            </View>
            <View style={styles.vetTileLayout}>
              <View style={styles.vetTileInfo}>
                <View style={styles.frameContainerFlexBox}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../../assets/ellipse-511.png")}
                  />
                  <Text style={[styles.charoletteHanlin, styles.allTypo]}>
                    Charolette Hanlin
                  </Text>
                </View>
                <View style={[styles.rectangleParent2]}>
                  <View style={[styles.groupItem]} />
                  <View style={styles.path14Position}>
                    <Image
                      style={styles.path14Icon}
                      contentFit="cover"
                      source={require("../../assets/path141.png")}
                    />
                    <Text style={[styles.text, styles.allTypo]}>5</Text>
                  </View>
                </View>
              </View>
              <Text style={[styles.drJennyIs, styles.text5Typo]}>
                Dr. Jenny is very professional in his work
              </Text>
              <View style={[styles.frameParent1, styles.parentFlexBox]}>
                <View style={styles.parentFlexBox}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../../assets/vector.png")}
                  />
                  <Text style={[styles.text5, styles.text5Typo]}>698</Text>
                </View>
                <Text style={[styles.daysAgo, styles.text5Typo]}>6 days ago</Text>
              </View>
            </View>
            <View style={styles.vetTileLayout}>
              <View style={styles.vetTileInfo}>
                <View style={styles.frameContainerFlexBox}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../../assets/ellipse-511.png")}
                  />
                  <Text style={[styles.charoletteHanlin, styles.allTypo]}>
                    Charolette Hanlin
                  </Text>
                </View>
                <View style={[styles.rectangleParent2]}>
                  <View style={[styles.groupItem]} />
                  <View style={styles.path14Position}>
                    <Image
                      style={styles.path14Icon}
                      contentFit="cover"
                      source={require("../../assets/path141.png")}
                    />
                    <Text style={[styles.text, styles.allTypo]}>5</Text>
                  </View>
                </View>
              </View>
              <Text style={[styles.drJennyIs, styles.text5Typo]}>
                Dr. Jenny is very professional in his work
              </Text>
              <View style={[styles.frameParent1, styles.parentFlexBox]}>
                <View style={styles.parentFlexBox}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../../assets/vector.png")}
                  />
                  <Text style={[styles.text5, styles.text5Typo]}>698</Text>
                </View>
                <Text style={[styles.daysAgo, styles.text5Typo]}>6 days ago</Text>
              </View>
            </View>
            <View style={styles.vetTileLayout}>
              <View style={styles.vetTileInfo}>
                <View style={styles.frameContainerFlexBox}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../../assets/ellipse-511.png")}
                  />
                  <Text style={[styles.charoletteHanlin, styles.allTypo]}>
                    Charolette Hanlin
                  </Text>
                </View>
                <View style={[styles.rectangleParent2]}>
                  <View style={[styles.groupItem]} />
                  <View style={styles.path14Position}>
                    <Image
                      style={styles.path14Icon}
                      contentFit="cover"
                      source={require("../../assets/path141.png")}
                    />
                    <Text style={[styles.text, styles.allTypo]}>5</Text>
                  </View>
                </View>
              </View>
              <Text style={[styles.drJennyIs, styles.text5Typo]}>
                Dr. Jenny is very professional in his work
              </Text>
              <View style={[styles.frameParent1, styles.parentFlexBox]}>
                <View style={styles.parentFlexBox}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../../assets/vector.png")}
                  />
                  <Text style={[styles.text5, styles.text5Typo]}>698</Text>
                </View>
                <Text style={[styles.daysAgo, styles.text5Typo]}>6 days ago</Text>
              </View>
            </View>
          
       </ScrollView>
        <View style={[styles.nextWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.next, styles.nextTypo]}>Book Appointment</Text>
        </View>

    </SafeAreaView>
  )
}

export default BookAppointment

const styles = StyleSheet.create({
  keyboardBackspaceParent:{
    flexDirection:'row',
    margin:30,
    justifyContent:'flex-start',
    marginTop:50
  },
  keyboardBackspaceIcon:{
    width: 30,
    height: 30,

  },
  headerName: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
    marginLeft: 15,
  },
  path14Icon: {
    width: 12,
    height: 12,
  },
  all: {
    width: 19,
    marginLeft: 6,
    color: Color.colorWhite,
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    justifyContent:'center',
    marginTop:-2,
  },
  path14Parent: {
    width: 30,
    left: 13,
    top: 7,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  path14Position: {
    left: 80,
    top: 7,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },

  groupChild: {
    backgroundColor: Color.colorRoyalblue_300,
    height: 32,
    width: 70,
    borderWidth: 3,
    borderColor: Color.colorRoyalblue_300,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    top: 0,
    left: 0,
    position: "absolute",
    
  },
  filterLayout: {
    height: 32,
    width: 81,
    flexDirection:'row',
    margin:5,
    marginLeft:30
  },
  rectangleGroup: {
    marginLeft: 20,
    width: 60,
    height: 32,
  
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
    height: 32,
    width: 55,
    borderWidth: 3,
    borderColor: Color.colorRoyalblue_300,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    top: 0,
    left: 70,
    position: "absolute",    
  },
  text: {
    color: Color.colorRoyalblue_100,
    width: 15,
    height: 18,
    textAlign: "center",
    marginLeft: 6,
  },
  vetTileLayout: {
    width: 375,
    margin: 30,
    marginBottom:5
  },
  vetTileInfo: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    width: 49,
    height: 49,
    marginRight:7
  },
  charoletteHanlin: {
    color: Color.colorGray,
    width: 132,
    height: 17,
    marginLeft: 12,
    textAlign: "left",
  },
  rectangleParent2: {
    marginLeft: 20,
    marginTop:-30
  },
  groupLayout: {
    width: 60,
    height: 32,
  },
  drJennyIs: {
    width: 355,
    marginTop: 21,
    textAlign: "left",
  },
  text5Typo: {
    height: 15,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  frameParent1: {
    marginTop: 21,
  },
  parentFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 20,
    height: 18,
  },
  text5: {
    width: 24,
    marginLeft: 6,
    textAlign: "center",
  },
  text5Typo: {
    height: 15,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  daysAgo: {
    width: 70,
    marginLeft: 12,
    textAlign: "center",
  },
  frameContainerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
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