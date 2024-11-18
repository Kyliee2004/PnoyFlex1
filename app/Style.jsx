// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'


// const profile = () => {
//   return (
//     <View>
//       <Text>profile</Text>
//     </View>
//    )
// }

// export default profile

// const styles = StyleSheet.create({})

import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const Box = ({ className, ...props }) => (
  <StyledText className={`flex text-center h-14 justify-center items-center text-white bg-fuchsia-500 rounded ${className}`} {...props}/>
)

const App = () => {
  return (
    <StyledView className="flex flex-row h-screen items-center space-x-2">
      <Box className="basis-1/4">01</Box>
      <Box className="basis-1/4">02</Box>
      <Box className="basis-1/2">03</Box>
    </StyledView>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);