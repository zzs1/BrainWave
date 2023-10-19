// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
// import { inventory } from "../data/quizTest"
// import React from "react"

// export default function quizTest(){

//     return(
//         <>
//         <View style={styles.container}>
//            {/* {inventory.quizTest.map((question, index))} */}
//                 <Text>{question.questionDescription}</Text>
//                 <Image source={{ uri: question.question }} />
//                     <TouchableOpacity style={[styles.optionButton, {backgroundColor: '#E84A34'}]}>
//                         <Text>{question.option1}</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={[styles.optionButton, {backgroundColor: '#10CA23'}]}>
//                         <Text>{question.option2}</Text>
//                      </TouchableOpacity>
//                      <TouchableOpacity style={[styles.optionButton, {backgroundColor: '#EFB00C'}]}>
//                         <Text>{question.option3}</Text>
//                      </TouchableOpacity>
//                      <TouchableOpacity style={[styles.optionButton, {backgroundColor: '#0C7BDC'}]}>
//                         <Text>{question.option4}</Text>
//                      </TouchableOpacity>
//         </View>
//         </>
//     )
// }