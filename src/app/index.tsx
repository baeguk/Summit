import { Text, View } from 'react-native'
import "../styles/global.css"

export default function Index() {
    return(
        <View className='flex-1 items-center justify-center'>
            <Text className='font-regular text-center text-lg'>
                React Native
            </Text>
        </View>
    )
}