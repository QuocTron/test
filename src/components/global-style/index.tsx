import { View, Text } from 'react-native'
import React, { Children } from 'react'

export default function GlobalStyles({children}:{children:React.ReactNode}):JSX.Element {
  return (
    <View >
     {children}
    </View>
  )
}